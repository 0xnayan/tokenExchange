require("@nomicfoundation/hardhat-toolbox");

const fs = require("fs");
const PRIVATE_KEY = fs.readFileSync(".secret").toString().trim();

let infuraProjectID = fs.readFileSync(".infura").toString().trim();



module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "goerli",
  networks: {
    goerli: {
      chainId: 5,
      url: "https://goerli.infura.io/v3/" + infuraProjectID,
      accounts: [`0x${PRIVATE_KEY}`]
    },
  },
};
