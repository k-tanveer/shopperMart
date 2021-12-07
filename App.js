import React from 'react';
import Root from './src/navigation';
import {store} from './src/store';

import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </Provider>
  );
}
