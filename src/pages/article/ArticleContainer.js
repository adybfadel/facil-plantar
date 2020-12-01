import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { injectIntl, intlShape } from 'react-intl';
import { connect } from "react-redux";
import { withSnackbar } from 'notistack';

import Article from './Article';
import constants from "../../constants";
import ArticleService from '../../services/ArticleService';
import ImageSliderContainer from '../../components/image-slider/ImageSliderContainer';
import AppService from '../../services/AppService';

const propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};

const connection = connect(state => ({ state }), dispatch => ({ dispatch }));

class ArtileContainer extends React.Component {
  
  constructor(props) {
    super(props);
    this.articleService = new ArticleService();
    this.state = {
      imageSliderOpen: false,
      taskImages: [],
      article: {},
    };
  }

  async componentDidMount() { 
    const { intl, dispatch, enqueueSnackbar, match } = this.props;
    dispatch({ type: constants.SET_LOADER, loading: true });
    try {
      let article = await this.articleService.get(match.params.id);
      let tasks = await this.articleService.getTasks(article);
      this.setState({ article, tasks }); 
    } catch (error) {
      console.error(error);
      enqueueSnackbar(intl.formatMessage({id:'Msg.loadFailed'}), { variant: 'error'});
    } 
    dispatch({ type: constants.SET_LOADER, loading: false });
  }

  handleHaveClick = async () => {
    const { state, dispatch, history } = this.props;
    if (!state.user) {
      dispatch({ type: constants.LOGIN_REQUIRED });
      return;
    }
    const { article } = this.state;
    history.push(`/my-articles/article/${article.id}`);
  }
  
  handleFavoriteClick = async () => {
    const { intl, state, dispatch, enqueueSnackbar } = this.props;
    if (!state.user) {
      dispatch({ type: constants.LOGIN_REQUIRED });
      return;
    }
    dispatch({ type: constants.SET_LOADER, loading: true });
    try {
      const { article } = this.state;
      const updatedArticle = await this.articleService.toggleFavorite(article);
      this.setState({ updatedArticle });
    } catch (error) {
      console.error(error);
      enqueueSnackbar(intl.formatMessage({id:'Msg.saveFailed'}), { variant: 'error' });
    }
    dispatch({ type: constants.SET_LOADER, loading: false });
  }

  handleClose = () => {
    const { history } = this.props;
    history.push('/');
  }

  handleImageClick = async taskIdx => {
    const { intl } = this.props;
    const task = this.state.article.tasks.items[taskIdx].task;
    task.images.items = await Promise.all(task.images.items.map(async image => {
      image.url = await AppService.imagesUrl([image.file]);
      return image;
    }));
    this.setState({
      imageSliderTitle: intl.formatMessage({id:`Task.${task.name}`}),
      taskImages: task.images.items,
      imageSliderOpen: true,
    });
  }

  handleCloseImageSlider = () => {
    this.setState({ imageSliderOpen: false });
  }

  render() {
    const { state } = this.props;
    return (
      <React.Fragment>
        <Article
          intl={this.props.intl}
          user={state.user}
          article={this.state.article}
          tasks={this.state.tasks}
          onHaveChange={this.handleHaveClick}
          onFavoriteChange={this.handleFavoriteClick}
          onClose={this.handleClose}
          onImageClick={this.handleImageClick}
          />
        <ImageSliderContainer 
          open={this.state.imageSliderOpen}
          title={this.state.imageSliderTitle}
          images={this.state.taskImages}
          onClose={this.handleCloseImageSlider}
        />
      </React.Fragment>
    );
  }
}

ArtileContainer.propTypes = propTypes;

export default injectIntl(connection(withRouter(withSnackbar(ArtileContainer))));
