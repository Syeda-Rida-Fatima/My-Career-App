import {CameraOptions, ImageLibraryOptions} from 'react-native-image-picker';

export const pictureOptions: ImageLibraryOptions | CameraOptions = {
  mediaType: 'photo',
  saveToPhotos: true,
  quality: 0.5,
  includeBase64: true,
  includeExtra: true,
};
