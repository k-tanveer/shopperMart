import React from 'react';
import {StatusBar} from 'react-native';
import COLORS from '../../constants/colors';

const StatusBars = () => {
  return <StatusBar barStyle="light-content" backgroundColor={COLORS.violet} />;
};

export default StatusBars;
