import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Table } from '../components/table/Table';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

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
