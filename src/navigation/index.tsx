import React, {useEffect, useState} from 'react';

import {useAppDispatch, useAppSelector} from '../redux/hook';
import {RootState} from '../redux/store';
import {AuthNav} from './auth-nav';
import {Loader, Screen} from '../components/common';
import {View} from 'react-native';

type IProps = {
  isLoading?: boolean;
};

export const NavigatorComponent = () => {
  const state = useAppSelector(state => state);
  console.log({state});

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  if (isLoading) {
    // We haven't finished checking for the token yet
    return (
      <Screen>
        <View key="content">
          <Loader />
        </View>
      </Screen>
    );
  }

  return <AuthNav />;
};
