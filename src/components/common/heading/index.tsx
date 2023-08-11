import React from 'react';
import {Text, TextProps, makeStyles} from '@rneui/themed';
import {customSize} from '../../../theme';

type Props = {
  alignRight?: boolean;
  alignCenter?: boolean;
  paddingBottom?: number;
  primary?: boolean;
  secondary?: boolean;
  medium?: boolean;
  color?: string;
};

type IProps = Props & TextProps;

export const AppHeading = (props: IProps): JSX.Element => {
  const styles = useStyles(props);
  const {children, style} = props;

  return (
    <Text
      {...props}
      style={[styles.textStyle, style]}
      h1Style={styles.heading1}
      h2Style={styles.heading2}
      h3Style={styles.heading3}
      h4Style={styles.heading4}>
      {children}
    </Text>
  );
};

const useStyles = makeStyles((theme, props: IProps) => {
  const {
    alignCenter,
    alignRight,
    paddingBottom,
    primary,
    secondary,
    medium,
    color,
  } = props;
  const setAlignment = () => {
    if (alignCenter) return 'center';
    if (alignRight) return 'right';
    return 'left';
  };

  const setColor = () => {
    if (primary) return theme.colors.primary;
    if (secondary) return theme.colors.secondary;
    if (color) return color;
    return theme.colors.black;
  };

  const setFontFamily = () => {
    if (medium) return 'Poppins-Medium';
    return 'Poppins-SemiBold';
  };

  return {
    textStyle: {
      textAlign: setAlignment(),
      paddingBottom: paddingBottom || 0,
      color: setColor(),
    },
    heading1: {
      fontFamily: setFontFamily(),
      fontSize: customSize.ms(28),
    },
    heading2: {
      fontFamily: setFontFamily(),
      fontSize: customSize.ms(20),
    },
    heading3: {
      fontFamily: setFontFamily(),
      fontSize: customSize.ms(18),
    },
    heading4: {
      fontFamily: setFontFamily(),
      fontSize: customSize.ms(16),
    },
  };
});
