import React, {useState} from 'react';
import {View} from 'react-native';
import {makeStyles} from '@rneui/themed';

import {EmailPasswordForm} from '../../components/email-password-form';
import {Screen} from '../../components/common';
import {SigninSignupNow} from '../../components/signin-signup-now';

import {SIGNUP_SCREEN} from '../../constants';
import {ISignInState, SignInScreenProps} from '../../defs';
import {authSchema, stringifyErrorMessage, validateSchema} from '../../utils';
import {useAppDispatch} from '../../redux/hook';
import {setUser} from '../../redux/slices';
import {useSignInMutation} from '../../redux/apis';
import {customSize} from '../../theme';

export const SignInScreen = ({navigation}: SignInScreenProps): JSX.Element => {
  const styles = useStyles();
  const [signInAction, {isLoading}] = useSignInMutation();
  const dispatch = useAppDispatch();

  const [signIn, setSignIn] = useState<ISignInState>({
    username: __DEV__ ? 'Rida' : '',
    password: __DEV__ ? 'asdfgh' : '',
  });

  const [errorMessage, setErrorMessage] = useState<string>('');
  const handleChangeValue = (val: string, name: string) => {
    setErrorMessage('');
    setSignIn({...signIn, [name]: val});
  };

  const handleOnSubmit = async () => {
    try {
      console.log(signIn);
      await validateSchema(authSchema, signIn);

      //   const {token, ...user} = await signInAction(signIn).unwrap();
      //   dispatch(setUser({user, token}));
    } catch (error: any) {
      console.log({error});
      if (error?.status === 500) {
        return setErrorMessage('Error: Invalid username or password');
      }
      setErrorMessage(`Error: ${stringifyErrorMessage(error)}`);
      // }
    }
  };
  const onPressSignUpNow = () => navigation.navigate(SIGNUP_SCREEN);

  return (
    <Screen animated="fadeIn">
      <View key="content" style={styles.contentContainer}>
        <View>
          <EmailPasswordForm
            type="signin"
            username={signIn.username}
            password={signIn.password}
            isLoading={isLoading}
            errorMessage={{
              username: errorMessage.includes('username')
                ? errorMessage
                : undefined,
              password: errorMessage.includes('password')
                ? errorMessage
                : undefined,
            }}
            onChangeValue={handleChangeValue}
            onSubmit={handleOnSubmit}
            onSubmitPassword={handleOnSubmit}
          />
        </View>

        <SigninSignupNow type="signup" onPress={onPressSignUpNow} />
      </View>
    </Screen>
  );
};

const useStyles = makeStyles(() => {
  return {
    contentContainer: {
      justifyContent: 'space-between',
      marginBottom: customSize.mvs(2),
    },
    logoContainer: {
      marginTop: customSize.mvs(20),
      marginBottom: customSize.mvs(4),
    },
  };
});
