/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
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
import Splash from './src/Screen/Splash/Splash';
import MyStack from './src/Navigation/Navigation';


function App() {
     return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}



export default App;
