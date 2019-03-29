import React from 'react';
import { View } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import styles from './ProgressBarStyles';
import ProgressBarItem from './ProgressBarItem';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 1,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ProgressBarItem
          nameTop="Step 1"
          nameBottom="Details"
          icon="md-shirt"
        />

        <View style={styles.line} />

        <ProgressBarItem
          nameTop="Step 2"
          nameBottom="Session"
          icon="md-football"
        />

        <View style={styles.line} />

        <ProgressBarItem
          nameTop="Step 3"
          nameBottom="Evaluation"
          icon="md-clipboard"
        />
      </View>
    );
  }
}

export default ProgressBar;
