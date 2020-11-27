/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
    <View style={style.layout}>
        <Text children="Home UI" style={style.text} />
    </View>
    );
  }
}

const style = StyleSheet.create({
   layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e6e6ff',
   },
   text: {
    fontSize: 24,
    color: '#6666ff',
   },
});

export default HomeScreen;
