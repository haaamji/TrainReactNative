/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
import {observer} from 'mobx-react';

import Counter from '../Components/Counter';
import CounterStore from '../store/CounterStore';

@observer
class CounterListContainer extends Component {
    render() {
      return (
        <View>
          <View style={style.counterButton}>
            <Button
            title="카운터 추가"
            color="#668cff"
            onPress={CounterStore.handleAddCounter}
            />
            <Text children="    " />
            <Button
            title="카운터 삭제"
            color="#cc66ff"
            onPress={CounterStore.handleRemoveCounter}
            />
          </View>
          <View>
            {CounterStore.counter.map((item,index) => (
              <Counter key={index} index={index} value={item}/>
            ))}
          </View>
        </View>
      );
    }
  }

const style = StyleSheet.create({
  counterButton: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default CounterListContainer;
