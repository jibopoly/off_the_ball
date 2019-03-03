import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={ require('../assets/images/soccer.png')}
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>Off The Ball</Text>
            <Text style={styles.getStartedText}>
              The App that helps you analyse your game
            </Text>
          </View>
          <View style={{ marginTop: 50 }}>
            <View style={styles.tableRowHeading}>
              <View style={styles.tableCell}>
                <Text>Technique</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>Success</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>Fail</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCellLarge}>
                <Text>Pass</Text>
              </View>
              <View style={styles.tableCellLarge}>
                <Text></Text>
              </View>
              <View style={styles.tableCellLarge}>
                <Text></Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCellLarge}>
                <Text>Shoot</Text>
              </View>
              <View style={styles.tableCellLarge}>
                <Text></Text>
              </View>
              <View style={styles.tableCellLarge}>
                <Text></Text>
              </View>
            </View>
            <View style={styles.tableRowBottom}>
              <View style={styles.tableCellLarge}>
                <Text>Tackle</Text>
              </View>
              <View style={styles.tableCellLarge}>
                <Text></Text>
              </View>
              <View style={styles.tableCellLarge}>
                <Text></Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  tableRow: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    borderWidth: 1 ,
    borderBottomWidth: 0,
  },
  tableRowHeading: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    borderWidth: 1 ,
    borderBottomWidth: 0,
    backgroundColor: '#d3d3d3'
  },
  tableRowBottom: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    borderWidth: 1 
  },
  tableCell: {
    borderRightWidth: 1, 
    padding: 10, 
    flex: 1
  },
  tableCellLarge: {
    borderRightWidth: 1, 
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    flex: 1
  }
});
