import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Button,
  DialogTitle,
  Dialog,
  DialogContent,
  TextField,
  DialogActions,
  Typography,
} from '@material-ui/core';

import styles from './Auth.css';

const useStyles = makeStyles(styles);

const SignIn = ({ 
  
  intl,
  open,
  username,
  onChange,
  onConfirm,
  onClose,
  onReset,
  onSignUp,
  message 

}) => {
  const classes = useStyles();

  return (
    <Dialog 
      fullScreen
      open={open} 
      className={classes.dialog}
    >
      <form noValidate autoComplete="off" onSubmit={onConfirm}>
        <DialogTitle>
          {intl.formatMessage({id:'Auth.signInTitle'})}
        </DialogTitle>
        <DialogContent className={classes.content}>
            <TextField
              id="username"
              required
              error={message.fieldErrors && message.fieldErrors.includes('username')}
              label={intl.formatMessage({id:'Auth.username'})}
              type="email"
              onChange={onChange}
              value={username}
              className={classes.textField}
              fullWidth
            />
            <TextField
              id="password"
              required
              error={message.fieldErrors && message.fieldErrors.includes('password')}
              label={intl.formatMessage({id:'Auth.password'})}
              type="password"
              onChange={onChange}
              className={classes.textField}
              fullWidth
            />
          <Typography className={classes.textField} align="center" color={message.error ? 'error' : 'primary'}>
            {message.text}
          </Typography>
        </DialogContent>
        <DialogActions className={classes.buttonBox}>
          <Button type="button" onClick={onClose}>
            {intl.formatMessage({id:'Auth.closeBtn'})}
          </Button>
          <Button type="submit" variant="contained" onClick={onConfirm} color="primary">
            {intl.formatMessage({id:'Auth.sendBtn'})}
          </Button>
        </DialogActions>
        <DialogActions className={classes.buttonBox}>
          <Button type="button" onClick={onReset} className={classes.textButton}>
            {intl.formatMessage({id:'Auth.resetBtn'})}
          </Button>
          <Button type="button" onClick={onSignUp} className={classes.textButton}>
            {intl.formatMessage({id:'Auth.signUpBtn'})}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default SignIn;