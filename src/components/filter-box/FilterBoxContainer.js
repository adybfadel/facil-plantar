import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { injectIntl, intlShape } from 'react-intl';

import constants from '../../constants';
import FilterBox from './FilterBox';

const propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  intl: intlShape.isRequired
};

const connection = connect(state => ({ state }), dispatch => ({ dispatch }));

class FilterBoxContainer extends React.Component {

  handleFilterChange = (filter) => {
    this.props.dispatch({ type: constants.SET_FILTER, filter });
  }
  
  handleClose = () => {
    this.props.dispatch({ type: constants.TOGGLE_FILTER_BOX });
  }

  render() {
    const { intl, state } = this.props;
    return (
      <FilterBox
        intl={intl} 
        open={state.filterOpen}
        filter={state.filter}
        onFilterChange={this.handleFilterChange}
        onClose={this.handleClose}
      />
    )
  }
}

FilterBoxContainer.propTypes = propTypes;

export default injectIntl(connection(FilterBoxContainer));