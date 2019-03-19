/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import React from 'react';
import {
  Text, TouchableOpacity, View, StyleSheet,
} from 'react-native';

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

// eslint-disable-next-line react/prefer-stateless-function
class Table extends React.Component {
  render() {
    const { session } = this.props;
    return (
      <View style={{ marginTop: 50, paddingLeft: 1, paddingRight: 1 }}>
        <View style={styles.tableRowHeading}>
          <View style={styles.tableCell}>
            <Text style={{ fontWeight: 'bold', color: '#444' }}>Skill</Text>
          </View>
          <View style={styles.tableCellMain}>
            <Text style={{ fontWeight: 'bold', color: '#444' }}>Success</Text>
          </View>
          <View style={styles.tableCellMain}>
            <Text style={{ fontWeight: 'bold', color: '#444' }}>Fail</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCellLarge}>
            <Text>Pass</Text>
          </View>
          <TouchableOpacity
            style={styles.tableCellLargeMain}
            onPress={this.props.increasePassCount}
          >
            <View>
              <Text>{session.passesCompleted}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tableCellLargeMain}>
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
        </View>
      </View>
    );
  }
}

export default Table;
