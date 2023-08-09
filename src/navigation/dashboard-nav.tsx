import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from '@rneui/themed';

import {
  ADD_HABIT_SCREEN,
  CREATE_FIRST_HABIT_SCREEN,
  DASHBOARD_SCREEN,
  HABITS_SCREEN,
  HOME,
  INSIGHTS_SCREEN,
  SETTINGS_NAV,
  SETTINGS_SCREEN,
} from 'src/constants';
import {DashboardStackParamList, HomeStackParamList} from 'src/defs';
import {
  AddHabitScreen,
  CreateFirstHabitScreen,
  DashboardScreen,
  HabitsScreen,
  InsightsScreen,
  SettingsScreen,
} from 'src/screens';
import {Habit, Insights, Track, Plus, Setting} from 'src/assets/svgs';
import {SettingsNav} from './settings-nav';
import {AppHeader} from 'src/components/header';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator<HomeStackParamList>();
const DashboardStack = createNativeStackNavigator<DashboardStackParamList>();

const TabbarButtonComponent = () => null;

export const DashboardNav = ({hasData}: any) => {
  if (hasData) {
    return (
      <DashboardStack.Navigator screenOptions={{headerShown: false}}>
        <DashboardStack.Screen name={HOME} component={TabScreens} />
        <DashboardStack.Screen name={SETTINGS_NAV} component={SettingsNav} />
        <DashboardStack.Screen
          options={{
            headerShown: true,
            header: props => <AppHeader {...props} />,
            title: 'All Categories',
          }}
          name={ADD_HABIT_SCREEN}
          component={AddHabitScreen}
        />
      </DashboardStack.Navigator>
    );
  }
  return (
    <DashboardStack.Navigator screenOptions={{headerShown: false}}>
      <DashboardStack.Screen
        name={CREATE_FIRST_HABIT_SCREEN}
        component={CreateFirstHabitScreen}
      />
      <DashboardStack.Screen
        options={{
          headerShown: true,
          header: props => <AppHeader {...props} />,
          title: 'All Categories',
        }}
        name={ADD_HABIT_SCREEN}
        component={AddHabitScreen}
      />
      <DashboardStack.Screen name={HOME} component={TabScreens} />
      <DashboardStack.Screen name={SETTINGS_NAV} component={SettingsNav} />
    </DashboardStack.Navigator>
  );
};

export const TabScreens = () => {
  const {theme} = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: insets.bottom > 10 ? insets.bottom + 61 : 71,
          paddingTop: Platform.OS === 'android' ? 6 : 10,
          paddingBottom: insets.bottom > 0 ? insets.bottom : 12,
          backgroundColor: theme.colors.white,
        },
        tabBarActiveTintColor: theme.colors.black,
        tabBarInactiveTintColor: theme.colors.grey3,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name={DASHBOARD_SCREEN}
        component={DashboardScreen}
        options={{
          tabBarIcon: Track,
          tabBarLabel: 'TRACK',
        }}
      />
      <Tab.Screen
        name={INSIGHTS_SCREEN}
        component={InsightsScreen}
        options={{
          headerShown: true,
          header: props => <AppHeader {...props} />,
          tabBarIcon: Insights,
          tabBarLabel: 'INSIGHTS',
          title: 'Insights',
        }}
      />
      <Tab.Screen
        name="BUTTON"
        component={TabbarButtonComponent}
        options={{tabBarIcon: Plus, tabBarLabel: ''}}
        listeners={({navigation}) => ({
          tabPress: (e: any) => {
            e.preventDefault();
            navigation.navigate(ADD_HABIT_SCREEN);
          },
        })}
      />
      <Tab.Screen
        name={HABITS_SCREEN}
        component={HabitsScreen}
        options={{
          headerShown: true,
          header: props => <AppHeader {...props} />,
          tabBarIcon: Habit,
          tabBarLabel: 'HABITS',
          title: 'My Habits',
        }}
      />
      <Tab.Screen
        name={SETTINGS_SCREEN}
        component={SettingsScreen}
        options={{
          headerShown: true,
          header: props => <AppHeader {...props} />,
          tabBarIcon: Setting,
          tabBarLabel: 'SETTINGS',
          title: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
};
