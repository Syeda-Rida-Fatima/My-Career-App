import React from 'react';
import {Input, InputProps, makeStyles, useTheme} from '@rneui/themed';
import {customSize} from '../../../theme';
import {ViewStyle} from 'react-native';

type Props = {
  name: string;
  inputRef?: any;
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  closeIcon?: boolean;
  visibilityIcon?: boolean;
  onChangeValue: (val: string, name: string) => void;
} & InputProps;

export const AppInput = (props: Props): JSX.Element => {
  const styles = useStyles(props);
  const {theme} = useTheme();

  const {
    inputRef,
    name,
    rightIcon,
    style,
    containerStyle,
    closeIcon,
    visibilityIcon,
    renderErrorMessage = false,
    labelStyle,
    onChangeValue,
  } = props;

  const [secureTextEntry, setSecureTextEntry] = React.useState<boolean>(
    !!visibilityIcon,
  );

  const ref = (r: any) => inputRef && inputRef(r);
  const handleChangeText = (val: string) => onChangeValue(val, name);
  const handleVisibilityIconPress = () => setSecureTextEntry(!secureTextEntry);

  const setIcon = () => {
    if (visibilityIcon) {
      return {
        type: 'ant-design',
        name: 'eye',
        color: 'grey',
        size: 20,
        underlayColor: 'white',
        onPress: handleVisibilityIconPress,
      };
    }
    if (closeIcon) {
      return {
        type: 'ant-design',
        name: 'closecircle',
        color: 'grey',
        size: 20,
        underlayColor: 'white',
        onPress: () => handleChangeText(''),
      };
    }
    return rightIcon;
  };
  return (
    <Input
      {...props}
      placeholderTextColor="grey"
      ref={ref}
      containerStyle={[styles.containerStyle, style]}
      inputContainerStyle={[styles.inputContainerStyle, containerStyle]}
      inputStyle={styles.inputStyle}
      labelStyle={[styles.labelStyle, labelStyle]}
      errorStyle={styles.errorStyle}
      rightIcon={setIcon()}
      onChangeText={handleChangeText}
      renderErrorMessage={renderErrorMessage}
      secureTextEntry={secureTextEntry}
    />
  );
};

const useStyles = makeStyles((theme, {renderErrorMessage, disabled}: Props) => {
  return {
    containerStyle: {
      paddingHorizontal: 0,
      paddingBottom: !renderErrorMessage ? customSize.mvs(14) : 0,
    },
    inputContainerStyle: {
      height: customSize.mvs(53),
      backgroundColor: disabled ? 'grey' : 'white',
      borderBottomWidth: 0,
      paddingLeft: customSize.mhs(14),
      paddingRight: customSize.mhs(10),
      borderRadius: 5,
    },
    inputStyle: {
      fontSize: customSize.ms(14),
    },
    labelStyle: {
      fontWeight: 'normal',
      color: 'black',
      paddingBottom: customSize.mvs(8),
      paddingLeft: customSize.mhs(12),
      fontSize: customSize.ms(12),
    },
    errorStyle: {
      fontSize: customSize.ms(14),
    },
  };
});
