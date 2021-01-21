require('dotenv').config();

const { ethers } = require('ethers');

const provider = new ethers.providers.JsonRpcProvider(process.env.PROVIDER_URL);

provider.on('block', (blockNumber) => {
  console.log(`New block ${blockNumber}`);
});
