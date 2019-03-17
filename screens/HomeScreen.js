import React from 'react';
import { StyleSheet, View } from 'react-native';
import Table from '../components/table/Table';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Current Session',
    headerStyle: {
      backgroundColor: '#14786B',
    },
    headerTintColor: 'white'
  };

  render() {
    return (
      <View style={styles.container}>
        <Table />
      </View>
    );
  }
}
