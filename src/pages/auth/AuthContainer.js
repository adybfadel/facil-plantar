import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import { connect } from 'react-redux';

import constants from '../../constants';
import AuthService from '../../services/AuthService';
import SignIn from './SignIn';
import SignUp from './SignUp';
import VerifyAccount from './VerifyAccount';
import ResetPassword from './ResetPassword';
import NewPassword from './NewPassword';

const propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
  history: PropTypes.object.isRequired,
};

const connection = connect(state => ({ state }), dispatch => ({ dispatch }));

class AuthContainer extends Component {

  constructor(props) {
    super(props);
    this.authService = AuthService.getInstance();
    this.state = {
      username: '',
      password: '',
      newPassword: '',
      phoneNumber: '',
      code: '',
      message: {},
      signInOpen: true,
      signUpOpen: false,
      verifyOpen: false,
      resetOpen: false,
      newPwdOpen: false,
    };
  }
  
  handleChange = event => {
    this.setState({ 
      ...this.state, 
      [event.target.id]: event.target.value, 
      message: {},
    });
  }

  handleBack = () => {
    this.setState({ 
      ...this.state, 
      signInOpen: true,
      signUpOpen: false,
      verifyOpen: false,
      resetOpen: false,
      newPwdOpen: false,
      message: {} 
    });
  }

  handleClose = () => {
    const { history } = this.props;
    history.push('/');
  }

  validate = fields => {
    const { intl } = this.props;
    let fieldErrors = []; 
    fields.forEach(field => {
      if (!this.state[field]) fieldErrors.push(field);
    });
    if (fieldErrors.length > 0) {
      this.setState({ 
        ...this.state, 
        message: { 
          error: true,
          fieldErrors,
          text: intl.formatMessage({id:'Auth.requiredFieldsMsg'}),
        }
      });
      return false;
    }
    return true;
  }

  handleSignIn = async (event) => {
    event.preventDefault();
    const { dispatch, intl, history } = this.props;
    if (!this.validate(['username', 'password'])) return;
    dispatch({ type: constants.SET_LOADER, loading: true });
    try {
      await this.authService.authenticate(this.state.username, this.state.password);
      history.push('/');
    } catch (error) {
      if (error.code === 'UserNotConfirmedException') {
        this.setState({ 
          ...this.state, 
          verifyOpen: true,
          message: { 
            error: false, 
            text: intl.formatMessage({id:'Auth.verifyMsg'}) 
          }
        });
      } else {
        this.setState({ 
          ...this.state, 
          message: {
            error: true,
            text: intl.formatMessage({id:'Auth.signInErrMsg'})
          }
        });
      }
    }
    dispatch({ type: constants.SET_LOADER, loading: false });
  }

  openReset = () => {
    const { intl } = this.props;
    this.setState({ 
      ...this.state, 
      resetOpen: true,
      message: {
        error: false,
        text: intl.formatMessage({id:'Auth.resetPwdMsg'})
      },
    });
  }

  openSignUp = () => {
    this.setState({ 
      ...this.state, 
      signUpOpen: true,
      message: {}
    });
  }

  handleSignUp = async (event) => {
    event.preventDefault();
    const { dispatch, intl } = this.props;
    if (!this.validate(['username', 'password'])) return;
    dispatch({ type: constants.SET_LOADER, loading: true });
    try {
      await this.authService.signUp(this.state.username, this.state.password, this.state.email, this.state.phoneNumber);
      this.setState({
        ...this.state, 
        signUpOpen: false,
        verifyOpen: true, 
        message: { 
          error: false, 
          text: intl.formatMessage({id:'Auth.verifyMsg'}) 
        }
      });
    } catch (error) {
      let text = intl.formatMessage({id:'Auth.signUpErrMsg'});
      if (error.code === 'UsernameExistsException') {
        text = intl.formatMessage({id:'Auth.emailInUse'});
      } else if ('InvalidPasswordException|InvalidParameterException'.includes(error.code)) {
        text = intl.formatMessage({id:'Auth.weakPassword'});
      }
      this.setState({ 
        ...this.state, 
        message: {
          error: true,
          text
        }
      });
    }
    dispatch({ type: constants.SET_LOADER, loading: false });
  }

