import React, {useEffect, useState} from 'react';
import {Alert, Platform} from 'react-native';
import SpInAppUpdates, {
  NeedsUpdateResponse,
  IAUUpdateKind,
  StartUpdateOptions,
  StatusUpdateEvent,
} from 'sp-react-native-in-app-updates';

import {version} from '../../package.json';

const HIGH_PRIORITY_UPDATE = 5;

export const useAppUpdateHook = () => {
  const inAppUpdates = new SpInAppUpdates(true);

  const [state, setState] = useState<any>({
    needsUpdate: null,
    otherData: null,
    error: null,
  });

  const checkForUpdates = () => {
    inAppUpdates
      .checkNeedsUpdate({curVersion: version})
      .then((result: NeedsUpdateResponse) => {
        setState({
          ...state,
          needsUpdate: result.shouldUpdate,
          otherData: result,
        });
      })
      .catch(error => {
        console.log({error});
        setState({...state, error});
      });
  };

  const startUpdating = () => {
    if (state.needsUpdate) {
      let updateOptions: StartUpdateOptions = {
        title: 'Habit Driven has a new update!',
        message:
          'There is a new version of the app available on the App Store, do you want to update it?',
        buttonUpgradeText: 'Update',
        buttonCancelText: 'Cancel',
      };
      if (Platform.OS === 'android' && state.otherData) {
        const {otherData} = state || {
          otherData: null,
        };
        if (otherData?.updatePriority >= HIGH_PRIORITY_UPDATE) {
          updateOptions = {
            updateType: IAUUpdateKind.IMMEDIATE,
          };
        } else {
          updateOptions = {
            updateType: IAUUpdateKind.FLEXIBLE,
          };
        }
      }

      inAppUpdates.addStatusUpdateListener(onStatusUpdate);
      inAppUpdates.startUpdate(updateOptions);
    } else {
      // @ts-ignore
      Alert.alert('App is up-to date');
    }
  };

  const onStatusUpdate = (event: StatusUpdateEvent) => {
    console.log(`onStatusUpdate ${JSON.stringify(event)}`);
  };

  useEffect(() => {
    checkForUpdates();
  }, []);

  return {state, startUpdating};
};
