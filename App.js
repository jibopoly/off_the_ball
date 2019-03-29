/* eslint-disable global-require */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import {
  Platform, StatusBar, StyleSheet, View,
} from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppNavigator from './navigation/AppNavigator';
import reducers from './reducers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
  },
});

const store = createStore(reducers);

class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  _loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        ...Icon.Ionicons.font,
        'MontserratRegular': require('./assets/fonts/Montserrat-Regular.ttf'),
        'MontserratBold': require('./assets/fonts/Montserrat-Bold.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}

export default App;
