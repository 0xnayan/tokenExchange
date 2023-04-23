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
   Welcome to my NFT minting website! This platform allows you to mint your own non-fungible tokens on the Ethereum blockchain.
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



### Built With
Using tools:

- Solidity
- ReactJs
- Hardhat
- Metamask
- EthersJs
- Alchamy
- Tailwind CSS

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

### For localhost:
1. 1st run the hardhat node like:
 ```sh
   npx hardhat node
   ```
2. Then to deploy the contracts in localhost run
 ```sh
   npx hardhat run --network localhost scripts/deploy.js
   ```
3. Now you are ready to go for mint in the localhost network

### For goerli testnet:
1. 1st you have to store the private key in the .env file (make sure you have sufficient test eth for the gas fees).
2. Now deploy the contract to the goerli testnet like:
 ```sh
   npx hardhat run --network goerli scripts/deploy.js
   ```
3. Now you can go for mint the nfts by paying minting fee.

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
