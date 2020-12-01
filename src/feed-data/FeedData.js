import { Auth } from 'aws-amplify';
import gql from 'graphql-tag';

import CloudService from "../services/CloudService";
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/my-queries';
import AwsConfig from '../aws-config';
import AppService from '../services/AppService';

export default class FeedData {

  static feedAll = async () => {
    const data = require('./feed-data.json');
    
    // await this.deleteAll();

    let s3Images = await this.getS3Images(['abobora.jpg', 'manjericao.jpg', 'alho-poro.jpg']);
    const articleIds = await this.feed(data.articles, 'createArticle', { "image": s3Images });
    const taskIds = await this.feed(data.tasks, 'createTask');
    const stepIds = await this.feed(data.steps, 'createStep');
    const productIds = await this.feed(data.products, 'createProduct');
    
    s3Images = await this.getS3Images([
      'abobora.jpg', 'manjericao.jpg', 'alho-poro.jpg',
      // 'abobora-recheada.jpg', 'bruschetta.jpg', 'quiche-alho-poro.jpg',
    ]);
    await this.feed(data.taskImages, 'createTaskImage', { "file": s3Images, "taskImageTaskId": taskIds });
    await this.feed(data.articleTasks, 'createArticleTask', { "articleTaskArticleId": articleIds, "articleTaskTaskId": taskIds });
    await this.feed(data.materials, 'createMaterial', { "materialProductId": productIds, "materialTaskId": taskIds });
    await this.feed(data.instructions, 'createInstruction', { "instructionStepId": stepIds, "instructionTaskId": taskIds });

    await this.createSearch();
  }
  
  static getS3Images = (fileNames, arr) =>{
    return new Promise((resolve, reject) => {
      let s3Images = [];
      fileNames.forEach(async (img, idx) => {
        const s3Img = await this.buildS3Object(img);
        const s3Obj = arr ? [s3Img] : s3Img;
        s3Images.push(s3Obj);
        if (idx === fileNames.length - 1) resolve(s3Images);
      });
    });
  }

  static deleteAll = async () => {
    const cloudService = CloudService.getInstance();
    let dbConn = cloudService.dbConn();
    await Promise.all(
      [
        [ 'listInstructions', 'deleteInstruction', ],
        [ 'listMaterials', 'deleteMaterial', ],
        [ 'listArticleTasks', 'deleteArticleTask', ],
        [ 'listTaskImages', 'deleteTaskImage', ],
        [ 'listProducts', 'deleteProduct', ],
        [ 'listSteps', 'deleteStep', ],
        [ 'listTasks', 'deleteTask', ],
        [ 'listArticles', 'deleteArticle', ],
        [ 'listManuals', 'deleteManual', ],
        [ 'listMyNotes', 'deleteMyNote', ],
        [ 'listMyOwns', 'deleteMyOwn', ],
        [ 'listMyImages', 'deleteMyImage', ],
        [ 'listMyArticles', 'deleteMyArticle', ],
        [ 'listSearchs', 'deleteSearch', ],
      ].map(async qry => {
        const list = await dbConn.query({ query: gql(queries[qry[0]]) });
        await list.data[qry[0]].items.forEach(async item => {
          const result = await dbConn.mutate({ mutation: gql(mutations[qry[1]]), variables: { input: { id: item.id } } });
          if (result.data[qry[1]]) {
            console.log(`[REMOVED] ${qry[1]}: ${result.data[qry[1]].id}`);  
          }
        });
      })
    );
  }

