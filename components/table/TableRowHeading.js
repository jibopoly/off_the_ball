import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import StyledText from '../StyledText';
import styles from './tableStyles';


const TableRowHeading = (props) => {
  const {
    text1,
    text2,
    text3,
    backgroundColor,
    textColor,
  } = props;

  return (
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
};

TableRowHeading.propTypes = {
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
};

TableRowHeading.defaultProps = {
  text1: '',
  text2: '',
  text3: '',
  backgroundColor: '#fff',
  textColor: '#333',
};


export default TableRowHeading;
