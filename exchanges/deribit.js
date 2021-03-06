const fetch = require('node-fetch');

class DeribitExchange {
  static async getAllOptionInfo(instrument) {
    const response = await fetch(
      `https://www.deribit.com/api/v2/public/get_instruments?currency=${instrument}&expired=false&kind=option`
    );
    return response.json();
  }
}

module.exports = DeribitExchange;
