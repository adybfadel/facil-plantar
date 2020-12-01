import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';

import {
  Leaf,
  Water,
  Flower,
  WhiteBalanceSunny,
  Clock,
} from 'mdi-material-ui';

import styles from './Aspects.css';
import constants from '../../constants';

const useStyles = makeStyles(styles);

const propTypes = {
  article: PropTypes.object.isRequired,
  difficulty: PropTypes.number.isRequired,
  luminosity: PropTypes.number,
  humidity: PropTypes.number,
  growing: PropTypes.number,
};

const defaultProps = {
  article: {},
  difficulty: 0,
  luminosity: 0,
  humidity: 0,
  growing: 0,
};

const Aspects = ({

  article,
  difficulty,
  luminosity,
  humidity,
  growing,

}) => {

  const classes = useStyles();
  difficulty = article.difficultyLevel;
  luminosity = article.luminosityLevel;
  humidity = article.humidityLevel;
  growing = article.growingLevel;

  if (article.type === constants.TYPE_PLANT) {
    return (
      <div className={classes.aspects}>
        <div>
        <Leaf className={classNames(classes.aspectIcon, (difficulty >= 1 ? classes.difficulty : classes.disabled))}/>
        <Leaf className={classNames(classes.aspectIcon, (difficulty >= 2 ? classes.difficulty : classes.disabled))}/>
        <Leaf className={classNames(classes.aspectIcon, (difficulty >= 3 ? classes.difficulty : classes.disabled))}/>
        </div>
        <div>
        <WhiteBalanceSunny className={classNames(classes.aspectIcon, (luminosity >= 1 ? classes.luminosity : classes.disabled))}/>
        <WhiteBalanceSunny className={classNames(classes.aspectIcon, (luminosity >= 2 ? classes.luminosity : classes.disabled))}/>
        <WhiteBalanceSunny className={classNames(classes.aspectIcon, (luminosity >= 3 ? classes.luminosity : classes.disabled))}/>
        </div>
        <div>
        <Water className={classNames(classes.aspectIcon, (humidity >= 1 ? classes.humidity : classes.disabled))}/>
        <Water className={classNames(classes.aspectIcon, (humidity >= 2 ? classes.humidity : classes.disabled))}/>
        <Water className={classNames(classes.aspectIcon, (humidity >= 3 ? classes.humidity : classes.disabled))}/>
        </div>
        <div>
        <Flower className={classNames(classes.aspectIcon, (growing >= 1 ? classes.growing : classes.disabled))}/>
        <Flower className={classNames(classes.aspectIcon, (growing >= 2 ? classes.growing : classes.disabled))}/>
        <Flower className={classNames(classes.aspectIcon, (growing >= 3 ? classes.growing : classes.disabled))}/>
        </div>
      </div>
    );
  }
  return (
    <div className={classes.aspects}>
      <div>
        <Clock className={classNames(classes.aspectIcon, (difficulty >= 1 ? classes.difficulty : classes.disabled))}/>
        <Clock className={classNames(classes.aspectIcon, (difficulty >= 2 ? classes.difficulty : classes.disabled))}/>
        <Clock className={classNames(classes.aspectIcon, (difficulty >= 3 ? classes.difficulty : classes.disabled))}/>
      </div>
    </div>
  );
}

Aspects.propTypes = propTypes;
Aspects.defaultProps = defaultProps;

export default Aspects;