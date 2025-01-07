
export interface Token {
  id: number,
  src: string,
  title: string,
  subTitle: string,
  price: number,
  hour: number,
  day: number,
  FDV: number,
  volume: number
}
 
export const arrToken: Token[] = [
  { id : 1, src : "/img/tokens/eth.png", title : "Ethereum", subTitle : "ETH", price : 2520.27, hour : 0.02, day : 2.54, FDV : 7.4, volume : 519 },
  { id : 2, src : "/img/tokens/1inch.png", title : "1inch", subTitle : "1INCH", price : 23.21, hour : 0.43, day : 24.54, FDV : 7.4, volume : 23434 },
  { id : 3, src : "/img/tokens/aave.png", title : "Aave", subTitle : "AAVE"  , price : 3.53, hour : 0.33, day : 3.44, FDV : 7.4, volume : 2352},
  { id : 4, src : "/img/tokens/aioz.png", title : "AIOZ Network", subTitle : "AIOZ" , price : 234.23, hour : 0.90, day : 4.53, FDV : 7.4, volume : 123415},
  { id : 5, src : "/img/tokens/aleph.png", title : "Aleph.im", subTitle : "ALEPH", price : 250.94, hour : 1.02, day : 2.52, FDV : 7.4, volume : 1241},
  { id : 6, src : "/img/tokens/ape.jpg", title : "ApeCoin", subTitle : "APE" , price : 33.3, hour : 2.02, day : 23.55, FDV : 7.4, volume : 675},
  { id : 7, src : "/img/tokens/api3.jpg", title : "API3", subTitle : "API3" , price : 2332.22, hour : 5.01, day : 12.54, FDV : 7.4, volume : 506},
  { id : 8, src : "/img/tokens/arb.jpg", title : "Arbitrum", subTitle : "ARB" , price : 35.22, hour : 15.01, day : 5.3, FDV : 7.4, volume : 576},
  { id : 9, src : "/img/tokens/arkm.png", title : "Arkham", subTitle : "ARKM" , price : 24.22, hour : 54.01, day : 4.45, FDV : 7.4, volume : 85},
  { id : 10, src : "/img/tokens/ali.png", title : "Artificial Liquid Intelligence", subTitle : "ALI" , price : 143.22, hour : 35.01, day : 23.4, FDV : 7.4, volume : 68},
  { id : 11, src : "/img/tokens/fet.png", title : "Artificial Superintelligence Alliance", subTitle : "FET" , price : 35.22, hour : 55.01, day : 4.23, FDV : 7.4, volume : 68},
  { id : 12, src : "/img/tokens/audio.png", title : "Audius", subTitle : "AUDIO" , price : 235.22, hour : 51.3, day : 52.1, FDV : 7.4, volume : 68},
  { id : 13, src : "/img/tokens/axl.jpeg", title : "Axelar", subTitle : "AXL" , price : 2.22, hour : 5.1, day : 12.54, FDV : 7.4, volume : 865},
  { id : 14, src : "/img/tokens/badger.jpg", title : "Badger", subTitle : "BADGER" , price : 3.22, hour : 3.01, day : 34.21, FDV : 7.4, volume : 564},
  { id : 15, src : "/img/tokens/beam.png", title : "Beam", subTitle : "BEAM" , price : 143.22, hour : 35.01, day : 23.4, FDV : 7.4, volume : 7},
  { id : 16, src : "/img/tokens/boba.png", title : "Boba Network", subTitle : "BOBA" , price : 35.22, hour : 15.01, day : 5.3, FDV : 7.4, volume : 74},
  { id : 17, src : "/img/tokens/link.png", title : "Chainlink", subTitle : "LINK" , price : 2.22, hour : 5.1, day : 12.54, FDV : 7.4, volume : 567},
  { id : 18, src : "/img/tokens/cpool.jpeg", title : "Clearpool", subTitle : "cpool" , price : 2332.22, hour : 5.01, day : 12.54, FDV : 7.4, volume : 69},
  { id : 19, src : "/img/tokens/zrx.png", title : "0x Protocol", subTitle : "ZRX" , price : 35.22, hour : 15.01, day : 5.3, FDV : 7.4, volume : 678},
  { id : 20, src : "/img/tokens/usdc.png", title : "USDC", subTitle : "USDC" , price : 143.22, hour : 35.01, day : 23.4, FDV : 7.4, volume : 7},
  { id : 21, src : "/img/tokens/usdt.png", title : "Tether", subTitle : "USDT" , price : 2.22, hour : 5.1, day : 12.54, FDV : 7.4, volume : 567},
  { id : 22, src : "/img/tokens/dai.png", title : "Dai", subTitle : "DAI" , price : 24.22, hour : 54.01, day : 4.45, FDV : 7.4, volume : 85},
  { id : 23, src : "/img/tokens/frax.png", title : "Frax", subTitle : "FRAX" , price : 2520.27, hour : 0.02, day : 2.54, FDV : 7.4, volume : 519 },
  { id : 24, src : "/img/tokens/link.png", title : "SOL(Wormhole)", subTitle : "SOL" , price : 143.22, hour : 35.01, day : 23.4, FDV : 7.4, volume : 7},
  { id : 25, src : "/img/tokens/wbtc.png", title : "Wrapped Bitcoin", subTitle : "WBTC" , price : 143.22, hour : 35.01, day : 23.4, FDV : 7.4, volume : 7},
]

