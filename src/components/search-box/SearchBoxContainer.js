import React from 'react';
import PropTypes from 'prop-types';
import { intlShape, injectIntl } from 'react-intl';
import { connect } from "react-redux";
import AwesomeDebouncePromise from "awesome-debounce-promise";
import { withRouter } from "react-router-dom";

import SearchBox from './SearchBox';
import SearchResult from './SearchResult';
import SearchService from '../../services/SearchService';
import AppService from '../../services/AppService';
import constants from '../../constants';

const propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  intl: intlShape.isRequired
};

const connection = connect(state => ({ state }), dispatch => ({ dispatch }));
const searchService = new SearchService();
const search = async (value) => { 
  let result = {};
  try {
    if (value.length >= 3) {
      const searchResult = await searchService.listSearchItems(value);
      // Because of a AppSync GraphQL limitation it has to query the search items
      // instead of search. So, it has to group the result of each search:
      // item.search -> search.items[]
      searchResult.forEach(item => {
        if (item.search) {
          let key = item.search.id;
          if (!result[key]) result[key] = {};
          result[key] = { ...result[key], ...item.search };
          let itemCopy = { ...item };
          delete itemCopy.search;
          if (!result[key].items) result[key].items = [];
          result[key].items.push(itemCopy);
        }
      });
    }
  } catch (error) {
    console.error(error);
  }
  return result;
}
const searchDebounced = AwesomeDebouncePromise(search, 500);

class SearchBoxContainer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      result: [],
    };
  }

  handleChange = async event => {
    const searchKey = AppService.removeDiatrics(event.target.value);
    this.setState({ 
      value: event.target.value,
      searchKey,
    });
    const result = await searchDebounced(searchKey);
    this.setState({ result });
  }

  handleClick = (url) => {
    this.props.history.push(url);
    this.handleClose();
  }

  handleClose = () => {
    this.props.dispatch({ type: constants.TOGGLE_SEARCH_BOX });
  }

  render() {
    const { intl, state } = this.props;
    const hasResults = Object.keys(this.state.result).length > 0;
    
    return (
      <React.Fragment>
        <SearchBox
          intl={intl}
          open={state.searchOpen}
          value={this.state.value}
          onChange={this.handleChange}
          />
        <SearchResult
          intl={intl}
          open={state.searchOpen && hasResults}
          searchKey={this.state.searchKey}
          result={this.state.result}
          onClick={this.handleClick}
        />
      </React.Fragment>
    );
  }
}

SearchBoxContainer.propTypes = propTypes;

export default injectIntl(connection(withRouter(SearchBoxContainer)));