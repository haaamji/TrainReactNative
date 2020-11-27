/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class SettingScreen extends Component {
  render() {
    return (
    <View style={style.layout}>
        <Text children="Setting UI" style={style.text} />
    </View>
    );
  }
}

const style = StyleSheet.create({
   layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c6ecc6',
   },
   text: {
    fontSize: 24,
    color: '#4d4d00',
   },
});

export default SettingScreen;
