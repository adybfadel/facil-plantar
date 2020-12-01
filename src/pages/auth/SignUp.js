import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Typography,
} from '@material-ui/core';

import styles from './Auth.css';

const useStyles = makeStyles(styles);

const SignUp = ({ 
  
  intl, 
  open, 
  username,
  onChange, 
  onConfirm, 
  onClose, 
  message 

}) => {
  const classes = useStyles();

  return (
    <Dialog 
      fullScreen
      open={open} 
      onClose={onClose} 
      className={classes.dialog}
    >        
      <form noValidate autoComplete="off" onSubmit={onConfirm}>
        <DialogTitle>
          {intl.formatMessage({id:'Auth.signUpTitle'})}
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
          <TextField
            id="phoneNumber"
            label={intl.formatMessage({id:'Auth.phoneNumber'})}
            type="text"
            onChange={onChange}
            className={classes.textField}
            fullWidth
          />
          <Typography className={classes.message} align="center" color={message.error ? 'error' : 'primary'}>
            {message.text}
          </Typography>
        </DialogContent>
        <DialogActions className={classes.buttonBox}>
          <Button type="button" onClick={onClose}>
            {intl.formatMessage({id:'Auth.backBtn'})}
          </Button>
          <Button type="submit" variant="contained" onClick={onConfirm} color="primary">
            {intl.formatMessage({id:'Auth.sendBtn'})}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
};

export default SignUp;