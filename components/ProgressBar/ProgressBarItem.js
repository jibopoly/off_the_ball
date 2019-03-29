import React from 'react';
import { View } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import StyledText from '../StyledText';
import styles from './ProgressBarStyles';

const ProgressBarItem = (props) => {
  const { nameTop, icon, nameBottom, selected } = props;
  return (
    <View style={styles.circleContainer}>
      <StyledText style={styles.circleText}>{nameTop}</StyledText>
      <View style={selected ? styles.circleSelected : styles.circle}>
        <Ionicons
          name={icon}
          size={24}
          color="black"
        />
      </View>
      <StyledText style={styles.circleText}>{nameBottom}</StyledText>
    </View>
  );
};

ProgressBarItem.propTypes = {
  nameTop: PropTypes.string,
  icon: PropTypes.string.isRequired,
  nameBottom: PropTypes.string,
  selected: PropTypes.bool,
};

ProgressBarItem.defaultProps = {
  nameTop: '',
  nameBottom: '',
  selected: false,
};

export default ProgressBarItem;
