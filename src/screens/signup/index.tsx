import React, {useState} from 'react';
import {View} from 'react-native';
import {makeStyles} from '@rneui/themed';

import {EmailModal} from '../../components/email-modal';
import {EmailPasswordForm} from '../../components/email-password-form';
import {SigninSignupNow} from '../../components/signin-signup-now';
import {SIGNIN_SCREEN} from '../../constants';
import {Screen} from '../../components/common/screen';
import {ISignUpState, SignUpScreenProps} from '../../defs';
import {authSchema, stringifyErrorMessage, validateSchema} from '../../utils';
import {useSignUpMutation} from '../../redux/apis';
import {customSize} from '../../theme';

export const SignUpScreen = ({navigation}: SignUpScreenProps): JSX.Element => {
  const styles = useStyles();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const [signUp, setSignUp] = useState<ISignUpState>({
    username: 'ali',
    password: 'ali123',
    city: 'karachi',
    country: 'pakistan',
    email: 'ali@gmail.com',
  });
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [signUpAction, {isLoading}] = useSignUpMutation();

  const handleChangeValue = (val: string, name: string) => {
    setErrorMessage('');
    setSignUp({...signUp, [name]: val});
  };

  const handleOnSubmit = async () => {
    try {
      await validateSchema(authSchema, signUp);
      // await signUpAction(signUp).unwrap();
      // setModalVisible(true);
    } catch (error: any) {
      setErrorMessage(`Error: ${stringifyErrorMessage(error)}`);
    }
  };

  const onPressSignInNow = () => navigation.navigate(SIGNIN_SCREEN);
  return (
    <Screen animated="fadeIn">
      <View key="content" style={styles.contentContainer}>
        <View>
          <EmailPasswordForm
            type="signup"
            containerStyle={styles.emailFormContainer}
            username={signUp.username}
            password={signUp.password}
            country={signUp.country}
            city={signUp.city}
            email={signUp.email}
            onChangeValue={handleChangeValue}
            onSubmit={handleOnSubmit}
            isLoading={isLoading}
            errorMessage={{
              username: errorMessage.includes('username')
                ? errorMessage
                : undefined,
              password: errorMessage.includes('password')
                ? errorMessage
                : undefined,

              country: errorMessage.includes('country')
                ? errorMessage
                : undefined,
              city: errorMessage.includes('city') ? errorMessage : undefined,
              email: errorMessage.includes('email') ? errorMessage : undefined,
            }}
          />
        </View>

        <SigninSignupNow type="signin" onPress={onPressSignInNow} />
        <EmailModal
          isVisible={modalVisible}
          onDismiss={() => setModalVisible(false)}
          onRequestClose={() => setModalVisible(false)}
          onPressSignInNow={onPressSignInNow}
        />
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
      marginBottom: customSize.mvs(3),
      marginTop: customSize.mvs(8),
    },
    emailFormContainer: {
      marginBottom: customSize.mvs(10),
    },
  };
});
