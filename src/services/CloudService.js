import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import Amplify, { Auth } from 'aws-amplify';

import AwsConfig from '../aws-config';

export default class CloudService {
  
  static getInstance() {
    if (!this.instance) {
      Amplify.configure(AwsConfig);
      this.instance = new CloudService();
      this.instance.init();
    }
    return this.instance;
  }

  static config() {
    CloudService.getInstance();
  }

  async getJwtToken() {
    return await Auth.currentSession()
      .then(data => { return data.getIdToken().getJwtToken() })
      .catch(error => { return error });
  }

  async getCredentials() {
    return await Auth.currentCredentials()
      .then(data => { return data })
      .catch(error => { return error });
  }

  init() {
    this.dbClient = new AWSAppSyncClient({
      url: AwsConfig.aws_appsync_graphqlEndpoint,
      region: AwsConfig.aws_appsync_region,
      auth: {
        type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
        jwtToken: this.getJwtToken(),
        credentials: this.getCredentials(),
      },
      complexObjectsCredentials: this.getCredentials(),
    });
  }

  dbConn() {
    return this.dbClient;
  }
}