import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#ffffff',
    height: 96,
  },
  shadow: {
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowRadius: 3.5,
    shadowOffset: {width: 0, height: 20},
    shadowOpacity: 1,
    elevation: 5,
    backgroundColor: '#0000', // invisible color
  },
});
