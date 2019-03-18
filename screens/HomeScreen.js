import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Table from '../components/table/Table';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

class HomeScreen extends React.Component {
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
        {this.props.session.map(item => 
          <Text>{item}</Text>
        )
        }
        <Table />
      </View>
    );
  }
}

const mapStateToProps = state => (
  { session: state.currentSession }
);

export default connect(mapStateToProps)(HomeScreen)