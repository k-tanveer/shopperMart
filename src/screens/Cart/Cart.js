import React from 'react';
import styles from './styles';
import {FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import StatusBars from '../../atomics/StatusBar/StatusBars';
import {removeItem, clearCart} from '../../store/services/Cart';

import Text from '../../atomics/Text/Text';
import ShoppingCart from '../../components/ShoppingCard/ShoppingCard';
import {useSelector, useDispatch} from 'react-redux';
import {Card} from 'react-native-elements';

export default Cart = ({navigation}) => {
  const dispatch = useDispatch();
  const keyExtrat = data => data.id;
  const {items} = useSelector(state => state.carts);

  const handleRemoveItem = id => {
    dispatch(removeItem(id));
  };

  const clearCartItems = () => dispatch(clearCart());

  const renderItem = data => (
    <ShoppingCart
      removeItemFromCart={handleRemoveItem}
      navigation={navigation}
      item={data?.item}
    />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBars />
      {/* <Text title="Cart screen" /> */}
      <TouchableOpacity onPress={clearCartItems}>
        <Card.Title style={styles.cartTitle}>Clear Cart Items</Card.Title>
      </TouchableOpacity>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={items}
        keyExtractor={keyExtrat}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};