  handleReset = async (event) => {
    event.preventDefault();
    const { dispatch, intl } = this.props;
    if (!this.validate(['username'])) return;
    dispatch({ type: constants.SET_LOADER, loading: true });
    try {
      await this.authService.resetPassword(this.state.username);
      this.setState({ 
        ...this.state, 
        resetOpen: false,
        newPwdOpen: true,
        message: {
          error: false,
          text: intl.formatMessage({id:'Auth.verifyMsg'})
        }
      });
    } catch (error) {
      this.setState({ 
        ...this.state, 
        message: {
          error: true,
          text: intl.formatMessage({id:'Auth.resetPwdErrMsg'})
        }
      });
    }
    dispatch({ type: constants.SET_LOADER, loading: false });
  }

  handleNewPassword = async (event) => {
    event.preventDefault();
    const { intl, dispatch } = this.props;
    if (!this.validate(['username', 'code', 'newPassword'])) return;
    dispatch({ type: constants.SET_LOADER, loading: true });
    try {
      await this.authService.resetPasswordSubmit(this.state.username, this.state.code, this.state.newPassword);
      this.setState({
        ...this.state, 
        newPwdOpen: false,
        message: { 
          error: false,
          text: intl.formatMessage({id:'Auth.newPwdOkMsg'}) 
        }
      });
    } catch (error) {
      let text = intl.formatMessage({id:'Auth.verifyErrMsg'});
      if ('InvalidPasswordException|InvalidParameterException'.includes(error.code)) {
        text = intl.formatMessage({id:'SignUp.weakPassword'});
      }
      this.setState({ 
        ...this.state, 
        message: {
          error: true,
          text
        }
      });
    }
    dispatch({ type: constants.SET_LOADER, loading: false });
  }
  
  handleVerify = async (event) => {
    event.preventDefault();
    const { dispatch, intl } = this.props;
    if (!this.validate(['username', 'code'])) return;
    dispatch({ type: constants.SET_LOADER, loading: true });
    try {
      await this.authService.confirmAccount(this.state.username, this.state.code);
      this.setState({
        ...this.state, 
        verifyOpen: false, 
        message: { 
          error: false, 
          text: intl.formatMessage({id:'Auth.verifyOkMsg'}) 
        }
      });
    } catch (error) {
      this.setState({ 
        ...this.state, 
        message: {
          error: true,
          text: intl.formatMessage({id:'Auth.verifyErrMsg'}) 
        }
      });
    }
    dispatch({ type: constants.SET_LOADER, loading: false });
  }
  
  handleResend = async () => {
    const { dispatch, intl } = this.props;
    if (!this.validate(['username'])) return;
    dispatch({ type: constants.SET_LOADER, loading: true });
    try {
      await this.authService.sendVerification(this.state.username);
      this.setState({ 
        ...this.state, 
        message: { 
          error: false, 
          text: intl.formatMessage({id:'Auth.verifyMsg'}) 
        }
      });
    } catch (error) {
      this.setState({ 
        ...this.state, 
        message: {
          error: true,
          text: intl.formatMessage({id:'Auth.resendErrMsg'})
        }
      });
    }
    dispatch({ type: constants.SET_LOADER, loading: false });
  }

  render() {
    const { intl } = this.props;
    
    return (
      <Fragment>
        <SignIn 
          intl={intl}
          open={this.state.signInOpen}
          username={this.state.username}
          onChange={this.handleChange}
          onConfirm={this.handleSignIn} 
          onClose={this.handleClose} 
          onReset={this.openReset}
          onSignUp={this.openSignUp}
          message={this.state.message}
        />
        <SignUp
          intl={intl}
          open={this.state.signUpOpen}
          username={this.state.username}
          onChange={this.handleChange}
          onConfirm={this.handleSignUp} 
          onClose={this.handleBack}
          message={this.state.message}
          />
        <VerifyAccount
          intl={intl}
          open={this.state.verifyOpen}
          username={this.state.username}
          onChange={this.handleChange}
          onConfirm={this.handleVerify}
          onClose={this.handleBack}
          onResend={this.handleResend}
          message={this.state.message}
          />
        <ResetPassword
          intl={intl}
          open={this.state.resetOpen}
          username={this.state.username}
          onChange={this.handleChange}
          onConfirm={this.handleReset} 
          onClose={this.handleBack}
          message={this.state.message}
          />
        <NewPassword
          intl={intl}
          open={this.state.newPwdOpen}
          onChange={this.handleChange}
          onConfirm={this.handleNewPassword} 
          onClose={this.handleBack}
          onResend={this.openReset}
          message={this.state.message}
        />
      </Fragment>
    );
  }
}

AuthContainer.propTypes = propTypes;

export default injectIntl(connection(AuthContainer));
