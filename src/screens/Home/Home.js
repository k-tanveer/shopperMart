import React from 'react';
import {ActivityIndicator, Image, StatusBar, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Text from '../../atomics/Text/Text';
import CardList from '../../components/CardList/CardList';
import COLORS from '../../constants/colors';
import {useGetProductsQuery} from '../../store/services/products';

export default Home = () => {
  const {data, isLoading} = useGetProductsQuery();

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.violet} />

      {/* <Text title="Home screen" h1={true} /> */}
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <CardList data={data} />
      )}
    </SafeAreaView>
  );
};
