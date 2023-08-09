import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  SIGNIN_SCREEN,
  SIGNUP_SCREEN,
  NOTIFICATION_SCREEN,
  YOUR_ACCOUNT_SCREEN,
  DELETE_ACCOUNT_SCREEN,
} from '../constants';
export type AuthStackParamList = {
  SIGNIN_SCREEN: undefined;
  SIGNUP_SCREEN: undefined;
};

export type DashboardStackParamList = {
  CREATE_FIRST_HABIT_SCREEN: undefined;
  ADD_HABIT_SCREEN: undefined;
  HOME: undefined;
  SETTINGS_NAV: SettingsStackParamList;
};

export type HomeStackParamList = {
  DASHBOARD_SCREEN: undefined;
  INSIGHTS_SCREEN: undefined;
  BUTTON: undefined;
  HABITS_SCREEN: undefined;
  SETTINGS_SCREEN: undefined;
};

export type SettingsStackParamList = {
  NOTIFICATION_SCREEN: undefined;
  SETTINGS_SCREEN: undefined;
  YOUR_ACCOUNT_SCREEN: undefined;
  DELETE_ACCOUNT_SCREEN: undefined;
};

type AuthProps<T extends keyof AuthStackParamList> = NativeStackScreenProps<
  AuthStackParamList,
  T
>;

export type NotificationScreenProps = NativeStackScreenProps<
  SettingsStackParamList,
  typeof NOTIFICATION_SCREEN
>;
export type YourAccountScreenProps = NativeStackScreenProps<
  SettingsStackParamList,
  typeof YOUR_ACCOUNT_SCREEN
>;
export type DeleteAccountScreenProps = NativeStackScreenProps<
  SettingsStackParamList,
  typeof DELETE_ACCOUNT_SCREEN
>;

type HomeProps<T extends keyof HomeStackParamList> = BottomTabScreenProps<
  HomeStackParamList,
  T
>;

export type SignInScreenProps = AuthProps<typeof SIGNIN_SCREEN>;
export type SignUpScreenProps = AuthProps<typeof SIGNUP_SCREEN>;
