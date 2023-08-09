import React, {useEffect, useState} from 'react';

import {useAppDispatch, useAppSelector} from 'src/redux/hook';
import {RootState} from 'src/redux/store';
import {AuthNav} from './auth-nav';
import {DashboardNav} from './dashboard-nav';
import {apiSlice} from 'src/redux/apis/base-api';
import {setMyHabits} from 'src/redux/slices';
import {Loader, Screen} from 'src/components';
import {View} from 'react-native';

type IProps = {
  isLoading?: boolean;
};

export const NavigatorComponent = () => {
  const state = useAppSelector(state => state);
  console.log({state});

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const {signedIn, myHabits} = useAppSelector(
    ({auth, myHabits}: RootState) => ({
      signedIn: auth.token,
      myHabits,
    }),
  );

  useEffect(() => {
    if (signedIn && !myHabits.length) {
      try {
        const fetchMyHabit = async () => {
          setIsLoading(true);
          const {data} = await dispatch(
            apiSlice.endpoints.getMyHabits.initiate(),
          );
          dispatch(setMyHabits(data));
          setIsLoading(false);
        };
        fetchMyHabit();
      } catch (error) {
        console.log({error});
      } finally {
        setIsLoading(false);
      }
    }
  }, [signedIn]);

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

  return !signedIn ? <AuthNav /> : <DashboardNav hasData={!!myHabits.length} />;
};
