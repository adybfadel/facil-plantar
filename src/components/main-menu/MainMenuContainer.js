import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { intlShape, injectIntl } from 'react-intl';
import { connect } from "react-redux";

import AuthService from '../../services/AuthService';
import MainMenu from './MainMenu';

const propTypes = {
  intl: intlShape.isRequired,
  state: PropTypes.object.isRequired,
};

const connection = connect(state => ({ state }));

class MainMenuContainer extends React.Component {

  constructor(props) {
    super(props);
    this.authService = AuthService.getInstance();
    this.state = {};
  }

  handleItemClick = item => {
    const { history } = this.props;
    switch (item) {
      case 'profile':
        history.push('/profile');
        break;
      case 'settings':
        history.push('/settings');
        break;
      case 'login':
        history.push('/login');
        break;
      case 'logout':
        this.authService.signOut();
        break;
      default:
        break;
    }
  }

  render() {
    const { intl, state } = this.props;
    return (
      <MainMenu
        intl={intl}
        user={state.user}
        onItemClick={this.handleItemClick}
      />
    );
  }
}

MainMenuContainer.propTypes = propTypes;

export default injectIntl(connection(withRouter(MainMenuContainer)));