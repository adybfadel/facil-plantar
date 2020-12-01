import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import {
  DialogTitle,
  Dialog,
  IconButton,
} from '@material-ui/core';

import { 
  Close 
} from 'mdi-material-ui';

import styles from './ImageSlider.css';

const useStyles = makeStyles(styles);

const ImageSlider = ({ 
  
  open,
  title,
  images,
  isVideo,
  fullscreen,
  onSlide,
  onScreenChange,
  onClose,

}) => {

  const classes = useStyles();

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      classes={{ paperScrollPaper: classes.dialog }}
    >
      <DialogTitle className={classes.header}>
        {title}
        <IconButton className={classes.button} onClick={onClose}>
          <Close />
        </IconButton>
      </DialogTitle>
      <ImageGallery 
        items={images}
        showThumbnails={false}
        showIndex={true}
        showBullets={false}
        showPlayButton={false}
        showFullscreenButton={!isVideo}
        showNav={!fullscreen}
        disableSwipe={fullscreen}
        onSlide={onSlide}
        onScreenChange={onScreenChange}
      />
    </Dialog>
  );
};

export default ImageSlider;