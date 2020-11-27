import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react'; //* all
// import {Button, Text, View, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './components/HomeScreen';
import DetailScreen from './components/DetailScreen';
import SettingScreen from './components/SettingScreen';

const MyStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MyStack.Navigator initialRouteName="HOME">
        <MyStack.Screen name="HOME" component={HomeScreen} />
        <MyStack.Screen name="DETAIL" component={DetailScreen} />
        <MyStack.Screen name="SETTING" component={SettingScreen} />
      </MyStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
