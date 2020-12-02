import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import CoinView from './components/CoinView';
import TopBar from './components/TopBar';

//const App = () => {
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Realtime BitCoin',
      refreshDate: '-',
    };
  }

  componentDidMount() {
    const now = new Date().toLocaleString();
    this.setState({refreshDate: now});
  }

  render() {
    return (
      <View style={style.container}>
        <TopBar title={this.state.title} refreshDate={this.state.refreshDate} />
        <CoinView />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#e6e6ff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

//export default App;
