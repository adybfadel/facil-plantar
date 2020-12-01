import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { injectIntl, intlShape } from 'react-intl';
import { connect } from "react-redux";
import { withSnackbar } from 'notistack';

import MyArticle from './MyArticle';
import MyArticleService from '../../services/MyArticleService';
import SearchService from '../../services/SearchService';
import constants from '../../constants';
import SelectDialog from '../../components/SelectDialog';
import ActionDialog from './ActionDialog';
import MyNotes from './MyNotes';

const propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};

const connection = connect(state => ({ state }), dispatch => ({ dispatch }));
const selectMyOwn = 'myOwn';

class MyArtileContainer extends React.Component {
  
  constructor(props) {
    super(props);
    this.myArticleService = new MyArticleService();
    this.searchService = new SearchService();
    const { intl } = props;
    this.options = {
      growth: [
        { key: constants.GROWTH_SEED, icon: constants.icons[constants.GROWTH_SEED], label: intl.formatMessage({id:`Growth.seed`}) },
        { key: constants.GROWTH_SEEDLING, icon: constants.icons[constants.GROWTH_SEEDLING], label: intl.formatMessage({id:`Growth.seedling`}) },
        { key: constants.GROWTH_FLOWERING, icon: constants.icons[constants.GROWTH_FLOWERING], label: intl.formatMessage({id:`Growth.flowering`}) },
        { key: constants.GROWTH_ADULT, icon: constants.icons[constants.GROWTH_ADULT], label: intl.formatMessage({id:`Growth.adult`}) },
      ],
      health: [
        { key: constants.HEALTH_HEALTHY, icon: constants.icons[constants.HEALTH_HEALTHY], label: intl.formatMessage({id:`Health.healthy`}) },
        { key: constants.HEALTH_DRY_OUT, icon: constants.icons[constants.HEALTH_DRY_OUT], label: intl.formatMessage({id:`Health.dryOut`}) },
        { key: constants.HEALTH_LEAF_DROP, icon: constants.icons[constants.HEALTH_LEAF_DROP], label: intl.formatMessage({id:`Health.leafDrop`}) },
        { key: constants.HEALTH_FUNGUS, icon: constants.icons[constants.HEALTH_FUNGUS], label: intl.formatMessage({id:`Health.fungus`}) },
        { key: constants.HEALTH_INSECT, icon: constants.icons[constants.HEALTH_INSECT], label: intl.formatMessage({id:`Health.insect`}) },
      ],
    };
    this.state = {
      myArticle: {},
      myOwn: {},
      action: {},
      modified: false,
      actionType: false,
      selectDialog: false,
      actionDlgOpen: false,
      showNotes: false,
    };
  }

  async componentDidMount() { 
    const { intl, dispatch, enqueueSnackbar, match } = this.props;
    dispatch({ type: constants.SET_LOADER, loading: true });
    try {
      let myArticle = {};
      let myOwn = {};
      if (match.params.myOwnId) {
        myArticle = await this.myArticleService.getByMyOwnId(match.params.myOwnId);
        myOwn = myArticle.myOwns[0];
      } else if (match.params.myArticleId) {
        myArticle = await this.myArticleService.get(match.params.myArticleId);
      } else if (match.params.articleId) {
        myArticle = await this.myArticleService.getByArticle({ id: match.params.articleId });
      }
      let myOwns = await this.myArticleService.getMyOwns(myArticle);
      myArticle.myOwns = myOwns;
      if (myOwns.length <= 1 || match.params.myOwnId) {
        this.setState({ 
          myArticle, 
          myOwn: myOwn || myOwns[0], 
          modified: !myOwn && !myOwns[0],
        }); 
      } else {
        this.setState({ myArticle });
        this.handleChangeMyOwn(); 
      }
      if (match.params.action) this.handleStartAction({ name: match.params.action });
    } catch (error) {
      console.error(error);
      enqueueSnackbar(intl.formatMessage({id:'Msg.loadFailed'}), { variant: 'error'});
    } 
    dispatch({ type: constants.SET_LOADER, loading: false });
  }

