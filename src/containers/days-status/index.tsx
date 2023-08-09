import React from 'react';
import {View} from 'react-native';
import {makeStyles} from '@rneui/themed';
import {DAYS} from 'src/assets/data';
import {DayStatus} from 'src/components/dashboard';

type IProps = {
  style?: any;
  data: any[];
};

export const DaysStatusContainer = (props: IProps): JSX.Element => {
  const styles = useStyles();
  const {style, data} = props;

  return (
    <View style={[styles.container, style]}>
      {DAYS?.map((items, index) => (
        <DayStatus key={items.label} title={items.label} status={data[index]} />
      ))}
    </View>
  );
};

const useStyles = makeStyles(() => {
  return {
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 14,
      paddingHorizontal: 4,
    },
  };
});
