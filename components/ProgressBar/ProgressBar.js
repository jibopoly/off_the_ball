import React from 'react';
import { View, Text } from 'react-native';


const styles = {
  circle: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 1,
  },
  line: {
    width: 50,
    height: 1,
    borderWidth: 1,
    marginTop: 46,
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
      <View style={{ flexDirection: 'row', paddingTop: 20, justifyContent: 'center' }}>

        <View style={{ flexDirection: 'column', borderWidth: 1, alignItems: 'center' }}>
          <Text>Step 1</Text>
          <View style={styles.circle} />
          <Text>Step 1</Text>
        </View>

        <View style={styles.line} />
        <View style={{ flexDirection: 'column', borderWidth: 1, alignItems: 'center' }}>
          <Text>Step 1</Text>
          <View style={styles.circle} />
          <Text>Step 1</Text>
        </View>

        <View style={styles.line} />

        <View style={{ flexDirection: 'column', borderWidth: 1, alignItems: 'center' }}>
          <Text>Step 1</Text>
          <View style={styles.circle} />
          <Text>Step 1</Text>
        </View>

      </View>
    );
  }
}

export default ProgressBar;