  validate = fields => {
    const { intl } = this.props;
    let fieldErrors = []; 
    fields.forEach(field => {
      if (!this.state.myOwn[field]) fieldErrors.push(field);
    });
    if (fieldErrors.length > 0) {
      this.setState({ 
        ...this.state, 
        message: { 
          error: true,
          fieldErrors,
          text: intl.formatMessage({id:'Msg.requiredField'}),
        }
      });
      return false;
    }
    return true;
  }

  handleClose = () => {
    const { history } = this.props;
    history.push('/');
  }

  handleChange = (event) => {
    const { intl } = this.props;
    if (event.target.id === constants.GROWTH) {
      event.target.blur();     
      this.setState({ 
        selectDialog: constants.GROWTH,
        selectTitle: intl.formatMessage({id:'MyArticle.PLANT.growth'}),
        selectOptions: this.options.growth,
      });
    } else if (event.target.id === constants.HEALTH) {
      event.target.blur();     
      this.setState({ 
        selectDialog: constants.HEALTH,
        selectTitle: intl.formatMessage({id:'MyArticle.PLANT.health'}),
        selectOptions: this.options.health,
      });
    } else {
      this.setState({ 
        modified: true,
        myOwn: {
          ...this.state.myOwn,
          [event.target.id]: event.target.value,
        }
      });
    }
  }

  handleChangeLook = (event, value) => {
    this.setState({ 
      modified: value !== this.state.myOwn.look,
      myOwn: {
        ...this.state.myOwn,
        look: value | 0,
      }
    });
  }
  
  handleChangeImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      this.setState({ 
        modified: true,
        myArticle: {
          ...this.state.myArticle,
          image: event.target.files[0],
        }
      });
    }
  }

  handleSave = async () => {
    const { intl, dispatch, enqueueSnackbar } = this.props;
    if (!this.validate(['ident'])) return;
    dispatch({ type: constants.SET_LOADER, loading: true });
    try {
      const savedMyArticle = await this.myArticleService.save(this.state.myArticle);
      const savedMyOwn = await this.myArticleService.saveMyOwn(this.state.myOwn, savedMyArticle);
      if (!this.state.myOwn.id) {
        // Only for new myOwns
        this.searchService.saveSearchOfMyOwn(savedMyOwn);
      }
      const savedMyNote = await this.myArticleService.saveMyNote({
        look: savedMyOwn.look,
        growth: savedMyOwn.growth,
        health: savedMyOwn.health,
        action: constants.ACTION_UPDATE,
        dateTime: new Date(),
        // image: savedMyOwn.image,
      }, savedMyOwn);
      if (!savedMyOwn.notes) savedMyOwn.notes = [];
      savedMyOwn.notes.push(savedMyNote);
      if (this.state.myArticle.myOwns.length === 0) {
        savedMyArticle.myOwns = [savedMyOwn];
      } else {
        savedMyArticle.myOwns = this.state.myArticle.myOwns.map(myOwn => {
          if (myOwn && myOwn.id !== savedMyOwn.id) return myOwn;
          return savedMyOwn;
        });
      }
      this.setState({ 
        modified: false,
        myArticle: savedMyArticle,
        myOwn: savedMyOwn,
        message: {},
      });
    } catch (error) {
      console.error(error);
      enqueueSnackbar(intl.formatMessage({id:'Msg.saveFailed'}), { variant: 'error' });
    }
    dispatch({ type: constants.SET_LOADER, loading: false });
  }

  handleStartAction = (action) => {
    this.setState({ 
      actionDlgOpen: true,
      action: {
        ...action,
        icon: constants.icons[action.name],
      }
    });
  }
  
  handleCloseAction = async (action) => {
    const { intl, dispatch, enqueueSnackbar } = this.props;
    if (!action) {
      this.setState({ actionDlgOpen: false });
      return;
    }
    dispatch({ type: constants.SET_LOADER, loading: true });
    try {
      let myOwn = { ...this.state.myOwn };
      const savedMyNote = await this.myArticleService.saveMyNote({
        id: action.id,
        action: action.name,
        note: action.note ? action.note : null,
        dateTime: action.dateTime,
        // image: savedMyOwn.image,
      }, this.state.myOwn);
      if (savedMyNote.note) {
        this.searchService.saveSearchOfMyNote(savedMyNote, myOwn);
      }
      if (!myOwn.notes) myOwn.notes = [];
      myOwn.notes.push(savedMyNote);
      this.setState({ actionDlgOpen: false, myOwn });
      this.updateNotifications(savedMyNote, myOwn);
    } catch (error) {
      console.error(error);
      enqueueSnackbar(intl.formatMessage({id:'Msg.saveFailed'}), { variant: 'error' });
    }
    
    dispatch({ type: constants.SET_LOADER, loading: false });
  }
  
  // TODO Revisit code (move to a service ?)
  updateNotifications = (note, myOwn) => {
    const { dispatch, state } = this.props;
    let notifications = { alerts: state.notifications.alerts, items: {} };
    Object.keys(state.notifications.items).forEach(day => {
      const items = state.notifications.items[day].filter(item => {
        const keep = item.myOwnId !== myOwn.id || item.name !== note.action || item.nextTime > new Date(note.dateTime).getTime();
        if (!keep && item.nextTime <= new Date().getTime()) notifications.alerts--;
        return keep;
      });
      if (items.length > 0) notifications.items[day] = items;
    });
    dispatch({ type: constants.SET_NOTIFICATIONS, notifications });
  }
  
  handleCloseSelect = (value) => {
    const attr = this.state.selectDialog;
    if (attr === selectMyOwn) {
      if (!value) {
        this.handleClose();
      } else {
        this.setState({ 
          selectDialog: false,
          selectedValue: value,
          myOwn: this.state.myArticle.myOwns.find(myOwn => myOwn.id === value),
        });
      }
    } else if (value) {
      this.setState({ 
        modified: value !== this.state.myOwn[attr],
        selectDialog: false,
        selectedValue: value,
        myOwn: { 
          ...this.state.myOwn, 
          [attr]: value,
        },
      });
    } else {
      this.setState({ selectDialog: false });
    }
  }

  handleNew = () => {
    this.setState({ myOwn: {} });
  }

  handleChangeMyOwn = () => {
    const { intl } = this.props;
    const { myArticle } = this.state;
    this.setState({ 
      selectDialog: selectMyOwn,
      selectTitle: intl.formatMessage({id:`MyArticle.selectMyOwn`}),
      selectOptions: myArticle.myOwns.map(myOwn => { return { key: myOwn.id, label: myOwn.ident }})
    });
  };

  handleClickNotes = () => {
    this.setState({ showNotes: !this.state.showNotes });
  }
  
  handleNoteClick = (note) => {
    this.setState({ showNotes: !this.state.showNotes });
    const action = {
      id: note.id,
      name: note.action,
      note: note.note,
      dateTime: note.dateTime,
    }
    this.handleStartAction(action);
  }

  render() {
    const { intl } = this.props;
    return (
      <React.Fragment>
        <MyArticle
          intl={intl}
          myArticle={this.state.myArticle}
          myOwn={this.state.myOwn}
          icons={constants.icons}
          onClose={this.handleClose}
          onChange={this.handleChange}
          onChangeLook={this.handleChangeLook}
          onChangeImage={this.handleChangeImage}
          onChangeMyOwn={this.handleChangeMyOwn}
          onClickNotes={this.handleClickNotes}
          onClickNew={this.handleNew}
          onSave={this.handleSave}
          onAction={this.handleStartAction}
          message={this.state.message}
          modified={this.state.modified}
          notesOpen={this.state.showNotes}
        />
        <SelectDialog
          intl={intl}
          open={!!this.state.selectDialog}
          title={this.state.selectTitle}
          options={this.state.selectOptions}
          value={this.state.selectedValue}
          onClose={this.handleCloseSelect}
        />
        <ActionDialog
          intl={intl}
          open={this.state.actionDlgOpen}
          action={this.state.action}
          onClose={this.handleCloseAction}
        />
        <MyNotes
          intl={intl}
          open={!!this.state.showNotes}
          notes={this.state.myOwn.notes}
          onClick={this.handleNoteClick}
        />
      </React.Fragment>
    );
  }
}

MyArtileContainer.propTypes = propTypes;

export default injectIntl(connection(withRouter(withSnackbar(MyArtileContainer))));
