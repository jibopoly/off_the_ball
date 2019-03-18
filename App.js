/* eslint-disable global-require */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import {
  Platform, StatusBar, StyleSheet, View,
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppNavigator from './navigation/AppNavigator';
import reducers from './reducers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <AppNavigator />
    </View>
  </Provider>
);

export default App;
