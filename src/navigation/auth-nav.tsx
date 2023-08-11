import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SignInScreen} from '../screens/signin';
import {SignUpScreen} from '../screens/signup';

import {SIGNIN_SCREEN, SIGNUP_SCREEN} from '../constants';
import {AuthStackParamList} from '../defs';

export const AuthNav = () => {
  const AuthStack = createNativeStackNavigator<AuthStackParamList>();

  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={SIGNUP_SCREEN} component={SignUpScreen} />
      <AuthStack.Screen name={SIGNIN_SCREEN} component={SignInScreen} />
    </AuthStack.Navigator>
  );
};
