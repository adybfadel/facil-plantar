import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { intlShape } from 'react-intl';

import { 
  Paper, 
  Collapse,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';

import styles from './SearchResult.css';
import constants from '../../constants';

const useStyles = makeStyles(styles);

const propTypes = {
  intl: intlShape.isRequired,
};

const SearchResult = ({

  intl,
  open,
  searchKey,
  result={},
  onClick,

}) => {
  const classes = useStyles();

  let currKey = '';
  const ItemSection = ({ item, resKey }) => {
    const newKey = resKey + item.section + item.subsection;
    if (newKey !== currKey) {
      currKey = newKey;
      return (
        <span className={classes.section}>
          [<span>{intl.formatMessage({id:`Search.${item.section}`})}</span> 
          <span className={classes.subsection}>
            {item.subsection && ` :: ${intl.formatMessage({id:`Search.${item.subsection}`})}`}
          </span>] 
        </span>
      );
    }
    return ' ';
  }

  const MarkedText = ({ text, searchKey }) => {
    const maxLength = 20;
    const split = text.split(searchKey);
    const markedText = split.map((part, idx) => {
      let textPart = part;
      let more = part.length > maxLength ? ' ... ' : '';
      if (idx === 0) textPart = `${more}${part.substr(part.length - maxLength)}`;
      else textPart = `${part.substr(0, maxLength)}${more}`;
      return (
        <span key={idx}>
          {textPart}
          {idx < split.length - 1 && (<span className={classes.searchKey}>{searchKey}</span>)}
        </span>
      )
    });
    return markedText;
  }

  return (
    <Paper className={classes.root} elevation={0}>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List className={classes.list}>
          {
            Object.keys(result).map(key => {
              let path = 'articles';
              if (result[key].type === constants.TYPE_MANUAL) path = 'manual';
              else if (result[key].type === constants.TYPE_MY_OWN) path = 'my-own';
              else if (result[key].type === constants.TYPE_MY_ARTICLE) path = 'my-article';
              return (
                <ListItem 
                  button
                  key={result[key].id} 
                  classes={{ gutters: classes.listItem }}  
                  onClick={() => onClick(`/${path}/${result[key].key}`)} 
                >
                  <Typography variant="h6" className={classes.resultTitle}>
                    {result[key].title}
                  </Typography>
                  <Typography>
                    {
                      result[key].items.map(item => {
                        return (
                          <span key={item.id}>
                            <ItemSection item={item} resKey={key} />
                            <MarkedText text={item.content} searchKey={searchKey} />
                          </span>
                        )
                      })
                    }
                  </Typography>
                </ListItem>
              )
            })
          }
        </List>
      </Collapse>
    </Paper>
  )
}

SearchResult.propTypes = propTypes;

export default SearchResult;