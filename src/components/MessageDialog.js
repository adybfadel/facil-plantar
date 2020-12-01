import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { intlShape } from 'react-intl';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

const styles = {
  dialog: {
    margin: 10,
    maxHeight: 'calc(100% - 40px);',
    minHeight: 230,
    minWidth: 300,
  },
};

const useStyles = makeStyles(styles);

const propTypes = {
  intl: intlShape.isRequired,
  message: PropTypes.string.isRequired,
};

const MessageDialog = ({ 

  intl, 
  open, 
  title, 
  message, 
  onClose, 

}) => {
  const classes = useStyles();

  return (
    <div>        
      <Dialog
        open={open || false}
        onClose={onClose}
        classes={{ paperScrollPaper: classes.dialog }}
      >
        <DialogTitle id="alert-dialog-title">
          {title || intl.formatMessage({id:'MessageDialog.defTitle'})}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            {intl.formatMessage({id:'Dialog.close'})}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

MessageDialog.propTypes = propTypes;

export default MessageDialog;
