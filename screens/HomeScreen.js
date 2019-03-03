import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { Table } from '../components/table/Table';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Off The Ball',
  };


  render() {
    return (
      <View style={styles.container}>
        <Table />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
