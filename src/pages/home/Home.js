import React from 'react';
import { makeStyles } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { injectIntl, intlShape } from 'react-intl';

import { 
  BookOpenPageVariant,
  Nutrition,
  Leaf,
} from 'mdi-material-ui';

import { 
  BottomNavigation, 
  BottomNavigationAction,
  Paper,
} from '@material-ui/core';

import styles from './Home.css';
import MainHeaderContainer from '../../components/main-header/MainHeaderContainer';
import SearchBoxContainer from '../../components/search-box/SearchBoxContainer';
import ArticlesContainer from '../articles/ArticlesContainer';
import FilterBoxContainer from '../../components/filter-box/FilterBoxContainer';
import constants from '../../constants';
import NotificationBoxContainer from '../../components/notification-box/NotificationBoxContainer';

const useStyles = makeStyles(styles);

const propTypes = {
  intl: intlShape.isRequired,
};

const Home = ({ intl }) => {
  
  const [ value, setValue ] = React.useState(0);
  const classes = useStyles();

  return (
    <React.Fragment>
      <MainHeaderContainer />
      <Paper className={classes.toolbox}>
        <SearchBoxContainer />
        <FilterBoxContainer/>
        <NotificationBoxContainer />
      </Paper>
      <div className={classes.content}>
        <SwipeableViews 
          index={value}
          onChangeIndex={(index, indexLatest) => setValue(index)}
        >
          <ArticlesContainer type={constants.TYPE_PLANT} />
          <ArticlesContainer type={constants.TYPE_RECEIPT} />
          <ArticlesContainer type={constants.TYPE_PHYTO} />
        
        </SwipeableViews>
        <BottomNavigation 
          value={value} 
          className={classes.bottomNav} 
          onChange={(event, newValue) => setValue(newValue)}
        >          
          <BottomNavigationAction 
            label={intl.formatMessage({id:'Home.nav.plants'})} 
            value={0} 
            icon={<BookOpenPageVariant />} 
          />
          <BottomNavigationAction 
            label={intl.formatMessage({id:'Home.nav.receipts'})} 
            value={1} 
            icon={<Nutrition />} 
          />
          <BottomNavigationAction 
            label={intl.formatMessage({id:'Home.nav.phytos'})} 
            value={2} 
            icon={<Leaf />} 
          />
        </BottomNavigation>
      </div>
    </React.Fragment>
  );

}

Home.propTypes = propTypes;

export default injectIntl(Home);