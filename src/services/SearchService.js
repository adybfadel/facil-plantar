import gql from 'graphql-tag';

import CloudService from "./CloudService";
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import AppService from './AppService';
import constants from '../constants';

export default class SearchService {

  constructor() {
    const cloudService = CloudService.getInstance();
    this.dbConn = cloudService.dbConn();
  }
  
  listSearchItems = async (value) => {
    const filter = value ? { content: { contains: value } } : null;
    const result = await this.dbConn.query({ query: gql(queries.listSearchItems), variables: { filter } });
    return result.data.listSearchItems.items;
  }

  saveSearchOfMyOwn = async (myOwn) => {
    let input = { 
      type: constants.TYPE_MY_OWN, 
      key: myOwn.id,
      title: myOwn.ident,
    };
    const result = await this.dbConn.mutate({ mutation: gql(mutations.createSearch), variables: { input } });
    console.log(`[CREATED] createSearch: ${input.key} - ${input.title}`);      
    let inputItem = {
      order: 1,
      section: 'ident',
      content: AppService.removeDiatrics(myOwn.ident),
      searchItemSearchId: result.data.createSearch.id,
    }
    await this.dbConn.mutate({ mutation: gql(mutations.createSearchItem), variables: { input: inputItem } });
    console.log(`[CREATED] createSearchItem: ${input.key} - ${input.title} - ${inputItem.section}`);
  }

  saveSearchOfMyNote = async (myNote, myOwn) => {
    let input = { 
      type: constants.TYPE_MY_OWN, 
      key: myOwn.id,
      title: `${myOwn.ident} (note: ${myNote.dateTime})`,
    };
    const result = await this.dbConn.mutate({ mutation: gql(mutations.createSearch), variables: { input } });
    console.log(`[CREATED] createSearch: ${input.key} - ${input.title}`);      
    let inputItem = {
      order: 1,
      section: 'note',
      content: AppService.removeDiatrics(myNote.note),
      searchItemSearchId: result.data.createSearch.id,
    }
    await this.dbConn.mutate({ mutation: gql(mutations.createSearchItem), variables: { input: inputItem } });
    console.log(`[CREATED] createSearchItem: ${input.key} - ${input.title} - ${inputItem.section}`);
  }
}