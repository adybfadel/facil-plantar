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

const ConfirmDialog = ({ 

  intl, 
  open, 
  title, 
  message, 
  onConfirm, 
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
        <DialogTitle id="confirm-dialog-title">
          {title || intl.formatMessage({id:'ConfirmDialog.defTitle'})}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="confirm-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>
            {intl.formatMessage({id:'Dialog.close'})}
          </Button>
          <Button onClick={onConfirm} color="primary">
            {intl.formatMessage({id:'Dialog.confirm'})}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

ConfirmDialog.propTypes = propTypes;

export default ConfirmDialog;
