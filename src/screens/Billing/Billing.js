import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {Card} from 'react-native-elements';
import StatusBars from '../../atomics/StatusBar/StatusBars';
import TotalBoard from '../../atomics/TotalBoard/TotalBoard';
import BillingCard from '../../components/BillingCard/BillingCard';
import styles from './styles';

import {useSelector, useDispatch} from 'react-redux';
import {totalPrice, totalQuantity} from '../../utils/billingUtils';

export default Billing = ({navigation}) => {
  const {items} = useSelector(state => state.carts);

  const keyExtrat = data => data.id;
  const renderItem = data => (
    <BillingCard navigation={navigation} item={data?.item} />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBars />
      <Card.Title style={styles.cartTitle}>Pay</Card.Title>
      <FlatList
        contentContainerStyle={{
          marginBottom: 20,
        }}
        showsVerticalScrollIndicator={false}
        data={items}
        keyExtractor={keyExtrat}
        renderItem={renderItem}
      />

      <View style={styles.totalSection}>
        <TotalBoard
          totalName="Total Quantity"
          totalQuantity={totalQuantity(items)}
        />
        <TotalBoard
          totalName="Total Price"
          totalQuantity={`$ ${totalPrice(items).toFixed(2)}`}
        />
      </View>
    </SafeAreaView>
  );
};
