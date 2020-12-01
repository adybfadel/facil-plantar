import React from 'react';
import { intlShape } from 'react-intl';
import { makeStyles } from '@material-ui/core';

import { 
  Dialog, 
  AppBar, 
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  Divider,
  ListItemText,
  Slide,
  Switch,
} from '@material-ui/core';

import { 
  ArrowLeft,
  MapMarker,
  BellRingOutline,
} from 'mdi-material-ui';

import styles from './Settings.css';
import constants from '../../constants';

const useStyles = makeStyles(styles);

const propTypes = {
  intl: intlShape,
};

const Transition = props => {
  return <Slide direction="up" {...props} />;
}

const Settings = ({

  intl,
  open,
  settings,
  onClose,
  onClickLocale,
  onClickInstall,
  onClickLocation,
  onChangeNotification,

}) => {
  const classes = useStyles();
  
  const alarmGranted = Notification.permission === 'granted';
  const alarmDefault = Notification.permission === 'default';
  let geolocation = settings.geolocation;
  if (settings.geolocation.coords) {
    geolocation = `${settings.geolocation.coords.latitude}, ${settings.geolocation.coords.longitude}`;
  } else if (settings.geolocation.error) {
    geolocation = settings.geolocation.error;
  } 
  
  return (
    <React.Fragment>
      <Dialog fullScreen open={open} onClose={onClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton color="inherit" onClick={onClose} className={classes.headerIcon}>
              <ArrowLeft />
            </IconButton>
            <Typography variant="h6" color="inherit">
              {intl.formatMessage({id:'Settings.title'})}
            </Typography>
          </Toolbar>
        </AppBar>
        <List className={classes.list}>
          <ListItem button onClick={onClickLocale}>
            <ListItemText 
              primary={intl.formatMessage({id:'Settings.language'})} 
              secondary={intl.formatMessage({id:`Settings.language.${intl.locale}`})} />
          </ListItem>
          <Divider />
          <ListItem button onClick={onClickInstall} disabled={settings.instalation.status === constants.INSTALATION_UNABLED}>
            <ListItemText 
              primary={intl.formatMessage({id:'Settings.instalation'})} 
              secondary={intl.formatMessage({id:`Settings.instalation.${settings.instalation.status}`})} />
          </ListItem>
          <Divider />
          <ListItem>
            <BellRingOutline className={classes.itemIcon} />
            <ListItemText 
              primary={intl.formatMessage({id:'Settings.alarms'})} 
              secondary={intl.formatMessage({id: alarmGranted ? 'Settings.granted' : 'Settings.denied'})} />
            <Switch 
              defaultChecked={alarmGranted} 
              value="checked" 
              disabled={!alarmDefault}
              onChange={onChangeNotification}
            />
          </ListItem>
          { 
            !alarmDefault &&
            <ListItem>
              <Typography variant="body2" align="justify">
                {intl.formatMessage({id:'Settings.alarmsMsg'})} 
              </Typography>
            </ListItem>
          }
          <Divider />
          <ListItem button onClick={onClickLocation}>
            <MapMarker className={classes.itemIcon} />
            <ListItemText 
              primary={intl.formatMessage({id:'Settings.geolocation'})} 
              secondary={geolocation} />
          </ListItem>
          <ListItem>
            <Typography variant="body2" align="justify">
              {intl.formatMessage({id:'Settings.geolocationMsg'})} 
            </Typography>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText 
              primary={intl.formatMessage({id:'Settings.application'})} 
              secondary={`v ${settings.version}`} />
          </ListItem>
        </List>
      </Dialog>
    </React.Fragment>
  );
}

Settings.propTypes = propTypes;

export default Settings;