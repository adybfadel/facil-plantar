import React from 'react';
import ImageSlider from './ImageSlider';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl, intlShape } from 'react-intl';

import styles from './ImageSlider.css';

const propTypes = {
  intl: intlShape.isRequired,
};

const defaultProps = {
  images: []
};

class ImageSliderContainer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      open: props.open,
      images: props.images,
      isVideo: true,
    };
  }
  
  componentDidUpdate = (prevProps, prevState) => {
    const newProps = { ...this.props };
    if (newProps.open !== prevProps.open) {
      const images = newProps.images.map(image => {
        image.renderItem = () => this.renderImage(image, newProps.classes);
        return image;
      });
      this.setState({ 
        images, 
        open: newProps.open, 
        isVideo: images.video,
      });
    }
  }

  renderImage = (image, classes) => {
    return (
      <div className={!this.state.fullscreen ? classes.imageWrapper : ''}>
        {
          image.video ?
            <iframe
              title={image.description}
              src={image.url}
              frameBorder='0'
              height = '100%' 
              width = '100%'
              allowFullScreen>
            </iframe>
          :
            <img src={image.url} height='100%' width='100%' alt={image.description} />
        }
      </div>
    );
  }

  handleSlide = idx => {
    this.setState({ isVideo: this.state.images[idx].video });
  }

  handleScreenChange = fsElement => {
    this.setState({ fullscreen: !!fsElement });
  }

  render() {
    const { intl, title, onClose } = this.props;
    return (
      <React.Fragment>
        <ImageSlider 
          title={title || intl.formatMessage({id:'ImageSlider.defTitle'})}
          open={this.state.open}
          images={this.state.images}
          isVideo={this.state.isVideo}
          fullscreen={this.state.fullscreen}
          onSlide={this.handleSlide}
          onScreenChange={this.handleScreenChange}
          onClose={onClose}
        />
      </React.Fragment>
    );
  }
}

ImageSliderContainer.propTypes = propTypes;
ImageSliderContainer.defaultProps = defaultProps;

export default injectIntl(withStyles(styles)(ImageSliderContainer));