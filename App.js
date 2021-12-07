import React from 'react';
import {Provider} from 'react-redux';
import Root from './src/screens';
import {store} from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}
