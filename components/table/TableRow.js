import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import StyledText from '../StyledText';
import styles from './tableStyles';

const TableRow = (props) => {
  const {
    text1,
    text2,
    text3,
    backgroundColor,
    textColor,
    tableRowBottom
  } = props;

  const tableRowStyle = tableRowBottom ? styles.tableRowBottom : styles.tableRow

  return (
    <View style={{ ...tableRowStyle, backgroundColor }}>
      <View style={styles.tableCellLarge}>
        <StyledText>{text1}</StyledText>
      </View>
      <View style={styles.tableCellLargeMain}>
        <StyledText>{text2}</StyledText>
      </View>
      <View style={styles.tableCellLargeMain}>
        <StyledText>{text3}</StyledText>
      </View>
    </View>
  );
};

TableRow.propTypes = {
  text1: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  text2: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  text3: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  tableRowBottom: PropTypes.bool,
};

TableRow.defaultProps = {
  text1: '',
  text2: '',
  text3: '',
  backgroundColor: '#fff',
  textColor: '#333',
  tableRowBottom: false,
};


export default TableRow;
