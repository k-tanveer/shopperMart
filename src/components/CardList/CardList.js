import React from 'react';
import {FlatList} from 'react-native';

const CardList = ({data, renderItem}) => {
  const keyExtrat = data => data.id;
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        marginTop: 10,
        paddingBottom: 50,
        marginBottom: 90,
      }}
      columnWrapperStyle={{justifyContent: 'space-around'}}
      numColumns={2}
      data={data}
      keyExtractor={keyExtrat}
      renderItem={renderItem}
    />
  );
};

export default CardList;
