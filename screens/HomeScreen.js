import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import Table from '../components/table/Table';
import { increaseSuccessFullPassCount, increaseFailedPassCount } from '../actions/currentSession/CurrentSessionActions';

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
    const {
      session,
      increaseSuccessFullPassCountConnect,
      increaseFailedPassCountConnect,
    } = this.props;

    return (
      <View style={styles.container}>
        <Table
          session={session}
          increaseSuccessFullPassCount={() => increaseSuccessFullPassCountConnect()}
          increaseFailedPassCount={() => increaseFailedPassCountConnect()}
        />
      </View>
    );
  }
}

HomeScreen.propTypes = {
  session: PropTypes.object.isRequired,
  increaseSuccessFullPassCountConnect: PropTypes.func.isRequired,
  increaseFailedPassCountConnect: PropTypes.func.isRequired,
};


const mapStateToProps = state => (
  { session: state.currentSession }
);

const mapDispatchToProps = {
  increaseSuccessFullPassCountConnect: increaseSuccessFullPassCount,
  increaseFailedPassCountConnect: increaseFailedPassCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
