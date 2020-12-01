import gql from 'graphql-tag';
import moment from 'moment';

import CloudService from "./CloudService";
import * as queries from '../graphql/queries';
import * as myQueries from '../graphql/my-queries-old';
import * as mutations from '../graphql/mutations';
import AppService from './AppService';
import constants from '../constants';

export default class MyArticleService {

  constructor() {
    const cloudService = CloudService.getInstance();
    this.dbConn = cloudService.dbConn();
  }
  
  _intervalToMills = (interval = 0, unit) => {
    switch (unit) {
      case 'hour':
        return interval * 60 * 60 * 1000;
      case 'day':
        return interval * 24 * 60 * 60 * 1000;
      case 'month':
        return interval * 30 * 24 * 60 * 60 * 1000;
      default:
        return 0;
    }
  }  

  _intervalToHour = (interval = 0, unit) => {
    switch (unit) {
      case 'hour':
        return interval;
      case 'day':
        return interval * 24;
      case 'month':
        return interval * 24 * 30;
      default:
        return 0;
    }
  }  

  // TODO Revisit code
  _parseNotifications = (schedule) => {
    let notifs = {
      alerts: 0,
      items: {},
    };
    try {
      const today = new Date();
      today.setHours(0,0,0,0)
      schedule.forEach(item => {
        if (!item.alert) return;
        let lastTime = new Date(item.lastTime);
        lastTime.setMinutes(0,0,0); // Precise hour
        let diffDays = -100;
        let nextTime = new Date(lastTime.getTime());
        if (item.intervalUnit !== constants.HOUR) {
          nextTime.setHours(constants[`HOUR_${item.dayPeriod}`]);
        }
        do {
          if (diffDays >= 0) {
            let aux = new Date(nextTime.getTime());
            aux.setHours(0,0,0,0); // Group by day
            const key = `${aux.getTime()}`;
            if (!notifs.items[key]) notifs.items[key] = [];
            notifs.items[key].push({ 
              ...item, 
              nextTime: nextTime.getTime(), 
            });
            if (moment(nextTime).isSameOrBefore(moment())) notifs.alerts++;
          }
          switch (item.intervalUnit) {
            case constants.HOUR:
              nextTime.setHours(nextTime.getHours() + item.interval);              
              break;
            case constants.DAY:
              nextTime.setDate(nextTime.getDate() + item.interval);              
              break;
            case constants.MONTH:
              nextTime.setMonth(nextTime.getMonth() + item.interval);              
              break;
            default:
              break;
          }
          diffDays = (nextTime - today) / (1000*60*60*24);  
        } while (diffDays <= 2)
      });
    } catch (error) {
      console.log(error)
    }
    return notifs;
  }
  
  list = async (type) => {
    const result = await this.dbConn.query({ query: gql(queries.listMyArticles) });
    const list = await Promise.all(result.data.listMyArticles.items.map(async myArticle => {
      myArticle.imageUrl = await AppService.imageUrl(myArticle.myImage || myArticle.article.image);
      return myArticle;
    }));
    return list;
  }

  /*
  * Lists all schedule for all articles of the signed in user
  *
  * @return [
      {
        "task": "water",
        "myOwnId": "dc7e3b60-1c6e-4f1c-ad6d-55a8691d1bb5",
        "myOwnIdent": "Abobora",
        "createdAt": "2019-06-12T09:41:42.510Z",
        "dayPeriod": "MORNING",
        "interval": 1,
        "intervalUnit": "DAY",
        "moonFase": null,
        "season": null
      }
    ]
  * TODO Revisit code
  */
  listNotifications = async () => {
    let schedule = [];
    const result = await this.dbConn.query({ query: gql(myQueries.listSchedule) });
    result.data.listMyOwns.items.forEach(myOwn => {
      const tasks = myOwn.myArticle.article.tasks.items;
      const notes = myOwn.myNotes.items;
      let lastActions = {};
      notes.forEach(note => {
        if (!lastActions[note.action] || lastActions[note.action] < new Date(note.dateTime).getTime()) {
          lastActions[note.action] = new Date(note.dateTime).getTime();
        }
      });
      tasks.forEach(item => {
        schedule.push({ 
          ...item.task,
          lastTime: lastActions[item.task.name] || myOwn.createdAt,
          myOwnId: myOwn.id,
          myOwnIdent: myOwn.ident,
        });
      });
    });
    const notifs = this._parseNotifications(schedule);
    return notifs;
  }

  get = async (id) => {
    const result = await this.dbConn.query({ query: gql(queries.getMyArticle), variables: { id } });
    let myArticle = result.data.getMyArticle;
    myArticle.imageUrl = await AppService.imageUrl(myArticle.myImage || myArticle.article.image);
    return myArticle;
  }

