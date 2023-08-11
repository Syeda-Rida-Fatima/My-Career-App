import {makeStyles} from '@rneui/themed';
import React from 'react';
import {ModalProps} from 'react-native';
import {View} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {AppHeading, AppModal, AppText} from '../common';

type IProp = {
  isVisible: boolean;
  onPressResendEmail?: () => void;
  onPressSignInNow?: () => void;
} & ModalProps;

export const EmailModal = (props: IProp): JSX.Element => {
  const styles = useStyles(props);
  return (
    <AppModal {...props}>
      <View style={styles.modal}>
        <View style={styles.container}>
          <View style={styles.contentContainer}></View>
        </View>
        <View style={styles.footer}>
          <AppText bold alignCenter onPress={props.onPressSignInNow}>
            Sign in now
          </AppText>
        </View>
      </View>
    </AppModal>
  );
};

const useStyles = makeStyles(theme => {
  return {
    modal: {
      flex: 1,
      backgroundColor: '#f7f3ff',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    contentContainer: {
      height: '52%',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    image: {
      width: wp(90),
      height: hp(30),
      marginBottom: hp(4),
    },
    centerText: {
      textAlign: 'center',
      paddingHorizontal: wp(24),
    },
    resendButton: {
      color: '#008D23',
    },
    footer: {
      paddingBottom: 14,
    },
  };
});
