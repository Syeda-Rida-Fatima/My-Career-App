import {makeStyles} from '@rneui/themed';
import React from 'react';
import {
  View,
  Modal,
  ActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

type Props = {
  loading?: boolean;
  onRequestClose?: () => void;
};

type IProps = Props & ActivityIndicatorProps;

export const Loader = (props: IProps): JSX.Element => {
  const {loading, onRequestClose} = props;
  const styles = useStyles(props);

  return (
    <Modal
      transparent={true}
      animationType="none"
      visible={loading}
      onRequestClose={onRequestClose}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator animating={loading} size="large" color="white" />
        </View>
      </View>
    </Modal>
  );
};

const useStyles = makeStyles((theme, props: any) => {
  return {
    modalBackground: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-around',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    activityIndicatorWrapper: {
      height: hp(20),
      aspectRatio: 1,
      borderRadius: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
  };
});
