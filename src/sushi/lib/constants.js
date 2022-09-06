import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000
export const START_REWARD_AT_BLOCK = 21038346 // TODO
export const NUMBER_BLOCKS_PER_YEAR = 10512000

export const START_NEW_POOL_AT = 1662321964 // 2022/09/04 08h06

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
  uniswapFactory: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
  uniswapFactoryV2: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
  YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
  UNIAmpl: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
  WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  UNIRouter: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
  SUSHIYCRV: '0x2C7a51A357d5739C5C74Bf3C96816849d2c9F726',
}

// TODO: change the address & set LP pool
export const contractAddresses = {
  sushi: {
    56: '0x641a6dc991a49f7be9fe3c72c5d0fbb223edb12f', // JGP token
    97: '0xEFceA9c937D8a4c91244F16dBA188C33F27A7Dba'
  },
  xSushi: {
    56: '0x538d7Dfc9913D2451bA045893d6a75cC26EbDEa5', // JGPSafe
    97: '0x5838ef045E4125aE63bE5CD9752cF007B9E82ceD'
  },
  maker: {
    56: '0xfb78b2cba733aea661bd6fae5e3a242d7c52298c',
    97: '0xefC5f524F40bda7481E0714349068c547cC9F08d'
  },
  masterChef: {
    56: '0x19EB8b0075852fEAC64CbEBe49100dE3549531D5',
    97: '0xcd2C0263f2dE95385A34741cC20f794b17e24121'
  },
  weth: {
    56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    97: '0xae13d989dac2f0debff460ac112a837c89baa7cd' // wbnb
  }
}

export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      56: '0x524DC4b2dB22761Bf4dF9cEcF5f25890865C086d',
      97: '0xfbAC427F266dcd0d963c080d9Eb1149B5dD28aeC',
    },
    tokenAddresses: {
      56: '0x524DC4b2dB22761Bf4dF9cEcF5f25890865C086d',
      97: '0xEFceA9c937D8a4c91244F16dBA188C33F27A7Dba',
    },
    token2Addresses: {
      56: '0x524DC4b2dB22761Bf4dF9cEcF5f25890865C086d',
      97: '0xae13d989dac2f0debff460ac112a837c89baa7cd'
    },
    name: 'JGP - xJGP',
    symbol: 'JGP-xJGP LP',
    symbolShort: 'JGP-xJGP',
    description: `Deposit JGP-xJGP LP Earn JGP`,
    tokenSymbol: 'JGP',
    token2Symbol: 'BUSD',
    icon: 'https://jagoanpilot.xyz/assets/128.png',
    icon2: 'https://jagoanpilot.xyz/assets/128.png',
    isHot: false,
    isNew: false,
    protocal: 'JGP',
    iconProtocal: 'https://jagoanpilot.xyz/assets/128.png',
    pairLink: 'https://https://jagoanpilot.xyz/swap/#/swap',
    addLiquidityLink: 'https://jagoanpilot.xyz/swap/#/add/0x524DC4b2dB22761Bf4dF9cEcF5f25890865C086d/0x524DC4b2dB22761Bf4dF9cEcF5f25890865C086d',
    removeLiquidityLink: 'https://jagoanpilot.xyz/swap/#/remove/0x524DC4b2dB22761Bf4dF9cEcF5f25890865C086d/0x524DC4b2dB22761Bf4dF9cEcF5f25890865C086d'
  },
  {
    pid: 1,
    lpAddresses: {
      56: '0xAd68a70cB08C2861bb8Ec2614869Bee9ac668313',
      97: '0xfbAC427F266dcd0d963c080d9Eb1149B5dD28aeC',
    },
    tokenAddresses: {
      56: '0x524DC4b2dB22761Bf4dF9cEcF5f25890865C086d',
      97: '0xEFceA9c937D8a4c91244F16dBA188C33F27A7Dba',
    },
    token2Addresses: {
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      97: '0xae13d989dac2f0debff460ac112a837c89baa7cd'
    },
    name: 'JGP - BNB',
    symbol: 'JGP-BNB LP',
    symbolShort: 'JGP-BNB',
    description: `Deposit JGP-BNB LP Earn JGP`,
    tokenSymbol: 'JGP',
    token2Symbol: 'BNB',
    icon: 'https://jagoanpilot.xyz/assets/128.png',
    icon2: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
    isHot: true,
    isNew: true,
    protocal: 'JGP',
    iconProtocal: 'https://jagoanpilot.xyz/assets/128.png',
    pairLink: 'https://jagoanpilot.xyz/swap/#/swap',
    addLiquidityLink: 'https://jagoanpilot.xyz/swap/#/add/0x524DC4b2dB22761Bf4dF9cEcF5f25890865C086d/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    removeLiquidityLink: 'https://jagoanpilot.xyz/swap/#/remove/0x524DC4b2dB22761Bf4dF9cEcF5f25890865C086d/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
  },
]
// .map(e => {
//   if (
//     ['0x239E37485B13F873ac9D5D8D7eC3C8cC1b3Ab0C7']
//     .indexOf(e.lpAddresses[97].toLowerCase()) >= 0)
//     {
//       e.isHot = false
//       e.isNew = true
//     }
//     else {
//       e.isHot = true
//       e.isNew = false
//     }

//     return e;
// })
.sort((a, b) => (a.isNew ? -1 : 1) - (b.isNew ? -1 : 1) )
