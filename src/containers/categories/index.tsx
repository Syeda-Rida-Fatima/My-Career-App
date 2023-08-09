import React from 'react';
import {ScrollView, View} from 'react-native';
import {makeStyles} from '@rneui/themed';

import {CategoryCard, Loader} from 'src/components';
import {useAppSelector} from 'src/redux/hook';
import {HABIT_TYPES} from 'src/assets/data';

type IProps = {
  horizontal?: boolean;
  selected: string;
  setSelected: (id: string) => void;
};

const RenderItems = (props: IProps) => {
  const styles = useStyles(props);
  const {selected, setSelected} = props;
  const types = useAppSelector(({habitTypes}) => habitTypes);

  if (!Object.keys(types).length) {
    return <Loader />;
  }

  return (
    <>
      {Object.keys(types).map(type => {
        if (HABIT_TYPES[type]) {
          const {image, body, backgroundColor, title, key} = HABIT_TYPES[type];
          return (
            <CategoryCard
              style={styles.cardContainerStyle}
              key={key}
              image={image}
              body={body}
              title={title}
              backgroundColor={backgroundColor}
              isSelected={selected === key}
              onPress={() => setSelected(key)}
            />
          );
        }
        return null;
      })}
    </>
  );
};

export const CategoriesContainer = (props: IProps): JSX.Element => {
  const styles = useStyles(props);
  const {horizontal} = props;

  if (horizontal) {
    return (
      <ScrollView
        style={styles.horizontalView}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <RenderItems {...props} />
      </ScrollView>
    );
  }

  return (
    <View style={styles.wrapContainer}>
      <RenderItems {...props} />
    </View>
  );
};

const useStyles = makeStyles((_theme, {horizontal}: IProps) => {
  return {
    wrapContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      paddingBottom: 10,
    },
    horizontalView: {
      paddingBottom: 14,
    },
    cardContainerStyle: horizontal
      ? {
          width: 160,
          marginRight: 10,
        }
      : {},
  };
});
