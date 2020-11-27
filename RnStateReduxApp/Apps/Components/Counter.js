/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import PropTypes from 'prop-types';

const Counter = ({index,value,handleIncrement,handleDecrement}) => {
  return (
    <View style={style.outline}>
      <Text children={`Count : ${value.counterNum}`} />
      <View style={style.CountButton}>
        <TouchableOpacity
        style={style.button}
        onPress={() =>handleIncrement(index)}
        >
          <Text children="+" style={style.buttonText} />
        </TouchableOpacity>
        <TouchableOpacity
        style={style.button}
        onPress={() => handleDecrement(index)}>
          <Text children="-" style={style.buttonText} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
    button:{
      backgroundColor: '#d1b2ff',
      width: 40,
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
    },
});
Counter.propTypes = {
    index: PropTypes.number,
    value: PropTypes.object,
    handleIncrement: PropTypes.func,
    handleDecrement: PropTypes.func,
  };

Counter.defaultProps = {
  index: 0,
  value: {counterNum: 0},
  handleIncrement: () => console.warn('undefind handleIncrement'),
  handleDecrement: () => console.warn('undefind handleDecrement'),
  handleAddCounter: () => console.warn('undefind handleAddCounter'),
  handleRemoveCounter: () => console.warn('undefind handleRemoveCounter'),
};

export default Counter;
