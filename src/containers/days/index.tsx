import React from 'react';
import {View} from 'react-native';
import {makeStyles} from '@rneui/themed';
import {VerticalCheckbox} from 'src/components';
import {DAYS} from 'src/assets/data';

type IProps = {
  selectedDays: number[];
  onPress?: any;
  style?: any;
};

export const DaysContainer = (props: IProps): JSX.Element => {
  const styles = useStyles();
  const {selectedDays, onPress, style} = props;

  return (
    <View style={[styles.container, style]}>
      {DAYS?.map(items => (
        <VerticalCheckbox
          key={items.label}
          title={items.label}
          onPress={() => onPress(items.value)}
          checked={selectedDays.includes(items.value)}
        />
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
