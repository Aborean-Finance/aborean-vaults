import * as dotenv from "dotenv";
import "@matterlabs/hardhat-zksync";
import "@matterlabs/hardhat-zksync-solc";
import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-verify";
import "@matterlabs/hardhat-zksync-ethers";
import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-verify";
import "hardhat-deploy";
import "@nomicfoundation/hardhat-toolbox";
import "@typechain/hardhat";

dotenv.config();

const {
  PRIVATE_KEY_DEPLOY,
  ABSTRACT_MAINNET_API_KEY,
} = process.env;

const deployerAccounts =
  PRIVATE_KEY_DEPLOY && PRIVATE_KEY_DEPLOY.length > 0
    ? [PRIVATE_KEY_DEPLOY]
    : [];

export default {
  defaultNetwork: "abstractTestnet",
  networks: {
    hardhat: {
      zksync: false,
    },
    abstractTestnet: {
      url: "https://api.testnet.abs.xyz",
      ethNetwork: "sepolia",
      zksync: true,
      chainId: 11124,
      accounts: process.env.PRIVATE_KEY_DEPLOY ? [process.env.PRIVATE_KEY_DEPLOY] : [],
      // verify: {
      //   etherscan: {
      //     apiKey: process.env.ABSTRACT_TESTNET_API_KEY || "",
      //   },
      // },
    },
    abstractMainnet: {
      url: "https://api.mainnet.abs.xyz",
      ethNetwork: "mainnet",
      zksync: true,
      chainId: 2741,
      verifyURL: "https://api-explorer-verify.mainnet.abs.xyz/contract_verification",
      enableVerifyURL: true,
      accounts: process.env.PRIVATE_KEY_DEPLOY ? [process.env.PRIVATE_KEY_DEPLOY] : [],
      // verify: {
      //   etherscan: {
      //     apiKey: process.env.ABSTRACT_MAINNET_API_KEY || "",
      //   },
      // },
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.19",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.20",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.22",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },

        },
      },
    ]
  },
  zksolc: {
    version: "1.5.15",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      suppressedErrors: ["sendtransfer"],
      suppressedWarnings: ["txorigin", "assemblycreate"],
      codegen: "yul",
    },
  },
  tenderly: {
    username: "velodrome-finance",
    project: "v2",
    privateVerification: false,
  },
  paths: {
    sources: "./src",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  typechain: {
    outDir: "artifacts/types",
    target: "ethers-v6",
  },
  etherscan: {
    apiKey: process.env.ABSTRACT_MAINNET_API_KEY || "",

    customChains: [
      {
        network: "abstractTestnet",
        chainId: 11124,
        urls: {
          apiURL: "https://api-sepolia.abscan.org/api",
          browserURL: "https://sepolia.abscan.org",
        },
      },
      {
        network: "abstractMainnet",
        chainId: 2741,
        urls: {
          apiURL: 'https://api.etherscan.io/v2/api',
          browserURL: "https://abscan.org/",
        },
      },
    ],
  },
};
