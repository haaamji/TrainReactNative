import React from 'react';
import {View, Text, Dimensions} from 'react-native';

import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

import HomeScreen from './cpmponents/HomeScreen';
import DetailScreen from './cpmponents/DetailScreen';
import SettingScreen from './cpmponents/SettingScreen';
import CustomDrawer from './CustomDrawer';

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {screen: HomeScreen},
    Detail: {screen: DetailScreen},
    Setting: {screen: SettingScreen},
  },
  {
    contentComponent: CustomDrawer,
    drawerWidth: Dimensions.get('window').width - 150,
  },
);
export default createAppContainer(DrawerNavigator);
