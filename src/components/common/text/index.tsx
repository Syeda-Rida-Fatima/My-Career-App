import React from 'react';
import {Text, TextProps, makeStyles, Icon} from '@rneui/themed';
import {View} from 'react-native';
import {customSize} from '../../../theme';

type Props = {
  bold?: boolean;
  alignRight?: boolean;
  alignCenter?: boolean;
  paddingBottom?: number;
  color?: string;
  primary?: boolean;
  error?: boolean;
  iconRight?: any;
  iconLeft?: any;
  small?: boolean;
  smallest?: boolean;
  large?: boolean;
  largest?: boolean;
  semiBold?: boolean;
  gutterBottom?: boolean;
};

export type AppTextProps = Props & TextProps;

export const AppText = (props: AppTextProps): JSX.Element => {
  const styles = useStyles(props);
  const {children, style, iconRight, iconLeft, ...rest} = props;

  if (iconLeft) {
    return (
      <View style={[styles.iconTextContainer, style]}>
        <Icon
          {...iconLeft}
          size={iconLeft?.size || 17}
          iconStyle={styles.iconLeft}
        />
        <Text {...rest} style={styles.textStyle}>
          {children}
        </Text>
      </View>
    );
  }

  if (iconRight) {
    return (
      <View style={[styles.iconTextContainer, style]}>
        <Text {...rest} style={styles.textStyle}>
          {children}
        </Text>
        <Icon {...iconRight} size={17} iconStyle={styles.iconRight} />
      </View>
    );
  }
  return (
    <Text {...rest} style={[styles.textStyle, style]}>
      {children}
    </Text>
  );
};

const useStyles = makeStyles((theme, props: AppTextProps) => {
  const {
    bold,
    alignCenter,
    alignRight,
    paddingBottom,
    error,
    primary,
    color,
    small,
    smallest,
    large,
    largest,
    semiBold,
    gutterBottom,
  } = props;
  const setAlignment = () => {
    if (alignCenter) return 'center';
    if (alignRight) return 'right';
    return 'left';
  };
  const setColor = () => {
    if (error) return 'red';
    if (primary) return 'blue';
    if (color) return color;
    return 'black';
  };

  const setFont = () => {
    if (smallest) return customSize.ms(10);
    if (small) return customSize.ms(12);
    if (large) return customSize.ms(16);
    if (largest) return customSize.ms(18);
    return customSize.ms(14);
  };

  const setFontFamily = () => {
    if (semiBold) return 'Poppins-Medium';
    if (bold) return 'Poppins-SemiBold';
    return 'Poppins-Regular';
  };

  return {
    iconTextContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: gutterBottom ? customSize.mvs(14) : 0,
    },
    iconRight: {
      marginLeft: customSize.mhs(6),
      marginBottom: customSize.mvs(2),
    },
    iconLeft: {
      marginRight: customSize.mhs(6),
      marginBottom: customSize.mvs(2),
    },
    textStyle: {
      fontFamily: setFontFamily(),
      fontSize: setFont(),
      lineHeight: customSize.mvs(24),
      textAlign: setAlignment(),
      paddingBottom: paddingBottom || 0,
      color: setColor(),
      textAlignVertical: 'center',
      marginBottom: gutterBottom ? customSize.mvs(14) : 0,
    },
  };
});
