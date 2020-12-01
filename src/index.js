import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { IntlProvider, addLocaleData } from 'react-intl';
import { MuiThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { SnackbarProvider } from 'notistack';
import moment from 'moment';
import MomentUtils from '@date-io/moment';
// import throttle from 'lodash/throttle';

import en from 'react-intl/locale-data/en';
import pt from 'react-intl/locale-data/pt';
import es from 'react-intl/locale-data/es';

import './index.css';
import Theme from './index.theme';
import App from './App';
import reduxStore from './store';
// import { saveLocalStorage } from './localStorage';
import Routes from './Routes';
import CloudService from './services/CloudService';
import constants from './constants';
// import FeedData from './feed-data/FeedData';

const intl = newLanguage => {
  addLocaleData([...en, ...pt, ...es]);
  const defLanguage = 'en-US';
  let messages;
  let language = newLanguage || (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;
  let langNoRegion = language.toLowerCase().split(/[_-]+/)[0];
  try {
    messages = require(`./lang/${langNoRegion}.json`);
  } catch (e) {
    langNoRegion = defLanguage.toLowerCase().split(/[_-]+/)[0];
    messages = require(`./lang/${langNoRegion}.json`);
    console.error(`Language file for '${language}' not found, using default: ${langNoRegion}`);
  }
  return { language, messages };
}
let { language, messages } = intl();

const store = reduxStore({ language, version: constants.APP_VERSION });

CloudService.config();

// FeedData.feedAll();

const render = () => {
  // console.log(store.getState());

  if (store.getState().language !== language) {
    language = store.getState().language;
    messages = intl(store.getState().language).messages;
  }
  
  ReactDOM.render((
    <Provider store={store}>
      <MuiThemeProvider theme={Theme}>
        <IntlProvider locale={language} messages={messages}>
          <MuiPickersUtilsProvider utils={MomentUtils} locale={language} moment={moment}>
            <BrowserRouter>
              <SnackbarProvider>
                <App>
                  <Routes />
                </App>
              </SnackbarProvider>
            </BrowserRouter>
          </MuiPickersUtilsProvider>
        </IntlProvider>
      </MuiThemeProvider>
    </Provider>
  ), document.getElementById('root'));
};

store.subscribe(render);
// store.subscribe(throttle(() => saveLocalStorage('state', store.getState()), 3000));

render();

registerServiceWorker();

window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  event.preventDefault();
  const instalation = { deferredPrompt: event, status: constants.INSTALATION_UNINSTALLED };
  store.dispatch({ type: constants.SET_INSTALATION, instalation });
});

window.addEventListener('appinstalled', (event) => {
  const instalation = { status: constants.INSTALATION_INSTALLED };
  store.dispatch({ type: constants.SET_INSTALATION, instalation });
});
