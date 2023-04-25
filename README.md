# tokenExchange



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project


  <p align="center">
   A web3 token exchange project is a decentralized platform for trading various types of tokens that leverages the power of blockchain technology and web3 protocols.
    <br />
    <br />
    <div align="center">
    <img src="https://github.com/0xnayan/tokenExchange/blob/master/token.png" alt="Logo" >
    </a>
    <br/>
    <br/>
    <a href="https://cool-meadow-8598.on.fleek.co/">View Demo</a>
    ·
    <a href="https://github.com/0xnayan/tokenExchange/issues">Report Bug</a>
  </p>
</div>
</br>
<p>The exchange is designed to be secure, transparent, and immutable, ensuring that all transactions are executed in a decentralized manner. Users can connect their Ethereum wallets to the platform and trade tokens directly with other users without the need for an intermediary. The platform uses smart contracts to facilitate the exchange of tokens, with each contract representing a specific token or trading pair. Smart contracts automatically execute trades based on predefined rules, ensuring that all transactions are conducted fairly and securely.

Users can place buy or sell orders for tokens, which are matched with corresponding orders in the order book. Once a match is found, the trade is executed and the tokens are exchanged between the two parties. The exchange charges a small fee for each trade, which is paid in the platform's native token.
The platform also includes various features to enhance the trading experience, such as order book visualization, price charts, and real-time market data. Additionally, users can participate in liquidity pools to earn rewards for providing liquidity to the platform.
(Currently this site is running on goerli testnet only if you want to run it on eth mainnet then a slight change will occure)
</p>

### Built With
Using tools:

- Solidity
- ReactJs
- React redux
- Hardhat
- Metamask
- EthersJs
- Alchamy
- Chai

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Before you can start using the tokenExchange project, you need to have the following tools installed in your computer:
- Node.js
- Hardhat framework


### Installation

Required steps for installing the project:

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Open a terminal and navigate to the project directory.
3. Install the project dependencies
   ```sh
   npm install
   ```

<!-- USAGE EXAMPLES -->
## Usage
### Testing the contracts
 ```sh
   npx hardhat test
   ```
By doing this test you will able to know whether the contracts work properly or not.

### For localhost:
1. 1st run the hardhat node like:
 ```sh
   npx hardhat node
   ```
2. Then to deploy the contracts in localhost run
 ```sh
   npx hardhat run --network localhost scripts/1_deploy.js
   npx hardhat run --network localhost scripts/2_seed-exchange.js
   ```
3. Now you can view the website like
 ```sh
   npm run start
   ```
4. Now make some transactions to see how the exchange work.
### For goerli testnet:
1. 1st you have to store the private key in the .secret file (make sure you have sufficient test eth for the gas fees) also put the infura key in .infura file
(this 2 files must be in .gitignore file)
2. Now deploy the contract to the goerli testnet like:
 ```sh
   npx hardhat run --network goerli scripts/1_deploy.js
   npx hardhat run --network goerli scripts/2_seed-exchange.js
   ```
3. Now you are all set to make order, fill order and all other transaction.

<!-- CONTRIBUTING -->
## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- CONTACT -->
## Contact

- borahnayanmoni80@gmail.com
