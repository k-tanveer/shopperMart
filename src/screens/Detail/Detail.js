import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import StatusBars from '../../atomics/StatusBar/StatusBars';
import Text from '../../atomics/Text/Text';

export default Detail = () => {
  return (
    <SafeAreaView>
      <StatusBars />
      <Text title="Detail screen" />
    </SafeAreaView>
  );
};
