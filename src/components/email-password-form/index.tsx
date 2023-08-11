import {makeStyles} from '@rneui/themed';
import React from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {AppButton, AppInput, AppText} from '../../components/common';
import {IForm} from '../../defs';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  type?: 'signin' | 'signup';
  username: string;
  password: string;
  country?: string;
  city?: string;
  email?: string;
  isLoading?: boolean;
  errorMessage?: {
    username?: string;
    password?: string;
    country?: string;
    city?: string;
    email?: string;
  };
  onSubmitPassword?: () => void;
} & IForm;

export const EmailPasswordForm = ({
  containerStyle,
  type,
  email,
  password,
  country,
  city,
  username,
  isLoading,
  errorMessage,
  onSubmit,
  onSubmitPassword,

  onChangeValue,
}: Props): JSX.Element => {
  const styles = useStyles();

  const renderContent = () => {
    if (type === 'signin') {
      return (
        <>
          <AppButton loading={isLoading} onPress={onSubmit}>
            Continue
          </AppButton>
        </>
      );
    }

    if (type === 'signup') {
      return (
        <>
          <AppInput
            closeIcon
            placeholder="country"
            errorMessage={errorMessage?.country}
            name="country"
            value={country}
            onChangeValue={onChangeValue}
          />
          <AppInput
            closeIcon
            placeholder="city"
            name="city"
            errorMessage={errorMessage?.city}
            value={city}
            onChangeValue={onChangeValue}
          />
          <AppInput
            closeIcon
            placeholder="Email Address"
            name="email"
            value={email}
            errorMessage={errorMessage?.email}
            keyboardType="email-address"
            onChangeValue={onChangeValue}
          />
          <AppText paddingBottom={hp(2)}>
            By continuing below, I agree to the{' '}
            <AppText bold>Terms of Service and Privacy Policy.</AppText>
          </AppText>
          <AppButton loading={isLoading} onPress={onSubmit}>
            Agree & Continue
          </AppButton>
        </>
      );
    }
    return null;
  };
  return (
    <View style={containerStyle}>
      <AppInput
        closeIcon
        placeholder="Username"
        name="username"
        errorMessage={errorMessage?.username}
        value={username}
        onChangeValue={onChangeValue}
      />

      <AppInput
        visibilityIcon
        placeholder="Password"
        name="password"
        errorMessage={errorMessage?.password}
        value={password}
        onChangeValue={onChangeValue}
        onSubmitEditing={onSubmitPassword}
      />
      {renderContent()}
    </View>
  );
};

const useStyles = makeStyles(() => {
  return {
    containerStyle: {
      marginTop: 40,
    },
  };
});
