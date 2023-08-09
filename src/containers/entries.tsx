import {ItemCard} from 'src/components/item_card';
import {IEntry} from 'src/defs';
import React from 'react';
import {FlatList, ActivityIndicator} from 'react-native';

type IProps = {
  data: IEntry[] | [];
};

export const Entries = ({data}: IProps): JSX.Element => {
  return (
    <FlatList
      ListEmptyComponent={<ActivityIndicator size="large" />}
      data={data}
      renderItem={({item}) => <ItemCard {...item} />}
      keyExtractor={(_item, index) => index.toString()} // since the data is not changing
    />
  );
};
