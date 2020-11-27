/* eslint-disable prettier/prettier */
import * as React from 'react'; //* all
import {Button, Text, View, StyleSheet} from 'react-native';

function SettingScreen({navigation}) {
  return (
    <View style={style.layoutStyle}>
      {/* <Text children="Setting Screen" /> */}
      <View style={style.buttonStyle}>
        <Button
          style={style.ButtonStyle}
          title="상세화면 재진입"
          onPress={() => navigation.push('SETTING')}
        />
        <Button title="HOME" onPress={() => navigation.navigate('HOME')} />
        <Button title="Back" onPress={() => navigation.pop('')} />
        <Button title="최초화면으로" onPress={() => navigation.popToTop()} />
      </View>
      <View style={style.mainStyle}>
        <Text children="Setting UI Layout" />
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

export default SettingScreen;
