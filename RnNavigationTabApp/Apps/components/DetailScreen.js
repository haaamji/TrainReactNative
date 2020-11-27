/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class DetailScreen extends Component {
  render() {
    return (
    <View style={style.layout}>
        <Text children="Detail UI" style={style.text} />
    </View>
    );
  }
}

const style = StyleSheet.create({
   layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffe6e6',
   },
   text: {
    fontSize: 24,
    color: '#ff8080',
   },
});

export default DetailScreen;
