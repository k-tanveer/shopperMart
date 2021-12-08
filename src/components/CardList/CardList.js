import React from 'react';
import {View, Text, FlatList} from 'react-native';
import ProductCard from '../ProductCard/ProductCard';

const CardList = ({data}) => {
  const renderItem = data => {
    return <ProductCard data={data?.item} />;
  };

  return (
    <View>
      <FlatList
        // navigation={navigation}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        columnWrapperStyle={{justifyContent: 'space-around'}}
        numColumns={2}
        data={data}
        keyExtractor={data => data.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default CardList;
