import React from 'react';
import {makeStyles} from '@rneui/themed';
import {View} from 'react-native';
import {customSize} from '../../../theme';

export const FlexRow = (props: any) => {
  const {style, children} = props;
  const styles = useStyles(props);
  return <View style={[styles.container, style]}>{children}</View>;
};
const useStyles = makeStyles((_theme, {gutterBottom}: any) => {
  return {
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: gutterBottom ? customSize.ms(14) : 0,
    },
  };
});
