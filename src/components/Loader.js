import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

const styles = () => ({
  modal: {
    backgroundColor: '#0000001f',
    bottom: 0,
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: 1400,
  },
  progress: {
    left: '45%',
    position: 'fixed', 
    top: '50%',
    zIndex: 1500,
  },
});
const useStyles = makeStyles(styles);

const Loader = ({ loading }) => {
  const classes = useStyles();
  if (loading) {
    return (
      <div className={classes.modal}>
        <CircularProgress className={classes.progress} />
      </div>
    );
  }
  return null;
};

export default Loader;