/* eslint-disable prettier/prettier */
import * as React from 'react'; //* all
import {Button, Text, View, StyleSheet} from 'react-native';

function DetailScreen({navigation}) {
  return (
    <View style={style.layoutStyle}>
      {/* <Text children="Detail Screen" /> */}
      <View style={style.buttonStyle}>
        <Button
          title="상세화면 재진입"
          onPress={() => navigation.push('DETAIL')}
        />
        <Button title="HOME" onPress={() => navigation.navigate('HOME')} />
        {/* Stack으로 계속 쌓여있어서 누른 만큼 눌러야 함 */}
        <Button title="Back" onPress={() => navigation.goBack('')} />
        {/* 몇번 stack push된지 모를 때 stack전부 날리기 : popToTop */}
        <Button title="최초화면으로" onPress={() => navigation.popToTop('')} />
      </View>
      <View style={style.mainStyle}>
        <Text children="Detail UI Layout" />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  buttonStyle: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
  },
  layoutStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  mainStyle: {
    backgroundColor: '#e6e6ff',
    flex: 1,
  },
});

export default DetailScreen;
