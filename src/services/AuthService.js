import { Auth, Hub } from 'aws-amplify';
import CloudService from './CloudService';
import constants from '../constants';

export default class AuthService {

  constructor() {
    this.cloudService = CloudService.getInstance();
  }
  
  static getInstance() {
    if (!this.instance) {
      this.instance = new AuthService();
    }
    return this.instance;
  }

  parseUser(user) {
    return {
      uid: user.attributes.sub,
      // name: user.,
      email: user.attributes.email,
      emailVerified: user.attributes.email_verified,
      // photoURL: user.,
      // phoneNumber: user.,
    };
  }

  authorize(callback) {
    Auth.currentAuthenticatedUser()
    .then(user => {
      callback(user.username !== constants.ANONYNOUS_USERNAME, { 
        content: this.parseUser(user), 
        message: `Usuario logado: ${user.username}.` 
      });
    })
    .catch(err => {
      this.authenticate(constants.ANONYNOUS_USERNAME, constants.ANONYNOUS_PASSWORD);
      callback(false, { message: err })
    });
    this.listen(callback);
  }
    
  listen(callback) {
    Hub.listen('auth', result => {
      if (result.payload.event === 'signIn') {
        const user = result.payload.data;
        callback(user.username !== constants.ANONYNOUS_USERNAME, { 
          content: this.parseUser(user), 
          message: `Usuario logado: ${user.username}.` 
        });
      } else if (result.payload.event === 'signOut') {
        this.authenticate(constants.ANONYNOUS_USERNAME, constants.ANONYNOUS_PASSWORD);
        callback(false, { message: 'Usuário deslogado.' });
      }
    });
  }

  async authenticate(username, password) {
    const user = await Auth.signIn(username, password);
    if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
      await Auth.completeNewPassword(user, constants.ANONYNOUS_PASSWORD)
    }
  }
  
  signUp(username, password, email, phoneNumber) {
    return Auth.signUp({
      username: username,
      password: password,
      attributes: {
          email: email || username,
          phone_number: phoneNumber,
      },
    });
  }

  confirmAccount(username, code) {
    return Auth.confirmSignUp(username, code);
  }

  sendVerification(username) {
    return Auth.resendSignUp(username);
  }
  
  signOut() {
    Auth.signOut();
  }
  
  async resetPassword(username) {
    return Auth.forgotPassword(username);
  }

  async resetPasswordSubmit(username, code, newPassword) {
    return Auth.forgotPasswordSubmit(username, code, newPassword);
  }

  async changePassword(oldPassword, newPassword) {
    const user = await Auth.currentAuthenticatedUser();
    return Auth.changePassword(user, oldPassword, newPassword);
  }
  
  updateUserProfile(profile) {
    // return this.auth.currentUser.updateProfile({
    //   displayName: profile.nome,
    //   photoURL: profile.foto,
    // });
  }
  
  async updateCurrentUserEmail(newEmail) {
    // await this.auth.currentUser.updateEmail(newEmail);
    // return this.auth.currentUser.sendEmailVerification();
  }
}
