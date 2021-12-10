import React from 'react';
import styles from './styles';
import {truncateString} from '../../utils/stringUtils';

import {View, Text, Image, TouchableOpacity} from 'react-native';

const Card = ({item, navigation}) => {
  const navigateTODetails = () =>
    navigation.navigate('Detail', {singleItem: item});
  return (
    <TouchableOpacity onPress={navigateTODetails}>
      <View style={styles.card}>
        <Image style={styles.image} source={{uri: item?.image}} />
        <Text style={styles.cardText}>{truncateString(item?.title, 18)}</Text>
        <Text style={styles.cardText}>${item?.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
