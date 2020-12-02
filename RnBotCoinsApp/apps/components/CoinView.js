import React, {Component} from 'react';
import {View, StyleSheet, Button, ScrollView} from 'react-native';

import axios from 'axios';

import CoinItem from './CoinItem';
import {getCoinIconUri} from '../data/constants';

const sampleData = [
  {
    "circulating_supply": 185000,
    "cmc_rank": 1,
    "data_added": '2020-12-01T00:00:00.000Z',
    "id": 1,
    "last_updated": '2020-12-01T00:00:00.000Z',
    "max_supply": 21000000,
    "name": 'Bitcoin',
    "num_market_pairs": 9550,
    "platform": null,
    "quote": [Object],
    "slug": 'bitcoin',
    "symbol": 'BTC',
    "tags": [Array],
    "total_supply": 18500,
  },
  {
    "circulating_supply": 111111,
    "cmc_rank": 2,
    "data_added": '2020-12-01T00:00:00.000Z',
    "id": 2,
    "last_updated": '2020-12-01T00:00:00.000Z',
    "max_supply": 21000000,
    "name": 'E',
    "num_market_pairs": 9550,
    "platform": null,
    "quote": [Object],
    "slug": 'bitcoin',
    "symbol": 'ETH',
    "tags": [Array],
    "total_supply": 18500,
  },
];

const client = axios.create({
  baseURL: 'https://pro-api.coinmarketcap.com',
  method: 'GET',
  headers: {
    'content-type': 'application/json',
    'X-CMC_PRO_API_KEY': 'apikey insert',
  },
});

export default class CoinView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coinData: [], //진짜 데이터 배열
      isLoading: false,
    };
  }

  componentDidMount() {
    //랜더링 후 제일 최초한번 실행
    // this.getCoinDate();
    // setInterval(() => {
    //   this.getCoinDate();
    // }, 10000); //10초마다 1000ms ->1초 10000 10초 베이직 제한
  }

  getCoinData = async () => {
    this.setState({isLoading: true});
    try {
      await client
        .get('/v1/cryptocurrency/listings/latest', {
          params: {limit: 10},
        })
        .then((res) => {
          //console.log(res);
          console.log('API조회 완료');
          this.setState({
            coinData: res.data.data,
            isLoading: false,
          });
        })
        .catch((err) => {
          console.error('getCoinData() :', err);
          alert('API조회 오류 발생,\n 관리자 문의 요망');
        });
    } catch (error) {
      console.error('getCoinData() :', error);
      alert('API오류 발생 관리자,\n 문의 요망');
    }
  };

  render() {
    let coinItems = this.state.coinData.map((item, index) => {
      const {cmc_rank, id, name, num_market_pairs, total_supply, symbol} = item; //item객체 재구성
      return (
        <CoinItem
          key={index}
          name={name}
          lank={cmc_rank}
          price={num_market_pairs}
          volumn={total_supply}
          symbol={symbol}
          iconUri={getCoinIconUri(name)}
        />
      );
    });
    return (
      <ScrollView>
        <Button title="재조회" onPress={this.getCoinData} />
        <View style={style.container}>{coinItems}</View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    flexDirection: 'column',
  },
});
