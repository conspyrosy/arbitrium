require('dotenv').config();

const DeribitExchange = require('../exchanges/deribit');

DeribitExchange.getAllOptionInfo('BTC').then((res) => console.log(res));
