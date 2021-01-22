const fetch = require('node-fetch');

class OkexExchange {
  static async getAllOptionInfo(underlying) {
    const response = await fetch(
      `https://www.okex.com/api/option/v3/instruments/${underlying}`
    );
    return response.json();
  }
}

module.exports = OkexExchange;
