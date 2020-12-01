import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { intlShape } from 'react-intl';
import { KeyboardDateTimePicker } from "@material-ui/pickers";

import {
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
  makeStyles,
  TextField,
} from '@material-ui/core';

import constants from '../../constants';

const propTypes = {
  intl: intlShape.isRequired,
  action: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

const styles = theme => ({
  dialog: {
    margin: 10,
    maxHeight: 'calc(100% - 40px);',
    minHeight: 230,
    minWidth: 300,
  },
  title: {
    '& h6': {
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
});
const useStyles = makeStyles(styles);

const ActionDialog = props => {
  const { intl, action, ...otherProps } = props;
  const [state, setState] = useState(action);
  const title = state.name ? intl.formatMessage({id:`Task.${state.name}`}) : '';
  const classes = useStyles();
  
  useEffect(() => {
    setState(action);
  }, [action]);

  const handleCancel = () => {
    props.onClose();
  }

  const handleOk = () => {
    props.onClose(state);
  }

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      fullWidth
      maxWidth="xs"
      aria-labelledby="confirmation-dialog-title"
      classes={{ paperScrollPaper: classes.dialog }}
      {...otherProps}
    >
      <DialogTitle id="confirmation-dialog-title" classes={{ root: classes.title }}>
        {title || ''}
        {state.icon || ''}
      </DialogTitle>
      <DialogContent>
        <KeyboardDateTimePicker
          value={state.dateTime}
          disabled={!!state.id}
          onChange={(dateTime, str) => setState({ ...state, dateTime })}
          label={intl.formatMessage({id:`ActionDialog.dateTime`})}
          onError={console.log}
          // minDate={new Date("2018-01-01T00:00")}
          // format="yyyy/MM/dd hh:mm a"
        />
        <TextField
          id="note"
          fullWidth
          multiline
          disabled={!!state.id}
          required={state.name === constants.ACTION_NOTE}
          label={intl.formatMessage({id:`ActionDialog.note`})}
          className={classes.textField}
          margin="normal"
          value={state.note}
          onChange={(event) => setState({ ...state, note: event.target.value })}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          {intl.formatMessage({id:'Dialog.close'})}
        </Button>
        <Button onClick={handleOk} color="primary" disabled={!!state.id}>
          {intl.formatMessage({id:'Dialog.ok'})}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ActionDialog.propTypes = propTypes;

export default ActionDialog;