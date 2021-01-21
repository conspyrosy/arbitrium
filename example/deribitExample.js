require('dotenv').config()

const DeribitExchange = require('../exchanges/deribit');
const deribitExchange = new DeribitExchange();

deribitExchange.getAllOptionInfo("BTC").then(
    res => console.log(res)
);