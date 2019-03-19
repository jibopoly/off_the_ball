import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import StyledText from '../StyledText';


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
    backgroundColor: '#666'
  },
  tableCellMain: {
    borderRightWidth: 1,
    padding: 10,
    flex: 2,
    borderColor: '#d3d3d3',
    backgroundColor: '#666'
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
  textStyle: {
    color: '#444',
    fontSize: 22,
    textAlign: 'center'
  },
});


const TableRow = ({ text1, text2, text3 }) => (
  <View style={styles.tableRowHeading}>
    <View style={styles.tableCell}>
      <StyledText style={styles.textStyle}>{text1}</StyledText>
    </View>
    <View style={styles.tableCellMain}>
      <StyledText style={styles.textStyle}>{text2}</StyledText>
    </View>
    <View style={styles.tableCellMain}>
      <StyledText style={styles.textStyle}>{text3}</StyledText>
    </View>
  </View>
);

TableRow.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
};

TableRow.defaultProps = {
  text1: '',
  text2: '',
  text3: '',
};


export default TableRow;
