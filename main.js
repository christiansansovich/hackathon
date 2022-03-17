//https://github.com/cocosans/hackathon

// https://github.com/coinapi/coinapi-sdk/tree/master/data-api/javascript-rest

//API Keys
const endpointURL = 'https://paper-api.alpaca.markets'
const publicKey = 'PKWTIN11GNGTFGCT7XR4'
const privateKey = 'mbOvSrkIDmIESSLKIfDh6xwiavc7Wtdh5z7pFeu1'
const headers = {'APCA-API-KEY-ID': publicKey, 'APCA-API-SECRET-KEY' : privateKey}


//API endpoints
const cryptoMarketData = '/v1beta1/crypto';

//https://www.youtube.com/watch?v=GsGeLHTOGAg

//how to submit trades - https://www.youtube.com/watch?v=jzIJ-0rDvCo

/**
 * @param {Number} coin - Number of coins to purchase
 * @param {Number} amount - Amount to use
 * @param {String} curr -  USD or coin of choice
 */

function buy(coin, amount, curr) {
  
}
//taking some time to plan out the design. Lmk if you have some cool ideas
// will do - did you see my slack? need terminal access to test console logs + quokka
//responded in slack - gotchu

let resultURL = endpointURL + cryptoMarketData;

function get(coinType) {
  const resultURL = endpointURL + cryptoMarketData;
  const streamURL = 'wss://stream.data.alpaca.markets/v1beta1/crypto';

  const listener = new WebSocket(streamURL);
  console.log(listener.readyState);

  listener.addEventListener('message', initialHandshake);

  function initialHandshake(msg) {
    outputMsg(msg);

    this.send(`{"action":"auth","key":"${publicKey}","secret":"${privateKey}"}`)

    this.addEventListener('open', outputMsg);
  }

  function outputMsg(msg) {
    const output = msg.json();

    for (let element of output) {
      console.log(element.t)
      console.log(element.msg);
    }
  }
  
  
  
  function dataImport() {
    fetch(resultURL, {
      'method' : 'GET',
      'headers' : headers
    }).then((data) => {
      console.log(data);
    }
    );
  }
  
}


/**
 * buy
 *  -top 5 coins 
 *     -BTC Bitcoin
 *     -ETH Etherium
 *     -USDT Tether
 *     -BNB Binance Coin
 *     -USDC U.S. Dollar Coin 
 *  -either dollars or # of coins
 * 
 * get price of coins
 *  -input type of coin
 *  -output coin price
 * 
 * 
 * 
 * stretch:
 * sell
 *  -either dollars or # of coins
 * 
 */