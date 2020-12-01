import { createStore } from 'redux';

import constants from "./constants";
// import { loadLocalStorage } from "./localStorage";

const defaultState = {
  user: null, 
  userMenuAnchor: null,
  loading: false, 
  loginRequired: false,
  searchOpen: false,
  filterOpen: false,
  filter: constants.FILTER_ALL,
  notify: false,
  notifications: { alerts: 0, items: {} },
  instalation: { status: constants.INSTALATION_UNABLED },
};

export const redux = (state, action) => {
  switch (action.type) {
    case constants.LOGIN:
      return { ...state, user: action.user };
    case constants.LOGOUT:
      return { ...state, user: null };
    case constants.SET_INSTALATION:
      return { ...state, instalation: action.instalation };
    case constants.TOGGLE_USER_MENU:
      return { ...state, userMenuAnchor: action.userMenuAnchor };
    case constants.SET_LOADER:
      return { ...state, loading: action.loading };
    case constants.TOGGLE_SEARCH_BOX:
      return { ...state, searchOpen: !state.searchOpen, filterOpen: false, notificationOpen: false };
    case constants.TOGGLE_FILTER_BOX:
      return { ...state, filterOpen: !state.filterOpen, searchOpen: false, notificationOpen: false };
    case constants.TOGGLE_NOTIFICATION_BOX:
      return { ...state, notificationOpen: !state.notificationOpen, filterOpen: false, searchOpen: false };
    case constants.SET_FILTER:
      return { ...state, filter: action.filter };
    case constants.NOTIFY:
      return { ...state, notify: action.notify };
    case constants.CHANGE_LANGUAGE:
      return { ...state, language: action.language };
    case constants.SET_GEOLOCATION:
      return { ...state, geolocation: action.geolocation };
    case constants.SET_NOTIFICATIONS:
      return { ...state, notifications: action.notifications };
    case constants.LOGIN_REQUIRED:
      return { ...state, loginRequired: !state.loginRequired };
    default:
      return state;
  }
};

// const initialState = loadLocalStorage('state');
const reduxStore = (initialState) => createStore(redux, { ...defaultState, ...initialState });
export default reduxStore;