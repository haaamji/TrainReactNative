/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerActions } from 'react-navigation-drawer';

class DetailScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {clicked: true};
  }
  _checkedAnswer = () => this.setState({clicked: false});

  render() {
    return (
      <View style={style.layout}>
        <Text children="Detail UI" />
        <View style={style.Button}>
        <Button
        title="open drawer"
        onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}/>
        </View>
          <Text>오늘 점심은 ?</Text>
            {
             this.state.clicked
               ? //<Button title="정답 확인" onPress={this._checkedAnswer}/>
               <TouchableOpacity activeOpacity={0.5} onPress={this._checkedAnswer}>
               <Image source={require('../image/쿠키.png')} />
               </TouchableOpacity>
                 : <Text style={style.textStyle}>해피밀</Text>
             }
      </View>
    );
  }
}

const style = StyleSheet.create({
  layout: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  Button: {
      flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle: {
      fontSize: 18,
      marginTop: 17,
  },
});

export default DetailScreen;

