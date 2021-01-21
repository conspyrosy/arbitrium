require('dotenv').config();

const { ethers, BigNumber } = require('ethers');
const { wbtcPool } = require('../constants/hegic');
const HegicExchange = require('../exchanges/hegic');

const provider = new ethers.providers.JsonRpcProvider(process.env.PROVIDER_URL);

const hegicExchange = new HegicExchange(provider);

const period = 3600 * 24 * 7; // 1 week in seconds

hegicExchange.getPrice(
    wbtcPool,
    BigNumber.from(period),
    BigNumber.from(10 ** wbtcPool.decimals),
    BigNumber.from(35000 * 10 ** wbtcPool.decimals),
    true
).then((res) => console.log(`HEGIC PRICE: ${res}`));
