import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { injectIntl, intlShape } from 'react-intl';

import { 
  Grid, 
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';

import {
  Heart,
  // ShareVariant,
  HeartOutline,
  CheckCircle,
  CheckCircleOutline,
  EmoticonSadOutline,
} from 'mdi-material-ui';

import styles from './Articles.css';
import Aspects from '../../components/aspects/Aspects';

const useStyles = makeStyles(styles);

const propTypes = {
  intl: intlShape.isRequired,
};

const Articles = ({
  
  intl, 
  user,
  list,
  onHaveChange,
  onFavoriteChange,
  onShowDetails,

}) => {

  const classes = useStyles();

  return (
    <Grid container justify="center">
      {
        list.length === 0 ?
          <div className={classes.messageEmpty}>
            <Typography color="textSecondary" align="center">
              <EmoticonSadOutline/>
            </Typography>
            <Typography color="textSecondary" align="center">
              {intl.formatMessage({id:'Articles.emptyList1'})}
            </Typography>
            <Typography color="textSecondary" align="center">
              {intl.formatMessage({id:'Articles.emptyList2'})}
            </Typography>
          </div>
        :
          (list.map(article => {
            return (
              <Card key={article.id} className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={article.imageUrl}
                  title={article.subtitle}
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" component="h2">
                    {article.name}
                  </Typography>
                  <Typography gutterBottom variant="body1">
                    {article.subtitle}
                  </Typography>
                  <Aspects article={article} />
                  <Typography align="justify">
                    {
                      article.description.length > 120 ?
                        article.description.substr(0, 120) + '...'
                      :
                        article.description
                    }
                  </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Button 
                    size="small" 
                    color="primary" 
                    onClick={() => onFavoriteChange(article)}
                  >
                    { user && article.favorite ? <Heart/> : <HeartOutline/> }
                  </Button>
                  <Button 
                    size="small" 
                    color="primary" 
                    onClick={() => onHaveChange(article)}
                  >
                    { user && article.have ? <CheckCircle/> : <CheckCircleOutline/> }
                  </Button>
                  {/* <Button size="small" color="primary">
                    <ShareVariant/>
                  </Button> */}
                  <Button size="small" color="primary" onClick={() => onShowDetails(article)}>
                    {intl.formatMessage({id:'Articles.details'})}
                  </Button>
                </CardActions>
              </Card>
            );
          })
        ) 
      }          
    </Grid>
  );
}

Articles.propTypes = propTypes;

export default injectIntl(Articles);