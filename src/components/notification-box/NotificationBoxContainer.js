import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { injectIntl, intlShape } from 'react-intl';

import constants from '../../constants';
import NotificationBox from './NotificationBox';

const propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  intl: intlShape.isRequired
};

const connection = connect(state => ({ state }), dispatch => ({ dispatch }));

class NotificationBoxContainer extends React.Component {

  handleClick = (url) => {
    this.props.history.push(url);
    this.handleClose();
  }
  
  handleClose = () => {
    this.props.dispatch({ type: constants.TOGGLE_NOTIFICATION_BOX });
  }

  render() {
    const { intl, state } = this.props;
    return (
      <NotificationBox
        intl={intl} 
        open={state.notificationOpen}
        notifications={state.notifications.items}
        onClick={this.handleClick}
        onClose={this.handleClose}
      />
    )
  }
}

NotificationBoxContainer.propTypes = propTypes;

export default injectIntl(connection(withRouter(NotificationBoxContainer)));