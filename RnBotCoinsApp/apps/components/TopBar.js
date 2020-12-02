import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

//const App = () => {
export default class TopBar extends Component {
  render() {
    return (
      <View style={style.container}>
        <View>
          <Text children={this.props.title} style={style.title} />
          <Text children={this.props.refreshDate} style={style.date} />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    height: 52,
    alignSelf: 'stretch',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#006699',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  date: {
    fontSize: 10,
    color: '#ffffff',
  },
});

//export default App;
