import React, {useEffect} from 'react';
import DraggableFlatList from 'react-native-draggable-flatlist';
import {makeStyles} from '@rneui/base';

import {TabsCard} from 'src/components';
import {customSize} from 'src/theme';
import {ZoomIn} from 'react-native-reanimated';

export const HabitCardsContainer = ({
  data = [],
  selectedState,
  onCardPress,
}: any): JSX.Element => {
  const styles = useStyles();
  const [dataItems, setData] = React.useState(data);

  useEffect(() => {
    if (!data || !data.length) {
      setData([]);
    } else if (selectedState === 'all') {
      setData(data);
    } else {
      let updatedData;
      updatedData = data.filter((item: any) => item?.state === selectedState);
      setData(updatedData);
    }
  }, [data, selectedState]);

  const renderTabsItem = ({item, drag, index}: any) => (
    <TabsCard
      data={item}
      index={index}
      onDrag={drag}
      onCardPress={onCardPress}
    />
  );

  return (
    <DraggableFlatList
      itemEnteringAnimation={ZoomIn}
      data={dataItems}
      onDragEnd={({data: item}) => setData(item)}
      renderItem={renderTabsItem}
      keyExtractor={(item: any) => item._id}
      showsVerticalScrollIndicator={false}
      containerStyle={styles.contentContainerStyle}
    />
  );
};

const useStyles = makeStyles(_theme => {
  return {
    contentContainerStyle: {
      marginVertical: customSize.mvs(14),
      marginHorizontal: customSize.mhs(16),
      height: '80%',
    },
  };
});
