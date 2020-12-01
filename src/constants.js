import React from 'react';

import { 
  Seed, 
  Sprout, 
  Flower, 
  Tree,
  FlowerPoppy,
  WaterOff,
  Bug,
  Blur,
  BarleyOff,
  Water,
  ContentCut,
  BasketFill,
  Carrot,
  Notebook,
  ContentSave,
} from 'mdi-material-ui';

const constants = {

  APP_VERSION: '0.1.13',

  INSTALATION_UNABLED: 'unabled',
  INSTALATION_INSTALLED: 'installed',
  INSTALATION_UNINSTALLED: 'uninstalled',
  INSTALATION_CANCELED: 'canceled',

  // # REDUX ACTIONS
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  NOTIFY: 'NOTIFY',
  LOGIN_REQUIRED: 'LOGIN_REQUIRED',
  TOGGLE_USER_MENU: 'TOGGLE_USER_MENU',
  TOGGLE_SEARCH_BOX: 'TOGGLE_SEARCHBOX',
  TOGGLE_FILTER_BOX: 'TOGGLE_FILTERBOX',
  TOGGLE_NOTIFICATION_BOX: 'TOGGLE_NOTIFICATIONBOX',
  SET_FILTER: 'SET_FILTER',
  SET_LOADER: 'SET_LOADER',
  SET_NOTIFICATIONS: 'SET_NOTIFICATIONS',
  CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
  SET_GEOLOCATION: 'SET_GEOLOCATION',
  SET_INSTALATION: 'SET_INSTALATION',

  // # FILTER
  FILTER_ALL: 'all',
  // ## MyArticle attr
  STATUS_HAVE: 'have', 
  STATUS_FAVORITE: 'favorite',

  // # ARTICLE TYPES
  TYPE_PLANT: 'PLANT',
  TYPE_RECEIPT: 'RECEIPT',
  TYPE_PHYTO: 'PHYTO',
  TYPE_MANUAL: 'MANUAL',
  TYPE_MY_ARTICLE: 'MY_ARTICLE',
  TYPE_MY_OWN: 'MY_OWN',

  // # Auth
  ANONYNOUS_USERNAME: 'anonymous',
  ANONYNOUS_PASSWORD: 'an0nym0us@FP',

  // # ACTIONS
  // ## Plant
  ACTION_SAVE: 'update',
  ACTION_WATER: 'watering',
  ACTION_FERTILIZE: 'fertilizing',
  ACTION_PRUNE: 'pruning',
  ACTION_HARVEST: 'harvest',
  ACTION_NOTE: 'note',
  ACTION_UPDATE: 'update',

  // # Plant growth
  GROWTH: 'growth',
  GROWTH_SEED: 'seed',
  GROWTH_SEEDLING: 'seedling',
  GROWTH_FLOWERING: 'flowering',
  GROWTH_ADULT: 'adult',

  // # Plant health
  HEALTH: 'health',
  HEALTH_HEALTHY: 'healthy',
  HEALTH_DRY_OUT: 'dryOut',
  HEALTH_LEAF_DROP: 'leafDrop',
  HEALTH_FUNGUS: 'fungus',
  HEALTH_INSECT: 'insect',

  // # Interval: Date/time
  HOUR: "HOUR",
  DAY: "DAY",
  MONTH: "MONTH",

  // # Day periods hours
  HOUR_DAWN: 3,
  HOUR_MORNING: 7,
  HOUR_NOON: 12,
  HOUR_AFTERNOON: 15,
  HOUR_DUSK: 19,
  HOUR_NIGHT: 0,

  // # Alerts
  ALERT_DELAY: 1000 * 5,
  ALERT_INTERVAL: 1000 * 60 * 30
  
};

constants.icons = {
  [constants.ACTION_SAVE]: <ContentSave />,
  [constants.ACTION_WATER]: <Water />,
  [constants.ACTION_FERTILIZE]: <BasketFill />,
  [constants.ACTION_PRUNE]: <ContentCut />,
  [constants.ACTION_HARVEST]: <Carrot />,
  [constants.ACTION_NOTE]: <Notebook />,
  [constants.GROWTH_SEED]: <Seed />,
  [constants.GROWTH_SEEDLING]: <Sprout />,
  [constants.GROWTH_FLOWERING]: <Flower />,
  [constants.GROWTH_ADULT]: <Tree />,
  [constants.HEALTH_HEALTHY]: <FlowerPoppy />,
  [constants.HEALTH_DRY_OUT]: <WaterOff />,
  [constants.HEALTH_LEAF_DROP]: <BarleyOff />,
  [constants.HEALTH_FUNGUS]: <Blur />,
  [constants.HEALTH_INSECT]: <Bug />,
};

export default constants;