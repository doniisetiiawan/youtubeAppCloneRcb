import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import mainnavigator from './config/mainnavigator';

const Tab = createBottomTabNavigator();

function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={mainnavigator.home.name}
        component={mainnavigator.home.screen}
      />
      <Tab.Screen
        name={mainnavigator.trending.name}
        component={mainnavigator.trending.screen}
      />
      <Tab.Screen
        name={mainnavigator.subscriptions.name}
        component={mainnavigator.subscriptions.screen}
      />
      <Tab.Screen
        name={mainnavigator.activity.name}
        component={mainnavigator.activity.screen}
      />
      <Tab.Screen
        name={mainnavigator.library.name}
        component={mainnavigator.library.screen}
      />
    </Tab.Navigator>
  );
}

export default MainNavigator;
