import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

import { 
  Paper, 
  Collapse,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';

import styles from './MyNotes.css';
import constants from '../../constants';

const useStyles = makeStyles(styles);

const MyNotes = ({ 
  
  intl, 
  open, 
  notes=[],
  onClick,

}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.toolbox}>
      <Paper className={classes.root} elevation={0}>
        <Collapse in={open} className={classes.content} timeout="auto" unmountOnExit>
          <List className={classes.list}>
            {notes.map(note => {
              const dateTime = moment(note.dateTime);
              return (
                <ListItem 
                  button
                  key={note.id} 
                  className={classes.listItem}
                  onClick={() => onClick(note)}
                >
                  <span className={classes.icon}>
                    {constants.icons[note.action]}
                  </span>
                  <ListItemText 
                    primary={intl.formatMessage({id:`Task.${note.action}`})} 
                    secondary={dateTime.format('LLL')}
                  />
                </ListItem>
              )
            })}
          </List>
        </Collapse>
      </Paper>
    </Paper>
  )
}

export default MyNotes;