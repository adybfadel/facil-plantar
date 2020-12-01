import { Storage } from 'aws-amplify';

export default class AppService {
  
  static getGeolocation = callback => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => callback(true, { content: position }), 
        error => {
          let message;
          switch(error.code) {
            case error.PERMISSION_DENIED:
              message = 'DENIED';
              break;
            case error.POSITION_UNAVAILABLE:
              message = 'UNAVAILABLE';
              break;
            case error.TIMEOUT:
              message = 'TIMEOUT';
              break;
            default:
              message = 'UNKNOWN';
          }
          callback(false, { message });
        });
    } else {
      callback(false, { message: 'UNSUPORTED' });
    }
  }

  static removeDiatrics = (text) => {       
    text = text.toLowerCase();                                                         
    text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    text = text.replace(new RegExp('[Ç]','gi'), 'c');
    return text;                 
  }


  static imageUrl = async (image) => {
    if (!image) return;
    const { key, bucket, region } = image;
    const [, , keyWithoutPrefix] = /([^/]+\/){1}(.*)$/.exec(key) || key;
    const imageUrl = await Storage.get(keyWithoutPrefix, { bucket, region });
    return imageUrl;
  }

  static imagesUrl = async (images) => {
    const urls = await Promise.all(images.map(async image => {
      return await this.imageUrl(image);
    }));
    return urls;
  }
}