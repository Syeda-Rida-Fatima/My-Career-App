import {Platform} from 'react-native';

const Constants = {
  PADDING_HORIZONTAL: 20,
  HEADER_SHADOW: {
    shadowColor:
      Platform.OS == 'android'
        ? 'rgba(32, 69, 70, 0.5)'
        : 'rgba(32, 69, 70, 0.2)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
  },
  LIGHT_SHADOW: {
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 3,
  },
  SHADOW: {
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 5,
    elevation: 5,
  },
  DARK_SHADOW: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 10,
  },
};
export default Constants;
