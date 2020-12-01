import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import classNames from 'classnames';

import { 
  Paper, 
  Collapse,
  List,
  ListItem,
  ListSubheader,
  ListItemText,
} from '@material-ui/core';

import styles from './NotificationBox.css';
import constants from '../../constants';

const useStyles = makeStyles(styles);

const NotificationBox = ({ 
  
  intl, 
  open, 
  notifications={},
  onClick,
  onClose,

}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={0}>
      <Collapse in={open} className={classes.content} timeout="auto" unmountOnExit>
        <List className={classes.list} subheader={<li />}>
          {Object.keys(notifications).map(key => (
            <li key={key} className={classes.listSection}>
              <ul className={classes.ul}>
                <ListSubheader className={classes.subheader}>
                  {new Date(parseInt(key)).toDateString()}
                </ListSubheader>
                {notifications[key].map(action => {
                  const nextTime = moment(action.nextTime);
                  const classAlert = nextTime.isSameOrBefore(moment()) ? classes.alert : '';
                  let strTime = nextTime.format('LT');
                  if (action.intervalUnit !== constants.HOUR) {
                    strTime = `${intl.formatMessage({id:`Receipt.period.${action.dayPeriod}`})} (~${strTime})`;
                  }
                  return (
                    <ListItem 
                      button
                      key={`${action.myOwnId}-${action.name}-${action.nextTime}`} 
                      className={classes.listItem}
                      onClick={() => onClick(`/my-own/${action.myOwnId}/${action.name}/${action.nextTime}`)}
                    >
                      <span className={classNames(classes.icon, classAlert)}>
                        {constants.icons[action.name]}
                      </span>
                      <ListItemText 
                        primary={`${intl.formatMessage({id:`Task.${action.name}`})} ${action.myOwnIdent}`} 
                        secondary={strTime}
                      />
                    </ListItem>
                  )
                })}
              </ul>
            </li>
          ))}
        </List>
      </Collapse>
    </Paper>
  )
}

export default NotificationBox;