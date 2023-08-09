import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';

import {createTheme} from '@rneui/themed';

const theme = createTheme({
  lightColors: {
    primary: '#6941DE',
    secondary: '#9F88FF',
    background: '#f7f3ff',
    grey1: '#999999',
    grey2: '#4D4D4D',
    grey3: '#3C3C434D',
    grey4: '#E6E6E6',
    greyOutline: '#E3E3E3',
    platform: {
      default: {
        grey: '#00000050',
        secondary: '#F1F2F3',
        primary: '#FFFFFF',
      },
    },
  },
  darkColors: {
    background: '#292929',
    primary: '#6941DE',
  },
});
export default theme;

export const customSize = {
  title: moderateVerticalScale(21),
  large: moderateVerticalScale(17),
  normal: moderateVerticalScale(16),
  label: moderateVerticalScale(14),
  button: moderateVerticalScale(15),
  p: moderateVerticalScale(12),
  small: moderateVerticalScale(10),
  h1: moderateVerticalScale(36),
  h2: moderateVerticalScale(26),
  h3: moderateVerticalScale(24),
  h4: moderateVerticalScale(20),
  h6: moderateVerticalScale(13),
  mhs: scale,
  mvs: moderateVerticalScale,
  ms: moderateScale,
};

export const fontFamily = {
  primary: 'Roboto',
  secondary: 'RobotoThin',
  tertiary: 'Lato',
  poppinsBold: 'PoppinsBold',
  poppins: 'Poppins',
  RobotoItalic: 'RobotoItalic',
};
