/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { Login } from './src/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigation';
import store from './src/redux/store';
import { Provider } from 'react-redux';

function App(){
  return (
    <View style={{flex:1}}>
      <StatusBar/>
      <Provider store={store}>
    <StackNavigator/>
    </Provider>
    </View>
  );
}

export default App;
