import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Typography,
  IconButton,
  AppBar,
  Toolbar,
} from '@material-ui/core';

import {
  Heart,
  // ShareVariant,
  HeartOutline,
  CheckCircle,
  CheckCircleOutline,
  ArrowLeft,
} from 'mdi-material-ui';

import styles from './Article.css';
import Aspects from '../../components/aspects/Aspects';
import TasksPanel from '../../components/tasks-panel/TasksPanel';

const useStyles = makeStyles(styles);

const Article = ({ 
  
  user,
  article,
  tasks=[],
  onHaveChange,
  onFavoriteChange,
  onClose,

}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit" onClick={onClose} className={classes.backButton}>
            <ArrowLeft />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.headerTitle}>
            {article.name}
          </Typography>
          <IconButton className={classes.appBarIcon} onClick={onFavoriteChange}>
            { user && article.favorite ? <Heart/> : <HeartOutline/> }
          </IconButton>
          <IconButton className={classes.appBarIcon} onClick={onHaveChange}>
            { user && article.have ? <CheckCircle/> : <CheckCircleOutline/> }
          </IconButton>
          {/* <IconButton className={classes.appBarIcon}>
            <ShareVariant />
          </IconButton> */}
        </Toolbar>
      </AppBar>
      <div className={classes.header}>
        <img src={article.imageUrl} alt={article.name} className={classes.image} />
      </div>
      <div className={classes.content}>
        <Typography variant="h5" component="h2">
          {article.name}
        </Typography>
        <Typography gutterBottom variant="body1">
          {article.subtitle}
        </Typography>
        <Aspects article={article} />
        <Typography className={classes.text}>
          {article.description}
        </Typography>
        <TasksPanel tasks={tasks} />
      </div>
    </div>
  );
};

export default Article;