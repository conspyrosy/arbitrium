const fetch = require('node-fetch');

class OpynExchange {
  static async getAllOptionInfo() {
    try {
      const response = await fetch(
        'https://api.thegraph.com/subgraphs/name/opynfinance/gamma-mainnet',
        {
          headers: {
            accept: '*/*',
            'content-type': 'application/json',
          },
          body:
            '{"query":"\\n  {\\n    otokens (where: {expiryTimestamp_gt: 1611255389}) {\\n      id\\n      symbol\\n      name\\n      decimals\\n      strikeAsset {\\n        id\\n        symbol\\n        decimals\\n      }\\n      underlyingAsset {\\n        id\\n        symbol\\n        decimals\\n      }\\n      collateralAsset {\\n        id\\n        symbol\\n        decimals\\n      }\\n      strikePrice\\n      isPut\\n      expiryTimestamp\\n    }\\n  }"}',
          method: 'POST',
        }
      );
      return (await response.json()).data.otokens;
    } catch (err) {
      throw new Error(
        'Something went wrong fetching Opyn options from thegraph ',
        err
      );
    }
  }
}

module.exports = OpynExchange;
