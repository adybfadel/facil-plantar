import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
} from '@material-ui/core';

import styles from './Auth.css';

const useStyles = makeStyles(styles);

const VerifyAccount = ({ 

  intl, 
  open,
  username,
  onChange, 
  onConfirm, 
  onClose, 
  onResend, 
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
          {intl.formatMessage({id:'Auth.verifyTitle'})}
        </DialogTitle>
        <DialogContent className={classes.content}>
          <TextField
            id="username"
            required
            error={message.fieldErrors && message.fieldErrors.includes('username')}
            label={intl.formatMessage({id:'Auth.username'})}
            type="text"
            onChange={onChange}
            value={username}
            className={classes.textField}
            fullWidth
            />
          <TextField
            id="code"
            label={intl.formatMessage({id:'Auth.code'})}
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
        <DialogActions className={classes.buttonBox}>
          <Button type="button" onClick={onResend} className={classes.textButton}>
            {intl.formatMessage({id:'Auth.sendCodeBtn'})}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default VerifyAccount;