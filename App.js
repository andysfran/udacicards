import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Routes from './Routes';

import reducers from './storeSettings/reducers';

const store = createStore(reducers);

export default () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
