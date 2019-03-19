import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from '../components/table/Table';
import { increasePassCount, decreasePassCount } from '../actions/currentSession/CurrentSessionActions';

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
        <Table
          session={session}
          increasePassCount={() => this.props.increasePassCount()}
        />
      </View>
    );
  }
}

HomeScreen.propTypes = {
  session: PropTypes.object.isRequired,
};


const mapStateToProps = state => (
  { session: state.currentSession }
);

const mapDispatchToProps = {
  increasePassCount,
  decreasePassCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
