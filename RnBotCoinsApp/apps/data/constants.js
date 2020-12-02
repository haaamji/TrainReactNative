/* eslint-disable prettier/prettier */
export function getCoinIconUri(coinName) {
    switch (coinName) {
        case 'Bitcoin':
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/btc@2x.png?raw=true';
        case 'Ethereum':
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/eth@2x.png?raw=true';
        case 'XRP':
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/xrp@2x.png?raw=true';
        case 'EOS':
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/eos@2x.png?raw=true';
        case 'Bitcoin Cash': //BCH
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/bch@2x.png?raw=true';
        case 'Litecoin'://LCT
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/ltc@2x.png?raw=true';
        case 'Tether': //USDT LINK ADA DOT
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/usdt@2x.png?raw=true';
        case 'Chainlink':
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/link@2x.png?raw=true';
        case 'Cardano':
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/ada@2x.png?raw=true';
        case 'Polkadot':
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/dot@2x.png?raw=true';
        default:
            return 'https://icon-icons.com/icons2/1385/PNG/48/generic-crypto-cryptocurrency-cryptocurrencies-cash-money-bank-payment_95340.png';
    }
}
