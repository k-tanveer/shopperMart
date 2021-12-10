import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default QuantityInrDcrBtn = ({sign}) => {
  return (
    <TouchableOpacity>
      <View style={styles.borderBtn}>
        <Text style={styles.borderBtnText}>{sign}</Text>
      </View>
    </TouchableOpacity>
  );
};
