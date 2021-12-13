import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default QuantityInrDcrBtn = ({sign, incrementBtn, decrementBtn}) => {
  return (
    <TouchableOpacity onPress={incrementBtn ? incrementBtn : decrementBtn}>
      <View style={styles.borderBtn}>
        <Text style={styles.borderBtnText}>{sign}</Text>
      </View>
    </TouchableOpacity>
  );
};
