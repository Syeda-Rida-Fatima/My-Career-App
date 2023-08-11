import React from 'react';
import {Button, ButtonProps, makeStyles} from '@rneui/themed';
import {Platform} from 'react-native';

type Headings = 'outlined' | 'secondary' | 'primary' | 'clear';

type Props = {
  [key in Headings]?: boolean;
};

type IProps = Props & ButtonProps;

export const AppButton = (props: IProps): JSX.Element => {
  const styles = useStyles(props);
  const {outlined, secondary, primary, clear, buttonStyle, titleStyle} = props;

  const setColor = () => {
    if (primary) return 'primary';
    if (secondary) return 'secondary';
    return 'black';
  };

  const setType = () => {
    if (outlined) return 'outline';
    if (clear) return 'clear';
    return 'solid';
  };

  return (
    <Button
      {...props}
      color={setColor()}
      buttonStyle={[styles.buttonStyle, buttonStyle]}
      titleStyle={[styles.titleStyle, titleStyle]}
      type={setType()}
    />
  );
};

const useStyles = makeStyles((theme, {outlined, primary, clear}: IProps) => {
  const setColor = () => {
    if (primary && outlined) return 'purple';
    if (clear) return 'black';
    if (!outlined) return 'white';
    return 'black';
  };
  return {
    buttonStyle: {
      height: 48,
      borderRadius: Platform.OS === 'ios' ? 10 : 8,
      marginBottom: 4,
      borderWidth: outlined ? 2 : 0,
      borderColor: primary ? 'purple' : 'black',
    },
    titleStyle: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 16,
      color: setColor(),
    },
  };
});
