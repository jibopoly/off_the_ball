import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const styles = {
  container: {
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'center',
  },
  circle: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: 50,
    height: 1,
    borderWidth: 1,
    marginTop: 48,
  },
  circleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
};

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
        <View style={styles.circleContainer}>
          <Text>Step 1</Text>
          <View style={styles.circle}>
            <Ionicons
              name="md-shirt"
              size={24}
              color="black"
            />
          </View>
          <Text>Details</Text>
        </View>

        <View style={styles.line} />

        <View style={styles.circleContainer}>
          <Text>Step 2</Text>
          <View style={styles.circle}>
            <Ionicons
              name="md-football"
              size={24}
              color="black"
            />
          </View>
          <Text>Session</Text>
        </View>

        <View style={styles.line} />

        <View style={styles.circleContainer}>
          <Text>Step 3</Text>
          <View style={styles.circle}>
            <Ionicons
              name="md-clipboard"
              size={24}
              color="black"
            />
          </View>
          <Text>Evaluation</Text>
        </View>
      </View>
    );
  }
}

export default ProgressBar;
