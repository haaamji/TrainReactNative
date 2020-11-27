/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import CounterList from './CounterList';


const App = ({ counter, handleIncrement, handleDecrement, handleAddCounter, handleRemoveCounter }) => {
  return (
    <ScrollView style={style.scroll}>
      <View style={style.counterButton}>
        {/* <Text children="카운터 추가버튼 영역" /> */}
        <Button
          title="카운터 추가"
          color="#668cff"
          onPress={handleAddCounter}
        />
        <Text children="    " />
        <Button
          title="카운터 삭제"
          color="#cc66ff"
          onPress={handleRemoveCounter}
        />
      </View>
      <View>
        {/* <Text children="추가된 카운터 영역" /> */}
        <CounterList
          counter={counter}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement} />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  scroll: {
    flex: 1,
    width: '100%',
    backgroundColor: '#e6f2ff',
    paddingTop: '10%',
  },
  counterButton: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

App.propTypes = {
  counter: PropTypes.arrayOf(PropTypes.shape({
    counterNum: PropTypes.number,
  })),
  handleIncrement: PropTypes.func,
  handleDecrement: PropTypes.func,
    handleAddCounter: PropTypes.func,
    handleRemoveCounter: PropTypes.func,
  };

App.defaultProps = {
  counter: [],
  handleIncrement: () => console.warn('undefind handleIncrement'),
  handleDecrement: () => console.warn('undefind handleDecrement'),
  handleAddCounter: () => console.warn('undefind handleAddCounter'),
  handleRemoveCounter: () => console.warn('undefind handleRemoveCounter'),
};

export default App;
