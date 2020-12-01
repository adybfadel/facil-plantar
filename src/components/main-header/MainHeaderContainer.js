import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";

import MainHeader from './MainHeader';
import constants from '../../constants';

const propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const connection = connect(state => ({ state }), dispatch => ({ dispatch }));

class MainHeaderContainer extends React.Component {
  
  handleCalendarClick = () => {
    const { dispatch } = this.props;
    dispatch({ type: constants.TOGGLE_NOTIFICATION_BOX });
  } 

  toggleSearchBox = () => {
    const { dispatch } = this.props;
    dispatch({ type: constants.TOGGLE_SEARCH_BOX });
  } 

  toggleFilterBox = () => {
    const { dispatch } = this.props;
    dispatch({ type: constants.TOGGLE_FILTER_BOX });
  } 

  render() {
    const { state } = this.props;
    return (
      <MainHeader
        user={state.user}
        filter={state.filter}
        alerts={state.notifications.alerts}
        filterOpen={state.filterOpen}
        searchOpen={state.searchOpen}
        notificationOpen={state.notificationOpen}
        onCalendarClick={this.handleCalendarClick}
        toggleSearchBox={this.toggleSearchBox}
        toggleFilterBox={this.toggleFilterBox}
      />
    );
  }
}

MainHeaderContainer.propTypes = propTypes;

export default connection(withRouter(MainHeaderContainer));