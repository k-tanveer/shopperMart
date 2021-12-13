import React from 'react';
import {View, Text, Image} from 'react-native';
import {Card} from 'react-native-elements';
import {truncateString} from '../../utils/stringUtils';
import styles from './styles';

const BillingCard = ({item}) => {
  return (
    <Card containerStyle={{margin: 0}}>
      <View style={styles.billingCardContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{uri: item?.image}}
        />
        <View style={styles.billingTextContainer}>
          <Text style={styles.billingText}>
            {truncateString(item.title, 10)}
          </Text>
          <Text style={styles.billingText}>{item.quantity}</Text>

          <Text style={styles.billingText}>$ {item.price}</Text>
        </View>
      </View>
    </Card>
  );
};

export default BillingCard;
