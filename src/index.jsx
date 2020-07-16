import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import routes from './config/routes';

const Stack = createStackNavigator();

export function Apps() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name={routes.splash.name}
          component={routes.splash.screen}
        />
        <Stack.Screen
          name={routes.mainFlow.name}
          component={routes.mainFlow.screen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Apps;
