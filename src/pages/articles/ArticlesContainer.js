import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { withSnackbar } from "notistack";
import { connect } from "react-redux";

import Articles from './Articles';
import ArticleService from '../../services/ArticleService';
import constants from '../../constants';

const propTypes = {
  intl: intlShape.isRequired,
  state: PropTypes.object.isRequired,
  enqueueSnackbar: PropTypes.func.isRequired,
};

const connection = connect(state => ({ state }), dispatch => ({ dispatch }));

class ArticlesContainer extends React.Component {
  
  constructor(props) {
    super(props);
    this.articleService = new ArticleService();
    this.state = { list: [] };
  }
  
  async componentDidMount() { 
    const { intl, dispatch, enqueueSnackbar, type } = this.props;
    dispatch({ type: constants.SET_LOADER, loading: true });
    try {
      const list = await this.articleService.list(type);
      this.setState({ list }); 
    } catch (error) {
      console.error(error);
      enqueueSnackbar(intl.formatMessage({id:'Msg.loadFailed'}), { variant: 'error'});
    } 
    dispatch({ type: constants.SET_LOADER, loading: false });
  }

  handleHaveClick = async (article) => {
    const { state, dispatch, history } = this.props;
    if (!state.user) {
      dispatch({ type: constants.LOGIN_REQUIRED });
      return;
    }
    history.push(`/my-articles/article/${article.id}`);
  }

  handleFavoriteClick = async (article) => {
    const { intl, state, dispatch, enqueueSnackbar } = this.props;
    if (!state.user) {
      dispatch({ type: constants.LOGIN_REQUIRED });
      return;
    }
    dispatch({ type: constants.SET_LOADER, loading: true });
    try {
      const updatedArticle = await this.articleService.toggleFavorite(article);
      const newList = this.state.list.map(article => {
        if (article.id === updatedArticle.id) {
          article.favorite = updatedArticle.favorite;
        }
        return article;
      });
      this.setState({ list: newList });
    } catch (error) {
      console.error(error);
      enqueueSnackbar(intl.formatMessage({id:'Msg.saveFailed'}), { variant: 'error' });
    }
    dispatch({ type: constants.SET_LOADER, loading: false });
  }

  handleDetailsClick = article => {
    const { history } = this.props;
    history.push('/articles/' + article.id);
  }

  filteredArticles = () => {
    const { state } = this.props;
    if (!state.filter || state.filter === constants.FILTER_ALL) {
      return this.state.list;
    } else if (state.filter === constants.STATUS_FAVORITE) {
      return this.state.list.filter(article => {
        return !state.user || article.favorite;
      });
    }
    return this.state.list.filter(article => {
      return !state.user || article.have;
    });
  }
  
  render() {
    const { intl, state } = this.props;
    return (
      <Articles
        intl={intl}
        user={state.user}
        list={this.filteredArticles()}
        onHaveChange={this.handleHaveClick}
        onFavoriteChange={this.handleFavoriteClick}
        onShowDetails={this.handleDetailsClick}
      />
    );
  }
}

ArticlesContainer.propTypes = propTypes;

export default injectIntl(connection(withRouter(withSnackbar(ArticlesContainer))));