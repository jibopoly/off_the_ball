import React from 'react';
import { Text, View } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import styles from './ProgressBarStyles';

const ProgressBarItem = (props) => {
  const { nameTop, icon, nameBottom } = props;
  return (
    <View style={styles.circleContainer}>
      <Text>{nameTop}</Text>
      <View style={styles.circle}>
        <Ionicons
          name={icon}
          size={24}
          color="black"
        />
      </View>
      <Text>{nameBottom}</Text>
    </View>
  );
};

ProgressBarItem.propTypes = {
  nameTop: PropTypes.string,
  icon: PropTypes.string.isRequired,
  nameBottom: PropTypes.string,
};

ProgressBarItem.defaultProps = {
  nameTop: '',
  nameBottom: '',
};

export default ProgressBarItem;
