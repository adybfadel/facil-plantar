import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { FormattedMessage } from "react-intl";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from '@material-ui/core';

import { 
  Magnify,
  FilterOutline,
  Filter,
  Calendar,
  CalendarOutline,
} from 'mdi-material-ui';

import styles from './MainHeader.css';
import MainMenuContainer from '../main-menu/MainMenuContainer';
import constants from '../../constants';

const useStyles = makeStyles(styles);

const propTypes = {
  onCalendarClick: PropTypes.func.isRequired,
  toggleSearchBox: PropTypes.func.isRequired,
  toggleFilterBox: PropTypes.func.isRequired,
};

const MainHeader = ({
  
  user,
  filter,
  alerts,
  filterOpen,
  searchOpen,
  notificationOpen,
  toggleSearchBox,
  toggleFilterBox,
  onCalendarClick,

}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.flex}>
            <FormattedMessage id={'App.name'} description="Título" defaultMessage="Fácil Plantar" />
          </Typography>
          <IconButton color={searchOpen ? 'default' : 'inherit'} onClick={toggleSearchBox}>
            <Magnify />
          </IconButton>
          <IconButton color={filterOpen ? 'default' : 'inherit'} onClick={toggleFilterBox} disabled={!user}>
            { filter === constants.FILTER_ALL || !user ? <FilterOutline/> : <Filter/> }
          </IconButton>
          <IconButton color={notificationOpen ? 'default' : 'inherit'} onClick={onCalendarClick} disabled={!user}>
            <Badge badgeContent={alerts} invisible={!alerts || !user} classes={{ badge: classes.badge }}>
              { !alerts || !user ? <CalendarOutline /> : <Calendar /> }
            </Badge>
          </IconButton>
          <MainMenuContainer />  
        </Toolbar>
      </AppBar>
    </div>
  );
}

MainHeader.propTypes = propTypes;

export default MainHeader;
