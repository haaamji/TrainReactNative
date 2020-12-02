import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

//const App = () => {
export default class CoinItem extends Component {
  //코딩량을 줄일 수 있음! 공부하세용 : 정규표현식
  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  render() {
    console.log('coinItem : ', this.props.iconUri);
    return (
      <View style={style.subContainer}>
        {/* <Image source={require('../images/bitcoin.png')} style={style.coin} /> */}
        <Image source={{uri: this.props.iconUri}} style={style.coin} />
        <View style={style.coinDtail}>
          <Text children={this.props.name} style={style.coinName} />
          <Text
            children={`vol : ${this.numberWithCommas(
              Number(this.props.volumn),
            )}`}
            style={{color: '#ffffff'}}
          />
          <Text children={this.props.price} />
          <Text children={'#' + this.props.lank} style={{fontSize: 20}} />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  subContainer: {
    flexDirection: 'row',
    width: '95.5%',
    height: 80,
    backgroundColor: '#ffccff',
    alignItems: 'center',
    // justifyContent: 'space-around',
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  coin: {
    height: 64,
    width: 64,
  },
  coinDtail: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  coinName: {
    fontSize: 20,
    width: 100,
  },
});
