require('dotenv').config()

const OpynExchange = require('../exchanges/opyn');
const opynExchange = new OpynExchange();

opynExchange.getAllOptionInfo().then(
    res => console.log(res)
);