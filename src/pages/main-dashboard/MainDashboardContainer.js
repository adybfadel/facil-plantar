import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export default class MainDashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div>Main Dashboard</div>
      </React.Fragment>
    );
  }
}

 MainDashboardContainer.propTypes = propTypes;
 MainDashboardContainer.defaultProps = defaultProps;