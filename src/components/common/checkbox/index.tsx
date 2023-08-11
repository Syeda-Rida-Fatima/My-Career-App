import React from 'react';
import {ViewStyle} from 'react-native';
import {CheckBox, CheckBoxProps, makeStyles, useTheme} from '@rneui/themed';

type Props = {
  name: string;
  style?: ViewStyle;
} & CheckBoxProps;

export const AppCheckbox = (props: Props): JSX.Element => {
  const styles = useStyles(props);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {style, children, ...rest} = props;
  const {theme} = useTheme();
  return (
    <CheckBox
      {...rest}
      containerStyle={[styles.container, style]}
      textStyle={styles.labelStyle}
      uncheckedColor={theme.colors.secondary}
      checkedColor={theme.colors.secondary}
      size={35}
      fontFamily="Poppins-Medium"
      iconType="ionicon"
      checkedIcon="checkbox"
      uncheckedIcon="ios-square-outline"
    />
  );
};

const useStyles = makeStyles(theme => {
  return {
    container: {
      height: 53,
      justifyContent: 'center',
      margin: 0,
      paddingVertical: 0,
    },
    labelStyle: {
      fontWeight: '500',
      color: theme.colors.black,
    },
  };
});
