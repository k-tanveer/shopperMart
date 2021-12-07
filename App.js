import React from 'react';
import { Text } from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <Text>hello world</Text>
    </Provider>
  );
}
