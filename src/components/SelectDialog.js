import React from 'react';
import PropTypes from 'prop-types';
import { intlShape } from 'react-intl';

import {
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
  RadioGroup,
  Radio,
  FormControlLabel,
  makeStyles,
} from '@material-ui/core';

const propTypes = {
  intl: intlShape.isRequired,
  title: PropTypes.string,
  options: PropTypes.array.isRequired,
  value: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

const defaultProps = {
  options: [],
};

const styles = {
  dialog: {
    margin: 10,
    maxHeight: 'calc(100% - 40px);',
    minHeight: 230,
    minWidth: 300,
  },
};
const useStyles = makeStyles(styles);

const SelectDialog = props => {
  const [state, setState] = React.useState({ 
    value: props.value,
    modified: false,
  });
  const radioGroupRef = React.useRef(null);
  const classes = useStyles();

  function handleEntering() {
    setState({ 
      value: props.value,
      modified: false,
    });
  }

  function handleCancel() {
    setState({ 
      value: props.value,
      modified: false,
    });
    props.onClose();
  }

  function handleOk() {
    props.onClose(state.value);
  }

  function handleChange(event, newValue) {
    setState({ 
      value: newValue,
      modified: newValue !== props.value,
    });
  }

  const { intl, title, options, value, ...otherProps } = props;

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      fullWidth
      maxWidth="xs"
      onEntering={handleEntering}
      aria-labelledby="confirmation-dialog-title"
      classes={{ paperScrollPaper: classes.dialog }}
      {...otherProps}
    >
      <DialogTitle id="confirmation-dialog-title">
        {title || intl.formatMessage({id:'SelectDialog.defTitle'})}
      </DialogTitle>
      <DialogContent>
        <RadioGroup
          ref={radioGroupRef}
          aria-label="Ringtone"
          name="ringtone"
          value={state.value || ''}
          onChange={handleChange}
        >
          {options.map(option => (
            <FormControlLabel
              value={option.key}
              key={option.key}
              control={
                option.icon ?
                  <Radio color="primary" icon={option.icon} checkedIcon={option.icon} />
                  :
                  <Radio color="primary" />
              }
              label={option.label}
            />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          {intl.formatMessage({id:'Dialog.close'})}
        </Button>
        <Button onClick={handleOk} color="primary" disabled={!state.modified}>
          {intl.formatMessage({id:'Dialog.ok'})}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

SelectDialog.propTypes = propTypes;
SelectDialog.defaultProps = defaultProps;

export default SelectDialog;