  getByMyOwnId = async (id) => {
    const result = await this.dbConn.query({ query: gql(myQueries.getMyOwn), variables: { id } });
    const savedMyOwn = result.data.getMyOwn;
    let myArticle = savedMyOwn.myArticle;
    myArticle.myOwns = [savedMyOwn];
    // Gets the image URL with the myArticle image with precedence onver the arciel image.
    myArticle.imageUrl = await AppService.imageUrl(myArticle.myImage || myArticle.article.image);
    return myArticle;
  }
  
  // Search for the myArticle for the provided article.
  // If there is no myArticle returns and empty one with the provided article in it.
  getByArticle = async (article) => {
    const result = await this.dbConn.query({ query: gql(myQueries.getMyArticle), variables: { id: article.id } });
    const savedArticle = result.data.getArticle;
    let myArticle = savedArticle.myArticles.items[0] || {};
    myArticle.article = {
      id: savedArticle.id,
      type: savedArticle.type,
      name: savedArticle.name,
      subtitle: savedArticle.subtitle,
      image: savedArticle.image,
    }
    // Gets the image URL with the myArticle image with precedence onver the arciel image.
    myArticle.imageUrl = await AppService.imageUrl(myArticle.myImage || myArticle.article.image);
    return myArticle;
  }
  
  save = async (myArticle) => {
    let savedMyArticle = {};
    if (myArticle.id) {
      const result = await this.dbConn.mutate({
        mutation: gql(mutations.updateMyArticle),
        variables: { 
          input: {
            id: myArticle.id,
            have: true, // TODO myArticle.have,
          } 
        },
      });
      savedMyArticle = result.data.updateMyArticle;
    } else {
      const result = await this.dbConn.mutate({
        mutation: gql(mutations.createMyArticle),
        variables: { 
          input: {
            have: true,
            myArticleArticleId: myArticle.article.id,
          } 
        },
      });
      savedMyArticle = result.data.createMyArticle;
    }
    savedMyArticle.imageUrl = await AppService.imageUrl(savedMyArticle.myImage || savedMyArticle.article.image);
    return savedMyArticle;
  }

  saveMyOwn = async (myOwn={}, myArticle) => {
    let savedMyOwn = {};
    if (myOwn.id) {
      const result = await this.dbConn.mutate({
        mutation: gql(mutations.updateMyOwn),
        variables: { 
          input: {
            id: myOwn.id,
            ident: myOwn.ident,
            look: myOwn.look,
            growth: myOwn.growth,
            health: myOwn.health,
            myOwnMyArticleId: myArticle.id,
          } 
        },
      });
      savedMyOwn = result.data.updateMyOwn;
    } else {
      const result = await this.dbConn.mutate({
        mutation: gql(mutations.createMyOwn),
        variables: { 
          input: {
            ident: myOwn.ident,
            look: myOwn.look,
            growth: myOwn.growth,
            health: myOwn.health,
            myOwnMyArticleId: myArticle.id,
          } 
        },
      });
      savedMyOwn = result.data.createMyOwn;
    }
    return savedMyOwn;
  }

  saveMyNote = async (myNote, myOwn) => {
    let savedMyNote = {};
    if (myNote.id) {
      const result = await this.dbConn.mutate({
        mutation: gql(mutations.updateMyNote),
        variables: { 
          input: {
            id: myNote.id,
            look: myNote.look,
            growth: myNote.growth,
            health: myNote.health,
            note: myNote.note,
            action: myNote.action,
            dateTime: myNote.dateTime,
            // image: myNote.image,
            myNoteMyOwnId: myOwn.id,
          } 
        },
      });
      savedMyNote = result.data.updateMyNote;
    } else {
      const result = await this.dbConn.mutate({
        mutation: gql(mutations.createMyNote),
        variables: { 
          input: {
            look: myNote.look,
            growth: myNote.growth,
            health: myNote.health,
            note: myNote.note,
            action: myNote.action,
            dateTime: myNote.dateTime,
            // image: myNote.image,
            myNoteMyOwnId: myOwn.id,
          } 
        },
      });
      savedMyNote = result.data.createMyNote;
    }
    return savedMyNote;
  }

  // # MY_OWNS

  getMyOwns = async (myArticle) => {
    if (!myArticle.id) return [];
    const result = await this.dbConn.query({ query: gql(myQueries.getMyOwns), variables: { id: myArticle.id } });
    const myOwns = result.data.getMyArticle.myOwns.items.map(item => {
      const myOwn = {
        id: item.id,
        ident: item.ident,
        look: item.look,
        growth: item.growth,
        health: item.health,
        notes: item.myNotes.items.map(note => note),
      }
      return myOwn;
    });
    return myOwns;
  }
}