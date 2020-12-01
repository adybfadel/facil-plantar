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

const ResetPassword = ({ 

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
          {intl.formatMessage({id:'Auth.resetPwdTitle'})}
        </DialogTitle>
        <DialogContent className={classes.content}>
          <React.Fragment>
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
          </React.Fragment>
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
  );
};

export default ResetPassword;