import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input, Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import DatePicker from 'react-native-datepicker'
// eslint-disable-next-line import/no-extraneous-dependencies
import Table from '../components/table/Table';
import ProgressBar from '../components/ProgressBar/ProgressBar';
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

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  render() {
    const {
      session,
      increaseSuccessFullPassCountConnect,
      increaseFailedPassCountConnect,
    } = this.props;

    return (
      <ScrollView style={styles.container}>
        <ProgressBar />
        {/* <View style={{ backgroundColor: '#fff', paddingTop: 40, paddingBottom: 40 }}>
          <DatePicker
            showIcon={false}
            style={{ width: 200 }}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2016-05-01"
            maxDate={new Date()}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 15
              },
              dateInput: {
                marginLeft: 10,
                borderWidth: 0,
                fontStyle: 'italics',
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => { this.setState({ date: date }) }}
          />
          <Input
            containerStyle={{ marginTop: 10 }}
            placeholder="Player Name"
            leftIcon={(
              <Ionicons
                name="md-shirt"
                size={24}
                color="black"
                style={{ paddingRight: 10 }}
              />
            )}
          />
        </View>

        <Table
          session={session}
          increaseSuccessFullPassCount={() => increaseSuccessFullPassCountConnect()}
          increaseFailedPassCount={() => increaseFailedPassCountConnect()}
        />

        <View style={{ paddingTop: 40, paddingBottom: 40, backgroundColor: 'white', marginTop: 40 }}>
          <Button
            title={'Confirm'}
            buttonStyle={{
              backgroundColor: '#fff',
              borderWidth: 1,
              borderColor: 'black'
            }}
            titleStyle={{
              color: 'black'
            }}
          />
        </View> */}

      </ScrollView>
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
