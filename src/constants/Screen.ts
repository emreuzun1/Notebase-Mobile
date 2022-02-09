import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
const aspectRatio = width / height;
export {
  width as SCREEN_WIDTH,
  height as SCREEN_HEIGHT,
  aspectRatio as ASPECT_RATIO,
};
