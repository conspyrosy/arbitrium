const { ethers } = require('ethers');
const hegicOptionsABI = require('../abi/hegic_options.json');

class HegicPriceProvider {
    constructor(provider) {
        this.provider = provider;
    }

    /**
     * @notice Used for getting the actual options prices
     * @param period Option period in seconds (1 days <= period <= 4 weeks)
     * @param amount Option amount
     * @param strike Strike price of the option
     * @param isCall boolean to differentiate between CALL and PUT options
     */
    async getPrice(optionInfo, period, amount, strike, isCall) {
        const hegicOptions = new ethers.Contract(
            optionInfo.pool,
            hegicOptionsABI,
            this.provider
        );

        return await hegicOptions.fees(
            period,
            amount,
            strike,
            isCall ? '2' : '1'
        );
    }
}

module.exports = HegicPriceProvider;