import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
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
    headerTintColor: 'white',
  };

  render() {
    const { session } = this.props;
    return (
      <View style={styles.container}>
        {session.map(item => (
          <Text
            key={item}
          >
            {item}
          </Text>
        ))
        }
        <Table />
      </View>
    );
  }
}

HomeScreen.propTypes = {
  session: PropTypes.array.isRequired,
};


const mapStateToProps = state => (
  { session: state.currentSession }
);

export default connect(mapStateToProps)(HomeScreen);
