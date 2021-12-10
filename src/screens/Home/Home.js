import React from 'react';
import {ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import StatusBars from '../../atomics/StatusBar/StatusBars';
import CardList from '../../components/CardList/CardList';
import Card from '../../components/ProductCard/Card';
import {useGetProductsQuery} from '../../store/services/products';

export default Home = ({navigation}) => {
  const {data, isLoading} = useGetProductsQuery();

  const renderItem = data => <Card navigation={navigation} item={data?.item} />;

  return (
    <SafeAreaView>
      <StatusBars />
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <CardList navigation={navigation} data={data} renderItem={renderItem} />
      )}
    </SafeAreaView>
  );
};
