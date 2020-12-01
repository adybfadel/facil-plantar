import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { intlShape } from 'react-intl';

import { 
  Paper, 
  Collapse,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
} from '@material-ui/core';
  
import {
  Magnify, 
} from 'mdi-material-ui';

import styles from './SearchBox.css';

const useStyles = makeStyles(styles);

const propTypes = {
  intl: intlShape.isRequired,
};

const SearchBox = ({

  intl,
  open,
  value,
  onChange,

}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={0}>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <FormControl className={classes.filterForm}>
          <InputLabel htmlFor="search">
            {intl.formatMessage({id:'SearchBox.search'})}
          </InputLabel>
          <Input
            type="text"
            autoFocus={true}
            value={value}
            onChange={onChange}
            endAdornment={
              <InputAdornment position="end">
                <Magnify />
              </InputAdornment>
            }
          />
        </FormControl>
      </Collapse>
    </Paper>
  )
}

SearchBox.propTypes = propTypes;

export default SearchBox;