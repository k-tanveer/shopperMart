import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export default TotalBoard = ({totalName, totalQuantity}) => {
  return (
    <View style={styles.totalContainer}>
      <Text style={styles.totalText}>{totalName}</Text>
      <Text style={styles.totalText}>{totalQuantity}</Text>
    </View>
  );
};
