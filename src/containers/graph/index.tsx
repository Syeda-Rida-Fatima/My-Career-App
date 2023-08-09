import React, {useRef, useState} from 'react';
import {FlatList, View} from 'react-native';
import {InsightsGraph} from 'src/components';

import {customSize} from 'src/theme';
import {makeStyles} from '@rneui/themed';

export const GraphContainer = (props: any): JSX.Element => {
  const {type} = props;
  const styles = useStyles();
  const graphListRef = useRef<FlatList>(null);
  const [infoView, setInfoView] = useState<number>(0);
  const moveToIndex = (index: number) => {
    try {
      if (index >= 0) {
        graphListRef?.current?.scrollToIndex({
          index: index === 0 ? 0 : index - 1,
          animated: true,
        });
      }
    } catch (err) {}
  };

  const renderInsightsGraph = React.useCallback(
    ({item, index}: any) => {
      return (
        <View
          style={{
            flex: 1,
            marginHorizontal: 2,
          }}>
          <InsightsGraph
            {...item}
            dataLen={[0, 1, 2, 3, 4]}
            index={index}
            fullHeight={(index === 0 || index % 2) === 0 ? 50 : 100}
            compHeight={100}
            showInfoSec={index === infoView}
            onBarPress={() => {
              setInfoView(index ?? 0);
              moveToIndex(index ?? 0);
            }}
          />
        </View>
      );
    },
    [infoView],
  );

  return (
    <View style={styles.graphView}>
      <FlatList
        ref={graphListRef}
        horizontal
        contentContainerStyle={{
          paddingTop: customSize.mhs(40),
        }}
        stickyHeaderIndices={[1]}
        data={[0, 1, 2, 3, 4, 5, 6, 7, 2, 3, 4, 5, 6, 7]}
        extraData={[0, 1, 2, 3, 4]}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={renderInsightsGraph}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const useStyles = makeStyles(theme => {
  return {
    graphView: {
      flexDirection: 'row',
      paddingHorizontal: customSize.mhs(15),
    },
  };
});
