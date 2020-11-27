/* eslint-disable prettier/prettier */
import * as React from 'react'; //* all
import {Button, Text, View, StyleSheet} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={style.layoutStyle}>
      <View style={style.buttonStyle}>
        <Button
          title="상세화면"
          onPress={() => navigation.navigate('DETAIL')}
        />
        <Button
          title="설정화면"
          onPress={() => navigation.navigate('SETTING')}
        />
      </View>
      {/* UI영역 */}
      <View style={style.mainStyle}>
        <Text children="Home UI Layout" />
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

export default HomeScreen;
