import React from 'react';
import {TextProps} from '@rneui/themed';

import {AppText} from '../common/';

type IProps = {
  type: 'signup' | 'signin';
} & TextProps;

export const SigninSignupNow = (props: IProps): JSX.Element => {
  const {onPress, type} = props;
  if (type === 'signup') {
    return (
      <AppText alignCenter>
        Don’t have an account?{' '}
        <AppText bold onPress={onPress}>
          Sign up now.
        </AppText>
      </AppText>
    );
  }
  return (
    <AppText alignCenter>
      Already have an account?{' '}
      <AppText bold onPress={onPress}>
        Sign in now.
      </AppText>
    </AppText>
  );
};
