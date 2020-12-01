import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Analytics } from 'aws-amplify';
import { injectIntl, intlShape } from 'react-intl';
import { withStyles } from '@material-ui/core';

import Loader from './components/Loader';
import constants from './constants';
import AuthService from './services/AuthService';
import MessageDialog from './components/MessageDialog';
import AppService from './services/AppService';
import MyArticleService from './services/MyArticleService';
import ConfirmDialog from './components/ConfirmDialog';

const propTypes = {
  intl: intlShape.isRequired,
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const connection = connect(state => ({ state }), dispatch => ({ dispatch }));

const styles = theme => ({
  app: {
    margin: '0 auto',
    maxWidth: theme.constraints.maxWidth,
  },
});

class App extends React.Component {

  constructor(props) {
    super(props);
    this.myArticleService = new MyArticleService();
    this.state = {
      notifyDlgOpen: false
    }
  }
  
  componentDidMount() {
    const { intl, dispatch } = this.props;
    Analytics.disable();
    Analytics.record('App Started');
    this.unsubAuth = AuthService.getInstance().authorize(async (success, response) => {
      if (success) {
        dispatch({ type: constants.LOGIN, user: response.content });
        if (!response.content.emailVerified) this.props.history.push('/login');
        await this.loadNotifications();
        if (Notification.permission === 'default') this.setState({ notifyDlgOpen: true });
        else if (Notification.permission === 'granted') this.scheduleAlerts();
      } else {
        dispatch({ type: constants.LOGOUT });
      }
    });
    AppService.getGeolocation((success, response) => {
      if (success) {
        dispatch({ 
          type: constants.SET_GEOLOCATION, 
          geolocation: response.content 
        });
      } else {
        dispatch({ 
          type: constants.SET_GEOLOCATION, 
          geolocation: {
            error: intl.formatMessage({id:`Settings.geolocation.${response.message}`}) 
          },
        });
      }
    });
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return prevProps.state.notify || null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot) {
      this.props.dispatch({ type: constants.NOTIFY, notify: false });
    }
  }

  async loadNotifications() {
    const { dispatch } = this.props;
    this.myArticleService = new MyArticleService();
    const notifications = await this.myArticleService.listNotifications();
    dispatch({ type: constants.SET_NOTIFICATIONS, notifications });
  }

  scheduleAlerts = () => {
    const { intl, dispatch, state } = this.props;
    setTimeout(function checkAlerts() {
      let notify, nextHour = new Date();
      nextHour.setHours(nextHour.getHours() + 1, 0, 0, 0);
      Object.keys(state.notifications.items).forEach(day => {
        state.notifications.items[day].forEach(notif => {
          if (!notif.alerted && notif.nextTime <= nextHour.getTime()) {
            notify = notify ? intl.formatMessage({id:'App.notifMultiple'}) : notif;
            notif.alerted = true;
          }
        });
      });
      dispatch({ type: constants.NOTIFY, notify })
      setTimeout(checkAlerts, constants.ALERT_INTERVAL);
    }, constants.ALERT_DELAY);
  }

  handleMsgDlgClose = () => {
    this.setState({ notifyDlgOpen: false });
    Notification.requestPermission()
      .then(result => {
        if (result === 'granted') this.scheduleAlerts();
      });    
  }

  handleConfirmDlgConfirm = () => {
    this.handleConfirmDlgClose();
    this.props.history.push('/login');
  }

  handleConfirmDlgClose = () => {
    this.props.dispatch({ type: constants.LOGIN_REQUIRED });
  }

  checkNotification = () => {
    const { intl, state, history } = this.props;
    if (state.notify && Notification.permission === 'granted') {
      let message = state.notify;
      let url = '/';
      if (typeof state.notify !== 'string') {
        message = `${intl.formatMessage({id:`Task.${state.notify.name}`})} ${state.notify.myOwnIdent}`;
        url = `/my-own/${state.notify.myOwnId}/${state.notify.name}`;
      }
      let notif = new Notification(message);
      notif.onclick = () => history.push(url);
    }

  }

  render() {
    const { intl, classes, children, state } = this.props;
    this.checkNotification();
    return (
      <div className={classes.app}>
        {children}
        <Loader loading={state.loading} />
        <MessageDialog
          intl={intl}
          open={this.state.notifyDlgOpen}
          title={intl.formatMessage({id:'App.notifPermTitle'})}
          message={intl.formatMessage({id:'App.notifPermMessage'})}
          onClose={this.handleMsgDlgClose}
        />
        <ConfirmDialog
          intl={intl}
          open={state.loginRequired}
          title={intl.formatMessage({id:'App.loginRequiredTitle'})}
          message={intl.formatMessage({id:'App.loginRequiredMessage'})}
          onConfirm={this.handleConfirmDlgConfirm}
          onClose={this.handleConfirmDlgClose}
        />
      </div>
    );
  }
}

App.propTypes = propTypes;

export default injectIntl(withStyles(styles)(connection(withRouter(App))));