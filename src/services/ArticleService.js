import gql from 'graphql-tag';

import CloudService from "./CloudService";
import * as queries from '../graphql/queries';
import * as myQueries from '../graphql/my-queries';
import * as mutations from '../graphql/mutations';
import AppService from './AppService';

export default class ArticleService {

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
          
  _setStatus = async (article) => {
    const result = await this.dbConn.query({ query: gql(myQueries.getStatus), variables: { id: article.id } });
    const status = result.data.getArticle.myArticles.items[0] || {};
    article.have = status.have;
    article.favorite = status.favorite;
    article.myArticleId = status.id;
    return article;
  }

  list = async (type) => {
    const result = await this.dbConn.query({ query: gql(queries.listArticles), variables: { filter: { type: { eq: type } } } });
    const list = await Promise.all(result.data.listArticles.items.map(async article => {
      article.imageUrl = await AppService.imageUrl(article.image);
      await this._setStatus(article);
      return article;
    }));
    return list;
  }
  
  get = async (id) => {
    const result = await this.dbConn.query({ query: gql(queries.getArticle), variables: { id } });
    let article = result.data.getArticle;
    article.imageUrl = await AppService.imageUrl(article.image);
    await this._setStatus(article);
    return article;
  }

  toggleFavorite = async (article) => {
    const exists = !!article.myArticleId;
    if (exists) {
      await this.dbConn.mutate({ 
        mutation: gql(mutations.updateMyArticle), 
        variables: { 
          input: {
            id: article.myArticleId,
            favorite: !article.favorite,
          }
        } 
      });
      article.favorite = !article.favorite;
    } else {
      const result = await this.dbConn.mutate({ 
        mutation: gql(mutations.createMyArticle), 
        variables: { 
          input: { 
            favorite: true, 
            myArticleArticleId: article.id 
          } 
        } 
      });
      article.myArticleId = result.data.createMyArticle.id;
      article.favorite = true;
    }
    return article;
  }

  // # TASKS

  getTasks = async (article) => {
    const result = await this.dbConn.query({ query: gql(myQueries.getTasks), variables: { id: article.id } });
    const tasks = await Promise.all(result.data.getArticle.tasks.items.map(async t => {
      let task = {
        id: t.task.id,
        name: t.task.name,
        period: t.task.period,
        note: t.task.note,
        materials: t.task.materials.items.map(m => m),
        instructions: t.task.instructions.items.map(i => i),
        images: await Promise.all(t.task.images.items.map(async img => {
          img.url = await AppService.imageUrl(img.file);
          return img;
        })),
      };
      return task;
    }));
    return tasks;
  }
}