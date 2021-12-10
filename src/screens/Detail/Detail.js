import React from 'react';
import StatusBars from '../../atomics/StatusBar/StatusBars';
// import Text from '../../atomics/Text/Text';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import COLORS from '../../constants/colors';
import {truncateString} from '../../utils/stringUtils';
import styles from './styles';
import QuantityInrDcrBtn from '../../atomics/Buttons/QuantityInrDcrBtn';
import BuyButton from '../../atomics/Buttons/BuyButton';

export default Detail = props => {
  const {
    navigation,
    route: {
      params: {singleItem},
    },
  } = props;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.light}}>
      <StatusBars />
      <View style={styles.imageContainer}>
        <Image source={{uri: singleItem?.image}} style={styles.image} />
      </View>
      
      <View style={styles.detailsContainer}>
        <View style={styles.bestChoiceContainer}>
          <View style={styles.line} />
          <Text style={styles.bestChoiceText}>Best choice</Text>
        </View>
        <View style={styles.clothNameContainer}>
          <Text style={styles.bestChoiceText}>
            {truncateString(singleItem.title, 20)}
          </Text>
          <View style={styles.priceTagContainer}>
            <Text style={styles.priceTagText}> ${singleItem.price} </Text>
          </View>
        </View>
        <View style={styles.aboutContainer}>
          <Text style={styles.bestChoiceText}>About</Text>
          <ScrollView>
            <Text style={styles.aboutText}>
              {truncateString(singleItem.description, 130)}
            </Text>
          </ScrollView>

          <View style={styles.buttonsContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <QuantityInrDcrBtn sign="-" />
              <Text style={styles.quantityText}>1</Text>
              <QuantityInrDcrBtn sign="+" />
            </View>
            <BuyButton />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
