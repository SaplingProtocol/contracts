require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
require('@openzeppelin/hardhat-defender');
require('hardhat-storage-layout');
require('solidity-docgen');
require('dotenv').config();

module.exports = {
  solidity: {
    version: "0.8.15",
    settings: {
      optimizer: {
        enabled: true,
        runs: 448
      },
    },
  },
  networks: {
    hardhat: {
      accounts: {
        mnemonic: process.env.TESTNET_MNEMONIC
      },
      allowUnlimitedContractSize: true
    },
    kovan: {
      url: "https://kovan.poa.network/",
      chainId: 42,
      gas: 5500000,
      accounts: {
        mnemonic: process.env.TESTNET_MNEMONIC
      }
    },
    optimisticKovan: {
      url: "https://kovan.optimism.io/",
      chainId: 69,
      gas: 5500000,
      accounts: {
        mnemonic: process.env.TESTNET_MNEMONIC
      }
    },
    optimistic: {
      url: "https://mainnet.optimism.io/",
      chainId: 10,
      gas: 5500000,
    },
    polygonMumbai: {
      url: "https://matic-mumbai.chainstacklabs.com/",
      chainId: 80001,
      gas: 5500000,
      accounts: {
        mnemonic: process.env.TESTNET_MNEMONIC
      }
    },
    polygon: {
      url: "https://polygon-rpc.com/",
      chainId: 137,
      gas: 5500000,
      accounts: {
        mnemonic: process.env.POLYGON_MNEMONIC
      }
    }
  },
  docgen: {
    pages: 'files',
  },
  etherscan: {
    apiKey: {
      kovan: process.env.ETHERSCAN_API_KEY,
      optimisticKovan: process.env.OPTIMISTIC_ETHERSCAN_API_KEY,
      optimisticEthereum: process.env.OPTIMISTIC_ETHERSCAN_API_KEY,
      polygonMumbai: process.env.POLYGONSCAN_API_KEY,
      polygon: process.env.POLYGONSCAN_API_KEY
    }
  },
  defender: {
    apiKey: process.env.DEFENDER_TEAM_API_KEY,
    apiSecret: process.env.DEFENDER_TEAM_API_SECRET_KEY,
  },
};
