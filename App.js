import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './app/src/views/screens/Home/Home'
import Categories from './app/src/views/screens/Categories/Categories'


const Stack = createNativeStackNavigator();
function MainNavigator() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="Categories"
            component={Categories}
            options={{ headerShown: false }}
          />
          
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default MainNavigator;
