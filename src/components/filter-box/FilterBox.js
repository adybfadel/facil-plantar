import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { 
  Paper, 
  Collapse,
  Button,
} from '@material-ui/core';

import { 
  HeartOutline, 
  CheckCircleOutline, 
  CheckCircle,
  Heart,
  Close
} from 'mdi-material-ui';

import constants from '../../constants';
import styles from './FilterBox.css';

const useStyles = makeStyles(styles);

const FilterBox = ({ 
  
  intl, 
  open, 
  filter,
  onFilterChange,
  onClose,

}) => {

  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={0}>
      <Collapse in={open} className={classes.content} timeout="auto" unmountOnExit>
        <Button size="small" color="primary" onClick={() => onFilterChange(constants.STATUS_FAVORITE)}>
          { filter === constants.STATUS_FAVORITE ? <Heart/> : <HeartOutline/> }
        </Button>
        <Button size="small" color="primary" onClick={() => onFilterChange(constants.STATUS_HAVE)}>
          { filter === constants.STATUS_HAVE ? <CheckCircle/> : <CheckCircleOutline/> }
        </Button>
        <Button size="small" color="primary" onClick={() => onFilterChange(constants.FILTER_ALL)}>
          {intl.formatMessage({id:'FilterBox.cleanFilter'})}
        </Button>
        <Button size="small" color="primary" onClick={onClose}>
          <Close />
        </Button>
      </Collapse>
    </Paper>
  )
}

export default FilterBox;