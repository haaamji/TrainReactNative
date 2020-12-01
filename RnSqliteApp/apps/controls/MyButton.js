/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const MyButton = (props) => {
  return (
    <TouchableOpacity
    style={style.button}
    onPress={props.onButtonClick}>
      <Text children={props.title} style={style.title} />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    backgroundColor: '#00e6ac',
    padding: 10,
    marginTop: 8,
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'center',
    borderRadius: 20,
  },
  title : {
    color:'#ffffff',
    fontSize: 19,
  },
});

export default MyButton;
