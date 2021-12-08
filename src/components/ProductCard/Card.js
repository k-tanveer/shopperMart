import React from 'react';
import styles from './styles';
import {truncateText} from '../../utils/stringUtils';

import {View, Text, Image, TouchableOpacity} from 'react-native';

const Card = ({data, navigateTODetails}) => {
  return (
    <TouchableOpacity onPress={navigateTODetails}>
      <View style={styles.card}>
        <Image style={styles.image} source={{uri: data?.image}} />
        <Text style={styles.cardText}>{truncateText(data?.title)}</Text>
        <Text style={styles.cardText}>${data?.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
