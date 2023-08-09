import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  DELETE_ACCOUNT_SCREEN,
  NOTIFICATION_SCREEN,
  YOUR_ACCOUNT_SCREEN,
} from 'src/constants';
import {SettingsStackParamList} from 'src/defs';
import {
  NotificationScreen,
  YourAccountScreen,
  DeleteAccountScreen,
} from 'src/screens';
import {AppHeader} from 'src/components/header';

const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();

export const SettingsNav = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        // eslint-disable-next-line react/no-unstable-nested-components
        header: props => <AppHeader {...props} />,
      }}>
      <SettingsStack.Screen
        name={NOTIFICATION_SCREEN}
        component={NotificationScreen}
        options={{title: 'Notification'}}
      />
      <SettingsStack.Screen
        name={YOUR_ACCOUNT_SCREEN}
        component={YourAccountScreen}
        options={{title: 'Your Account'}}
      />
      <SettingsStack.Screen
        name={DELETE_ACCOUNT_SCREEN}
        component={DeleteAccountScreen}
        options={{title: 'Delete Account'}}
      />
    </SettingsStack.Navigator>
  );
};
