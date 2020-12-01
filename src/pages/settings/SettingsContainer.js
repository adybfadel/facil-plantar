import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import { connect } from 'react-redux';

import Settings from './Settings';
import SelectDialog from '../../components/SelectDialog';
import constants from '../../constants';

const propTypes = {
  intl: intlShape.isRequired,
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const connection = connect(state => ({ state }), dispatch => ({ dispatch }));

class SettingsContainer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      langDlgOpen: false,
      langOptions: [],
    };
  }
  
  handleClose = () => {
    const { history } = this.props;
    this.setState({ open: false }, () => history.push('/'));
  }
  
  handleChangeNotification = () => {
    
  }
  
  handleClickLocale = () => {
    const { intl } = this.props;
    this.setState({ 
      langDlgOpen: true,
      langOptions: [
        { key: 'en-US', label: intl.formatMessage({id:`Settings.language.en-US`}) },
        { key: 'es-ES', label: intl.formatMessage({id:`Settings.language.es-ES`}) },
        { key: 'pt-BR', label: intl.formatMessage({id:`Settings.language.pt-BR`}) },
      ],
    });
  }

  handleClickLocation = () => {

  }

  handleClickInstall = () => {
    const { state, dispatch } = this.props;
    const deferredPrompt = state.instalation.deferredPrompt;
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      const status = choiceResult.outcome === 'accepted' ? constants.INSTALATION_UNINSTALLED : constants.INSTALATION_CANCELED;
      const instalation = { deferredPrompt: null, status };
      dispatch({ type: constants.SET_INSTALATION, instalation });
    });
  }

  handleLangSelection = value => {
    this.setState({ langDlgOpen: false }); 
    if (value) this.props.dispatch({ type: constants.CHANGE_LANGUAGE, language: value });
  }

  render() {
    const { intl, state } = this.props;
    return (
      <React.Fragment>
        <Settings
          intl={intl}
          open={this.state.open}
          settings={{
            geolocation: state.geolocation || '...',
            version: state.version || '...',
            instalation: state.instalation,
          }}
          onClose={this.handleClose}
          onClickLocale={this.handleClickLocale}
          onClickInstall={this.handleClickInstall}
          onClickLocation={this.handleClickLocation}
          onChangeNotification={this.handleChangeNotification}
        />
        <SelectDialog
          intl={intl}
          open={this.state.langDlgOpen}
          title={intl.formatMessage({id:'Settings.language'})}
          options={this.state.langOptions}
          value={state.language}
          onClose={this.handleLangSelection}
        />
      </React.Fragment>
    );
  }
}

SettingsContainer.propTypes = propTypes;

export default injectIntl(connection(SettingsContainer));