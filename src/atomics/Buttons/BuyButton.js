import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default BuyButton = () => {
  return (
    <TouchableOpacity>
      <View style={styles.buyBtn}>
        <Text style={styles.buyBtnText}>Buy</Text>
      </View>
    </TouchableOpacity>
  );
};
