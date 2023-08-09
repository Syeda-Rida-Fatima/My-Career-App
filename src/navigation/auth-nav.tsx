import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

import {SIGNIN_SCREEN, SIGNUP_SCREEN} from '../constants';
import {AuthStackParamList} from '../defs';

export const AuthNav = () => {
  const AuthStack = createNativeStackNavigator<AuthStackParamList>();

  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={SIGNIN_SCREEN} component={LoginScreen} />
      <AuthStack.Screen name={SIGNUP_SCREEN} component={SignupScreen} />
    </AuthStack.Navigator>
  );
};
