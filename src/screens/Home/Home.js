import React from 'react';
import {ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import StatusBars from '../../atomics/StatusBar/StatusBars';
import Text from '../../atomics/Text/Text';
import CardList from '../../components/CardList/CardList';
import Card from '../../components/ProductCard/Card';
import {useGetProductsQuery} from '../../store/services/products';

export default Home = ({navigation}) => {
  const {data, isLoading} = useGetProductsQuery();

  const navigateTODetails = () => {
    navigation.navigate('Detail');
  };

  const renderItem = data => (
    <Card navigateTODetails={navigateTODetails} data={data?.item} />
  );

  return (
    <SafeAreaView>
      <StatusBars />
      {/* <Text title="Home screen" h1={true} /> */}
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <CardList
          data={data}
          renderItem={renderItem}
          navigateTODetails={navigateTODetails}
        />
      )}
    </SafeAreaView>
  );
};
