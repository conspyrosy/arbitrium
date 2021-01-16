require('dotenv').config()

const { ethers, BigNumber } = require('ethers');
const { wbtcPool } = require('../constants/hegic');
const HegicPriceProvider = require('../exchanges/hegic');

const provider = new ethers.providers.JsonRpcProvider(process.env.PROVIDER_URL);

const hegicPriceProvider = new HegicPriceProvider(provider);

const expiry = '1612137600';

hegicPriceProvider.getPrice(
    wbtcPool,
    BigNumber.from(expiry),
    BigNumber.from('1000000000000000000'),
    BigNumber.from('35000000000000000000000'),
    true
).then(
    res => console.log("HEGIC PRICE: " + JSON.stringify(res))
);