  static createSearch = async () => {
    const cloudService = CloudService.getInstance();
    let dbConn = cloudService.dbConn();
    await Promise.all(
      ['listArticles', 'listManuals'].map(async qry => {
        const isArticle = qry === 'listArticles';
        const list = await dbConn.query({ query: gql(queries[qry]) });
        await this.asyncForEach(list.data[qry].items, async item => {
          // Article or Manual
          let input = { 
            type: item.type, 
            key: item.id,
            title: item.name ? item.name : item.title,
          };
          const result = await dbConn.mutate({ mutation: gql(mutations.createSearch), variables: { input } });
          console.log(`[CREATED] createSearch: ${input.key} - ${input.title}`);  
          
          // Title
          let order = 1;
          let inputItem = {
            order,
            section: isArticle ? 'name' : 'title',
            content: AppService.removeDiatrics(item.name ? item.name : item.title),
            searchItemSearchId: result.data.createSearch.id,
          }
          await dbConn.mutate({ mutation: gql(mutations.createSearchItem), variables: { input: inputItem } });
          console.log(`[CREATED] createSearchItem: ${input.key} - ${input.title} - ${inputItem.section}`);  
          
          // Subtitle
          if (item.subtitle) {
            inputItem.order += 1;
            inputItem.section = isArticle ? 'sci_name' : 'subtitle';
            inputItem.content = AppService.removeDiatrics(item.subtitle);
            await dbConn.mutate({ mutation: gql(mutations.createSearchItem), variables: { input: inputItem } });
          }
          console.log(`[CREATED] createSearchItem: ${input.key} - ${input.title} - ${inputItem.section}`);  
          
          // Description
          if (item.description) {
            inputItem.order += 1;
            inputItem.section = 'description';
            inputItem.content = AppService.removeDiatrics(item.description);
            await dbConn.mutate({ mutation: gql(mutations.createSearchItem), variables: { input: inputItem } });
          }
          console.log(`[CREATED] createSearchItem: ${input.key} - ${input.title} - ${inputItem.section}`);  
          
          // Note
          if (item.note) {
            inputItem.order += 1;
            inputItem.section = 'note';
            inputItem.content = AppService.removeDiatrics(item.note);
            await dbConn.mutate({ mutation: gql(mutations.createSearchItem), variables: { input: inputItem } });
          }
          console.log(`[CREATED] createSearchItem: ${input.key} - ${input.title} - ${inputItem.section}`);  

          if (isArticle) {
            // Tasks
            await this.asyncForEach(item.tasks.items, async entry => {
              inputItem.order += 1;
              inputItem.section = entry.task.name;
              inputItem.subsection = 'note';
              inputItem.content = AppService.removeDiatrics(entry.task.note);
              await dbConn.mutate({ mutation: gql(mutations.createSearchItem), variables: { input: inputItem } });
              console.log(`[CREATED] createSearchItem: ${input.key} - ${input.title} - ${inputItem.section} - ${inputItem.subsection}`);  
              
              // Materials
              await this.asyncForEach(entry.task.materials.items, async mat => {
                inputItem.order += 1;
                inputItem.section = entry.task.name;
                inputItem.subsection = 'material';
                inputItem.content = AppService.removeDiatrics(mat.product.name);
                await dbConn.mutate({ mutation: gql(mutations.createSearchItem), variables: { input: inputItem } });
                console.log(`[CREATED] createSearchItem: ${input.key} - ${input.title} - ${inputItem.section} - ${inputItem.content}`);  
              });

              // Instructions
              inputItem.order += 1;
              await this.asyncForEach(entry.task.instructions.items, async instr => {
                inputItem.section = entry.task.name;
                inputItem.subsection = 'instructions';
                inputItem.content = AppService.removeDiatrics(instr.step.text);
                await dbConn.mutate({ mutation: gql(mutations.createSearchItem), variables: { input: inputItem } });
                console.log(`[CREATED] createSearchItem: ${input.key} - ${input.title} - ${inputItem.section} - ${inputItem.content}`);  
              });
            });

          }

        });
      })
    );
  }

  static asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

  static feed = (records, createMutation, links) => {
    const cloudService = CloudService.getInstance();
    let dbConn = cloudService.dbConn();
    return new Promise((resolve, reject) => {
      let ids = [];
      records.forEach(async (record, idx) => {
        if (links) {
          Object.keys(links).forEach(key => {
            if (links[key].length >= records.length) {
              record[key] = links[key][idx];
            } else {
              record[key] = links[key][0];
            }
          });
        }
        let result = await dbConn.mutate({ 
          mutation: gql(mutations[createMutation]),
          variables: { input: record }
        });
        if (result.data[createMutation]) {
          ids.push(result.data[createMutation].id);
          console.log(`[CREATED] ${createMutation}: ${result.data[createMutation].id}`);  
        }
        if (idx === records.length - 1) resolve(ids);
      });
    });
  }

  static buildS3Object = async (name, mimeType='image/jpeg') => {
    
    // const [, , , extension] = /([^.]+)(\.(\w+))?$/.exec(name);

    const bucket = AwsConfig.aws_user_files_s3_bucket;
    const region = AwsConfig.aws_user_files_s3_bucket_region;
    const visibility = 'public';
    const { identityId } = await Auth.currentCredentials();
    
    const key = `${visibility}/${identityId}/${name}`;
    // const key = `${visibility}/${identityId}/${uuid()}${extension && '.'}${extension}`;
    // const key = `static/images/${name}`;

    return {
      bucket,
      key,
      region,
      mimeType,
      localUri: '/Users/sampaio/pyxintel/others/facil-plantar/misc/images/' + name,
    };
  }
}