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

const NewPassword = ({ 

  intl,
  open,
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
          {intl.formatMessage({id:'Auth.newPwdTitle'})}
        </DialogTitle>
        <DialogContent className={classes.content}>
          <React.Fragment>
            <TextField
              id="code"
              required
              error={message.fieldErrors && message.fieldErrors.includes('code')}
              label={intl.formatMessage({id:'Auth.code'})}
              type="text"
              onChange={onChange}
              className={classes.textField}
              fullWidth
              />
            <TextField
              id="newPassword"
              required
              error={message.fieldErrors && message.fieldErrors.includes('newPassword')}
              label={intl.formatMessage({id:'Auth.newPassword'})}
              type="password"
              onChange={onChange}
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
        <DialogActions className={classes.buttonBox}>
          <Button type="button" onClick={onResend} className={classes.textButton}>
            {intl.formatMessage({id:'Auth.sendCodeBtn'})}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default NewPassword;