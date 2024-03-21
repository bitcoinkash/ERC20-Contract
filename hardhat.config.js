/** @type import('hardhat/config').HardhatUserConfig */

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;


module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "sepolia",
  networks: {
      hardhat: {},
      sepolia: {
         url: API_URL,
         chainId:11155111,
         accounts: [`0x${PRIVATE_KEY}`]
      }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API_KEY
  }
};


//0xe2f139B27E82bd3E1446edB0495AB4e353D8F939