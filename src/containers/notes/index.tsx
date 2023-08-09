import React from 'react';
import {View} from 'react-native';
import {makeStyles} from '@rneui/themed';

import {NotesCard} from 'src/components';
import {NOTES} from 'src/assets/data';
import {customSize} from 'src/theme';

type IProps = {
  style?: any;
  onPress: (key: string) => void;
};

export const NotesContainer = (props: IProps): JSX.Element => {
  const styles = useStyles();
  const {style, onPress} = props;
  return (
    <View style={[styles.container, style]}>
      {NOTES.map(items => (
        <NotesCard
          {...items}
          key={items.title}
          onPress={() => onPress(items.key)}
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
      marginBottom: customSize.mvs(14),
    },
  };
});
