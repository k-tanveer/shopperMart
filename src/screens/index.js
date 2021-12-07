import React from 'react';
import {Text} from 'react-native';

import {useGetProductsQuery} from '../store/services/products';

export default function Root() {
  const {data, isSuccess, isError} = useGetProductsQuery();
  return <Text>{JSON.stringify(data)}</Text>;
}
