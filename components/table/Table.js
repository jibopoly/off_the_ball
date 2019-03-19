/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import React from 'react';
import {
  Text, TouchableOpacity, View, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import TableRow from './TableRow';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderColor: '#d3d3d3',
  },
  tableRowHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderColor: '#d3d3d3',
  },
  tableRowBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRightWidth: 0,
    borderColor: '#d3d3d3',
  },
  tableCell: {
    borderRightWidth: 1,
    padding: 10,
    flex: 1,
    borderColor: '#d3d3d3',
  },
  tableCellMain: {
    borderRightWidth: 1,
    padding: 10,
    flex: 2,
    borderColor: '#d3d3d3',
  },
  tableCellLarge: {
    borderRightWidth: 1,
    padding: 10,
    paddingTop: 30,
    paddingBottom: 30,
    flex: 1,
    borderColor: '#d3d3d3',
  },
  tableCellLargeMain: {
    borderRightWidth: 1,
    padding: 10,
    paddingTop: 30,
    paddingBottom: 30,
    flex: 2,
    borderColor: '#d3d3d3',
  },
});


const Table = (props) => {
  const { session, increaseSuccessFullPassCount, increaseFailedPassCount } = props;
  return (
    <View style={{ marginTop: 50, paddingLeft: 1, paddingRight: 1 }}>
      <TableRow
        text1="Skill"
        text2="Success"
        text3="Fail"
        backgroundColor="#5CC4B7"
        textColor="white"
      />
      <TableRow
        text1="passing"
        text2="23"
        text3="25"
        backgroundColor="#F5F5F5"
        textColor="#333"
      />
      {/* <View style={styles.tableRow}>
        <View style={styles.tableCellLarge}>
          <Text>Pass</Text>
        </View>
        <TouchableOpacity
          style={styles.tableCellLargeMain}
          onPress={increaseSuccessFullPassCount}
        >
          <View>
            <Text>{session.passesCompleted}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tableCellLargeMain}
          onPress={increaseFailedPassCount}
        >
          <View>
            <Text>{session.passesFailed}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.tableCellLarge}>
          <Text>Shoot</Text>
        </View>
        <View style={styles.tableCellLargeMain}>
          <Text />
        </View>
        <View style={styles.tableCellLargeMain}>
          <Text />
        </View>
      </View>
      <View style={styles.tableRowBottom}>
        <View style={styles.tableCellLarge}>
          <Text>Tackle</Text>
        </View>
        <View style={styles.tableCellLargeMain}>
          <Text />
        </View>
        <View style={styles.tableCellLargeMain}>
          <Text />
        </View>
      </View> */}
    </View>
  );
};

Table.propTypes = {
  session: PropTypes.object.isRequired,
  increaseSuccessFullPassCount: PropTypes.func.isRequired,
  increaseFailedPassCount: PropTypes.func.isRequired,
};

export default Table;
