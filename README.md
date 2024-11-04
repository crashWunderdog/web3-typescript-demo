# [WIP] Web3 dApp Coin Toss Demo

## Overview

This project is a simple coin toss game where users can try to guess the end result of a coin toss to win some tokens. It is built using Next.js, Tailwind CSS, and TypeScript. The project demonstrates how to build a Web3 decentralized application (dApp) that interacts with the Ethereum blockchain.

## Features

- **User Authentication**: Connect your wallet using popular wallet providers.
- **Coin toss Game**: A UI for creating bets & seeing bet history for the connected Web3 wallet.
- **Blockchain Integration**: This project demonstrates how to request transactions from the users and how to transfer payouts. All transactions are done on the Sepolia testnet.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and generating static websites (NextJs 15).
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **TypeScript**: A statically typed superset of JavaScript.
- **Web3.js**: A JavaScript library for interacting with the Ethereum blockchain.
- **Wagmi**: React hooks library for Ethereum.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MetaMask or any other Ethereum wallet

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/crashWunderdog/web3-typescript-demo.git
   cd web3-typescript-demo

2. Install dependencies:

pnpm install

3. Create a .env.local file in the root directory and add your environment variables (check .env.example)

4. Run the development server:

pnpm dev

5. Open http://localhost:3000 with your browser to see the result.

## Usage
1. Connect your Ethereum wallet using the "Connect Wallet" button.
2. Fill the form to create a new bet.
3. Check the history and see if you win!
4. Claim your price & play again



## License
This project is licensed under the MIT License.


## Links: 
List of all available chains: https://wagmi.sh/react/api/chains

https://nextjs.org/learn/dashboard-app

https://cloud.reown.com/

https://docs.reown.com/appkit/next/core/components

https://wagmi.sh/react/guides/connect-wallet

Testnet tokens:
https://faucets.chain.link/sepolia
