/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import HomeScreen from './components/HomeScreen';
import DetailScreen from './components/DetailScreen';
import SettingScreen from './components/SettingScreen';

import Icon from 'react-native-vector-icons/Ionicons';

const TabNavigator = createMaterialBottomTabNavigator({
  Detail: {
    screen: DetailScreen,
    navigationOptions: {
      tabBarLabel: 'Detail',
      tabBarIcon: ({tintColor}) => (
        <View>
          <Icon style={{color: tintColor}} size={25} name={'ios-search'} />
        </View>
      ),
      activeColor: '#ff6699',
      inactivateColor: '#ff6666',
      barStyle: {backgroundColor: '#fff2e6'},
    },
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => (
        <View>
          <Icon style={{color: tintColor}} size={25} name={'home'} />
        </View>
      ),
      activeColor: '#6666ff',
      inactivateColor: '#ccccff',
      barStyle: {backgroundColor: '#bb99ff'},
    },
  },
  Setting: {
    screen: SettingScreen,
    navigationOptions: {
      tabBarLabel: 'Setting',
      tabBarIcon: ({tintColor}) => (
        <View>
          <Icon style={{color: tintColor}} size={25} name={'ios-settings-outline'} />
        </View>
      ),
      activeColor: '#0099cc',
      inactivateColor: '#b3d1ff',
      barStyle: {backgroundColor: '#e6ffff'},
    },
  },
},
{
  initialRouteName: 'Home',
  animationEnabled: true,
  shifting: true,
  // swipeEnabled: true,
  showIcon: true,
  showLabel: false,
}
// {
//   defaultNavigationOptions: ({navigation}) => ({
//     swipeEnabled: true,
//     tabBarIcon: ({horizontal, tintColor}) => {
//       const {routeName} = navigation.state; // Home/Detail/Setting
//       var iconName;
//       if (routeName === 'Home') {
//         iconName = 'home';
//       } else if (routeName === 'Detail') {
//         iconName = 'appstore1';
//       } else if (routeName === 'Setting') {
//         iconName = 'setting';
//       }

//       return (
//         <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />
//       );
//     },
//   }),
  // tabBarOptions: {
  //   activeTintColor: '#ffffff',
  //   inactiveTintColor: '#a9a9a9',
  //   style: {
  //     backgroundColor: '#000000',
  //   },
  // },
//}
);

export default createAppContainer(TabNavigator);
