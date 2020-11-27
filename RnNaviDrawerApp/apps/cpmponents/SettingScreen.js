/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';

class SettingScreen extends Component {
  render() {
    return (
      <View style={style.layout}>
        <Text children="Setting UI" />
        <View style={style.Button}>
        <Button
        color="#ffe6cc"
        title="open drawer"
        onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}/>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  layout: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#ffe6e6',
  },
  Button: {
      flexDirection: 'row',
  },
});

export default SettingScreen;

