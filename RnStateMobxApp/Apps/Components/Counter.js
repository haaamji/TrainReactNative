/* eslint-disable prettier/prettier */
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

@observer
class Counter extends Component {
  render() {
    return (
      <View style={style.outline}>
        <Text children={`Count : ${0}`} />
        <View style={style.CountButton}>
          <View style={style.buttonView}>
          <TouchableOpacity
            style={style.button}
            // onPress={() => handleIncrement(index)}
          >
            <Text children="➕" style={style.buttonText} />
          </TouchableOpacity>
          </View>
          <View style={style.buttonView}>
          <TouchableOpacity
            style={style.button}
            // onPress={() => handleDecrement(index)}>
            >
            <Text children="➖" style={style.buttonText} />
          </TouchableOpacity>
          </View>
        </View>
      </View>

    );
  }
}

const style = StyleSheet.create({
  outline: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  CountButton: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#d1b2ff',
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 5,
  },
  buttonView: {
    margin:10,
  },
  buttonText: {
    color: 'white',
  },
});


export default Counter;
