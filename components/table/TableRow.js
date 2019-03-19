import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import StyledText from '../StyledText';


const styles = StyleSheet.create({
  tableRowHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tableCell: {
    padding: 10,
    flex: 1,
  },
  tableCellMain: {
    padding: 10,
    flex: 2,
  },
  textStyle: {
    color: 'white',
    fontSize: 22,
  },
});


const TableRow = ({ text1, text2, text3, backgroundColor, textColor }) => (
  <View style={{ ...styles.tableRowHeading, backgroundColor }}>
    <View style={styles.tableCell}>
      <StyledText style={{ ...styles.textStyle, color: textColor }}>{text1}</StyledText>
    </View>
    <View style={styles.tableCellMain}>
      <StyledText style={{ ...styles.textStyle, color: textColor }}>{text2}</StyledText>
    </View>
    <View style={styles.tableCellMain}>
      <StyledText style={{ ...styles.textStyle, color: textColor }}>{text3}</StyledText>
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
