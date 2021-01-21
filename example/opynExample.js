require('dotenv').config();

const OpynExchange = require('../exchanges/opyn');

OpynExchange.getAllOptionInfo().then((res) => console.log(res));
