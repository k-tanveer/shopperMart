import React from 'react';
import styles from './styles';

import {View, Text, Image, TouchableOpacity} from 'react-native';

const ProductCard = ({data}) => {
  const truncate = str => {
    return str.length > 15 ? str.substring(0, 17) + '...' : str;
  };

  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <Image style={styles.image} source={{uri: data?.image}} />
        <Text style={styles.cardText}>{truncate(data?.title)}</Text>
        <Text style={styles.cardText}>${data?.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
