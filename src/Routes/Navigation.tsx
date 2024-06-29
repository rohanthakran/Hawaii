// In Navigation.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Splash from '../Screens/Splash';
import BottomTab from './BottomTab';
import Hula from '../Screens/Hula';
import Vulcano from '../Screens/Vulcano';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="BottomTab" component={BottomTab} />

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Hula" component={Hula} />
        <Stack.Screen name="Vulcano" component={Vulcano} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
