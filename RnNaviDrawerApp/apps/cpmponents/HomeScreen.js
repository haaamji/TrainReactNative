/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';

class HomeScreen extends Component {
  render() {
    return (
      <View style={style.layout}>
        <Text children="Home UI" />
        <View style={style.Button}>
        <View style={{margin:10}}>
        <Button
        title="open drawer"
        onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}/>
       </View>
       <View>
        <Button
        title="toggle drawer"
        color="#4dc3ff"
        onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
        </View>
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
        backgroundColor:'#cce6ff',
    },
    Button: {
        flexDirection: 'row',
    },
});

export default HomeScreen;
