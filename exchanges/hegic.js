const { ethers } = require('ethers');
const hegicOptionsABI = require('../abi/hegic_options.json');

class HegicPriceProvider {
    constructor(provider) {
        this.provider = provider;
    }

    async getPrice(optionInfo, expiry, amount, strike, isCall) {
        const hegicOptions = new ethers.Contract(
            optionInfo.pool,
            hegicOptionsABI,
            this.provider
        );

        return await hegicOptions.fees(
            expiry,
            amount,
            strike,
            isCall ? '2' : '1'
        );
    }
}

module.exports = HegicPriceProvider;