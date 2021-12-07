import React from 'react';
import {View} from 'react-native';

import {Text as RNText} from 'react-native-elements';

const Text = ({title}) => {
  return (
    <View>
      <RNText h1>{title}</RNText>
    </View>
  );
};

export default Text;
