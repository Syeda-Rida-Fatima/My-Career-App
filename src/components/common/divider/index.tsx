import React from 'react';
import {Divider, makeStyles, useTheme} from '@rneui/themed';
import {customSize} from '../../../theme';

export const AppDivider = (props: any) => {
  const {theme} = useTheme();
  const styles = useStyles(props);
  return (
    <Divider
    // style={[styles.container, props.style]}
    // color={theme.colors.grey3}
    />
  );
};

const useStyles = makeStyles((_theme, {gutterBottom}: any) => {
  return {
    container: {
      marginBottom: gutterBottom ? customSize.mhs(14) : 0,
    },
  };
});
