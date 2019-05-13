import {
  getCurrencyInfo,
  getCurrenciesList,
  // indexes,
} from 'libs/currency-info';
import erc20 from './currencies-gradient/erc20.svg';
import qrc20 from './currencies-gradient/qrc20.svg';

const DEFAULT_LINKS = {
  webWallet: 'https://guarda.co/app',
  android: 'https://github.com/guardaco/guarda-android-wallets',
  buy: 'https://guarda.co/buy',
  exchange: 'https://guarda.co/exchange',
  web: 'https://guarda.co/web-wallet',
  desktop: 'https://guarda.co/desktop',
};

const list = getCurrenciesList();

export default list.filter(item => item.web !== undefined || item.android !== undefined).map((item) => {
  let info = getCurrencyInfo(item.ticker);
  if (!info) {
    info = {};
  }
  if (!info.links) {
    info.links = DEFAULT_LINKS;
  }
  return Object.assign({}, item, info);
}).concat([
  {
    title: 'ERC 20 Tokens',
    ticker: '',
    icon: erc20,
    web: true,
    buy: true,
    exchange: true,
    ios: true,
    android: true,
  },
  {
    title: 'QRC20 Tokens',
    ticker: '',
    icon: qrc20,
    buy: true,
    exchange: true,
    android: false,
  },
]).sort((a, b) => (a.title > b.title ? 1 : -1));
