import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import COLORS from '../../constants/colors';
import {truncateString} from '../../utils/stringUtils';
import styles from './styles';

import {Card, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Fontisto';

const ShoppingCart = ({item, removeItemFromCart}) => {
  const remove = () => removeItemFromCart(item.id);
  return (
    <Card>
      <View style={styles.cartContainer}>
        <Image source={{uri: item?.image}} style={styles.image} />
        <View style={{flex: 1}}>
          <Text style={styles.cartText}>{truncateString(item.title, 25)}</Text>
          <Text style={styles.cartText}>quantity: {item?.quantity}</Text>
          <Text style={styles.cartText}>
            price: ${item?.price * item?.quantity}
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={remove}>
            <Icon
              name="shopping-basket-remove"
              size={35}
              style={{color: COLORS.violet}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );
};

export default ShoppingCart;
