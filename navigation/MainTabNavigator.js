import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Current Session',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-add-circle" />,
  tabBarOptions: {
    activeTintColor: '#14786B',
    style: {
      backgroundColor: '#333'
    }
  },
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Previous Sessions',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-filing" />,
  tabBarOptions: {
    activeTintColor: '#14786B',
    style: {
      backgroundColor: '#333'
    }
  },
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
});
