import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import CounterListContainer from './Containers/CounterListContainer';

//상태관리

function App() {
  return (
    <ScrollView style={style.appContainer}>
      <CounterListContainer />
    </ScrollView>
  );
}

const style = StyleSheet.create({
  appContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffd9b3',
    paddingTop: '10%',
  },
});

export default App;