export interface Pool {
  id: number;
  tokenOne: number;
  tokenTwo: number;
  rate: number;
  transaction : number,
  tvl: number,
  oneday: number,
  sevenday: number,
  apr: number

}

export const arrPool: Pool[] = [
  { id : 1, tokenOne : 25, tokenTwo : 1, rate: 0.3, transaction : 2520.27, tvl : 0.02, oneday : 2.54, sevenday : 519.4, apr : 0.001},
  { id : 2, tokenOne : 20, tokenTwo : 1, rate: 0.1, transaction : 23.21, tvl : 0.43, oneday : 24.54, sevenday : 234.4, apr : 0.021},
  { id : 3, tokenOne : 22, tokenTwo : 20, rate: 0.3, transaction : 3.53, tvl : 0.33, oneday : 3.44, sevenday : 2352.4, apr : 0.033},
  { id : 4, tokenOne : 1, tokenTwo : 20, rate: 0.05, transaction : 234.23, tvl : 0.90, oneday : 4.53, sevenday : 123.4, apr : 0.025},
  { id : 5, tokenOne : 25, tokenTwo : 3, rate: 0.1 , transaction : 250.94, tvl : 1.02, oneday : 2.52, sevenday : 41.4, apr : 0.032},
  { id : 6, tokenOne : 4, tokenTwo : 6, rate: 0.05, transaction : 33.3, tvl : 2.02, oneday : 23.55, sevenday : 236.4, apr : 0.029},
  { id : 7, tokenOne : 5, tokenTwo : 7, rate: 0.5, transaction : 2332.22, tvl : 5.01, oneday : 12.54, sevenday : 23.4, apr : 0.022},
  { id : 8, tokenOne : 8, tokenTwo : 9, rate: 0.03 , transaction : 35.22, tvl : 15.01, oneday : 5.3, sevenday : 235.4, apr : 0.008},
  { id : 9, tokenOne : 9, tokenTwo : 10, rate: 0.5, transaction : 24.22, tvl : 54.01, oneday : 4.45, sevenday : 354.4, apr : 0.003},
  { id : 10, tokenOne : 22, tokenTwo : 11, rate: 0.3, transaction : 143.22, tvl : 35.01, oneday : 23.4, sevenday : 23.4, apr : 0.031},
  { id : 11, tokenOne : 13, tokenTwo : 4, rate: 0.3, transaction : 35.22, tvl : 55.01, oneday : 4.23, sevenday : 54.4, apr : 0.004},
  { id : 12, tokenOne : 3, tokenTwo : 6, rate: 0.5, transaction : 235.22, tvl : 51.3, oneday : 52.1, sevenday : 417.4, apr : 0.044},
  { id : 13, tokenOne : 8, tokenTwo : 10, rate: 0.03, transaction : 2.22, tvl : 5.1, oneday : 12.54, sevenday : 52.4, apr : 0.034},
  { id : 14, tokenOne : 25, tokenTwo : 21, rate: 0.01, transaction : 3.22, tvl : 3.01, oneday : 34.21, sevenday : 987.4, apr : 0.085},
  { id : 15, tokenOne : 6, tokenTwo : 8, rate: 0.5, transaction : 235232.22, tvl : 5.01, oneday : 12.2, sevenday : 37.4, apr : 0.002},

]