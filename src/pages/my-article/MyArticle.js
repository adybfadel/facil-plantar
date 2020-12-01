import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';
import { intlShape } from 'react-intl';

import { 
  AppBar, 
  IconButton,
  Typography,
  Toolbar,
  TextField,
  InputAdornment,
} from '@material-ui/core';

import { 
  ArrowLeft, 
  Check,
  Water,
  ContentCut,
  BasketFill,
  Carrot,
  Notebook,
  NotebookMultiple,
  Camera,
  EmoticonSadOutline,
  EmoticonHappyOutline,
  Flower,
  Stethoscope,
  Plus,
  ChevronDown,
  ImageMultiple,
} from 'mdi-material-ui';

import styles from './MyArticle.css';
import constants from '../../constants';
import TasksPanel from '../../components/tasks-panel/TasksPanel';

const useStyles = makeStyles(styles);

const propsTypes = {
  intl: intlShape.isRequired,
  myArticle: PropTypes.object.isRequired,
  myOwn: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

const defaultProps = {
  myArticle: {},
  myOwn: {},
  message: {},
};

const MyArticle = ({ 
  
  intl,
  myArticle,
  myOwn,
  icons,
  onClose,
  onChange,
  onChangeLook,
  onChangeImage,
  onChangeMyOwn,
  onClickNotes,
  onClickNew,
  onSave,
  onAction,
  modified,
  message,
  notesOpen,

}) => {
  const classes = useStyles();
  const article = myArticle.article || {};
  const type = myArticle.type || constants.TYPE_PLANT;
  const hasNotes = myOwn.notes && myOwn.notes.length > 0;
  const growthIcon = myOwn.growth && icons ? icons[myOwn.growth] : <Flower />;
  const healthIcon = myOwn.health && icons ? icons[myOwn.health] : <Stethoscope />;
  // TODO Refactor using useCallback in all code
  const handleSave = useCallback(myOwn => { return onSave(myOwn) }, [onSave]);
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar classes={{ gutters: classes.toolbar }}>
          <IconButton color={'inherit'} classes={{ label: classes.actionLabel }} onClick={onClose}>
            <ArrowLeft />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.headerTitle}>
            {intl.formatMessage({id:`MyArticle.${type}`})}
          </Typography>
          <IconButton color={notesOpen ? 'default' : 'inherit'} onClick={onClickNotes} disabled={!hasNotes}>
            <NotebookMultiple />
          </IconButton>
          <IconButton color={'inherit'} onClick={onClickNew} disabled={!myOwn.id}>
            <Plus />
          </IconButton>
          <IconButton color={'inherit'} onClick={handleSave} disabled={!modified}>
            <Check />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.form}>
        <div className={classes.imageBox}>
          <img src={myArticle.imageUrl} alt={article.name} className={classes.image}/>
          <IconButton className={classes.newImageButton}>
            <label htmlFor="img-picker">
              <Camera />
            </label>
            <input 
              id="img-picker" 
              type="file" 
              className={classes.inputImage} 
              accept="image/*" 
              capture="camera" 
              onChange={onChangeImage}
            />
          </IconButton>
          <IconButton className={classes.imagesButton} disabled={true}>
            <ImageMultiple />          
          </IconButton>
        </div>
        <Toolbar classes={{ gutters: classes.actions }}>
          <IconButton 
            color={'inherit'}
            disabled={!myOwn.id} 
            classes={{ label: classes.actionLabel }} 
            onClick={() => onAction({ name: constants.ACTION_WATER })}
          >
            <Water />
            {intl.formatMessage({id:'Task.watering'})}
          </IconButton>
          <IconButton 
            color={'inherit'}
            disabled={!myOwn.id} 
            classes={{ label: classes.actionLabel }} 
            onClick={() => onAction({ name: constants.ACTION_FERTILIZE })}
          >
            <BasketFill />
            {intl.formatMessage({id:'Task.fertilizing'})}
          </IconButton>
          <IconButton 
            color={'inherit'}
            disabled={!myOwn.id} 
            classes={{ label: classes.actionLabel }} 
            onClick={() => onAction({ name: constants.ACTION_PRUNE })}
          >
            <ContentCut />
            {intl.formatMessage({id:'Task.pruning'})}
          </IconButton>
          <IconButton 
            color={'inherit'}
            disabled={!myOwn.id} 
            classes={{ label: classes.actionLabel }} 
            onClick={() => onAction({ name: constants.ACTION_HARVEST })}
          >
            <Carrot />
            {intl.formatMessage({id:'Task.harvest'})}
          </IconButton>
          <IconButton 
            color={'inherit'}
            disabled={!myOwn.id} 
            classes={{ label: classes.actionLabel }} 
            onClick={() => onAction({ name: constants.ACTION_NOTE })}
          >
            <Notebook />
            {intl.formatMessage({id:'Task.note'})}
          </IconButton>
        </Toolbar>
        <TextField
          id="ident"
          fullWidth
          required
          error={message.fieldErrors && message.fieldErrors.includes('ident')}
          disabled={!!myOwn.id}
          label={intl.formatMessage({id:`MyArticle.${type}.ident`})}
          placeholder={intl.formatMessage({id:`MyArticle.${type}.ident.placeholder`})}
          className={classes.textField}
          margin="normal"
          value={myOwn.ident || ''}
          autoFocus={!myOwn.id}
          onChange={onChange}
          InputProps= {!myOwn.id ? {} : {
            endAdornment: (
              <InputAdornment 
                position="end" 
                className={classes.fieldIcon}
                onClick={onChangeMyOwn}
              >
                <ChevronDown/>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="name"
          fullWidth
          disabled
          label={intl.formatMessage({id:`MyArticle.${type}.name`})}
          className={classes.textField}
          margin="normal"
          value={article.name || ''}
          onChange={onChange}
        />
        <TextField
          id="subtitle"
          fullWidth
          disabled
          label={intl.formatMessage({id:`MyArticle.${type}.subtitle`})}
          className={classes.textField}
          margin="normal"
          value={article.subtitle || ''}
          onChange={onChange}
        />
        <div className={classes.sliderField}>
          <Typography className={classes.sliderLabel}>
            {intl.formatMessage({id:`MyArticle.${type}.look`})}
          </Typography>
          <div className={classes.sliderControl}>
            <EmoticonSadOutline className={classes.sliderIcon} />
            <Slider
              className={classes.slider}
              value={myOwn.look || 50}
              aria-labelledby="label"
              onChange={onChangeLook}
            />
            <EmoticonHappyOutline className={classes.sliderIcon} />
          </div>
        </div>
        <TextField
          id={constants.GROWTH}
          label={intl.formatMessage({id:`MyArticle.${type}.growth`})}
          className={classes.textField}
          margin="normal"
          value={myOwn.growth ? intl.formatMessage({id:`Growth.${myOwn.growth}`}) : ''}
          onClick={onChange}
          onChange={onChange}
          InputProps= {{
            startAdornment: (
              <InputAdornment position="start" className={classes.fieldIcon}>
                {growthIcon }
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id={constants.HEALTH}
          label={intl.formatMessage({id:`MyArticle.${type}.health`})}
          className={classes.textField}
          margin="normal"
          value={myOwn.health ? intl.formatMessage({id:`Health.${myOwn.health}`}) : ''}
          onClick={onChange}
          onChange={onChange}
          InputProps= {{
            startAdornment: (
              <InputAdornment position="start" className={classes.fieldIcon}>
                {healthIcon}
              </InputAdornment>
            ),
          }}
        />
      </div>
      <TasksPanel tasks={[]} />
    </div>
  );
};

MyArticle.protoTypes = propsTypes;
MyArticle.defaultProps = defaultProps;

export default MyArticle;