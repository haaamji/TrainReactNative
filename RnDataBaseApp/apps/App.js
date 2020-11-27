import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const App = () => {
  return (
    <View style={style.body}>
      <Text children="Hello ReactNative!" style={style.title} />
    </View>
  );
};

const style = StyleSheet.create({
  body: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
  },
});

export default App;
