# Dbank DApp

This project is a decentralized bank (Dbank) application built with Solidity, React, and Hardhat. The smart contract enables users to deposit funds, transfer funds to other users, and request and claim withdrawals. The frontend interface is built with React and Vite, providing users a simple UI to interact with the contract functions.

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Project Structure](#project-structure)
6. [Smart Contract Details](#smart-contract-details)
7. [Frontend](#frontend)
8. [Backend](#backend)
9. [License](#license)

## Overview

Dbank is a Solidity-based smart contract that enables users to:

- Deposit funds and keep a record of each deposit
- Transfer funds to other users
- Request withdrawals with a specified delay time
- Claim pending withdrawals after the delay period

The frontend uses React and integrates with the smart contract to enable easy interaction for users.

## Features

- **Deposits:** Allows users to make deposits with a minimum amount requirement.
- **Withdrawals:** Users can request a withdrawal, which they can claim after a delay period.
- **Transfers:** Users can transfer funds directly to other addresses.
- **Event Logging:** Important transactions such as deposits, withdrawals, and transfers are recorded and emitted as events.

## Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) and npm
- [MetaMask](https://metamask.io/) (for wallet interactions)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/Dbank.git
   cd Dbank
   ```

2. **Backend (Hardhat):**

   Install backend dependencies:

   ```bash
   cd backend
   npm install
   ```

3. **Frontend (React/Vite):**

   Install frontend dependencies:

   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Variables**

   Create a `.env` file in the backend directory with the following (example for using Alchemy and MetaMask with Sepolia):

   ```plaintext
   ALCHEMY_API_URL="https://eth-sepolia.alchemyapi.io/v2/your-api-key"
   PRIVATE_KEY="your-private-key"
   ```

## Usage

### Start the DApp

1. **Compile the Smart Contract**:

   ```bash
   cd backend
   npx hardhat compile
   ```

2. **Deploy the Contract**:

   ```bash
   npx hardhat run scripts/deploy.js --network sepolia
   ```

   Save the contract address generated.

3. **Run the Frontend**:

   ```bash
   cd ../frontend
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```plaintext
Dbank/
├── backend/                # Contains smart contracts and Hardhat scripts
│   ├── contracts/          # Solidity contracts
│   ├── scripts/            # Deployment scripts
│   ├── test/               # Contract tests
│   ├── hardhat.config.js   # Hardhat configuration
│   └── .env                # Environment variables
├── frontend/               # Contains React application files
│   ├── public/             # Static assets
│   ├── src/                # React components and hooks
│   ├── App.js              # Main application component
│   ├── package.json        # Frontend dependencies
│   └── vite.config.js      # Vite configuration
└── README.md               # Project README
```

## Smart Contract Details

### Contract: `Dbank`

- **State Variables:**

  - `balances`: Keeps track of each user’s balance.
  - `deposits`, `withdrawals`, `transfers`: Track respective transactions.
  - `pendingPayments`: Manages pending withdrawals with delay requirements.
  - `owner`: Contract owner address.

- **Functions:**
  - `DepositMoney(string name)`: Allows users to deposit funds.
  - `Reqwithdraw(uint256 amount)`: Request a withdrawal.
  - `claimWithdraw()`: Claim a pending withdrawal after delay.
  - `TransferMoney(uint256 amount, address to)`: Transfer funds to another address.
  - `checkBalance()`, `checkPendings()`, `getAllDeposits()`, `getAllWithdraws()`, `getAllTransfers()`: View balance and transaction history.

## Frontend

The frontend is built with React, Vite, and ethers.js for interacting with the Ethereum blockchain. Key components include:

- **Wallet Connection:** Allows users to connect with MetaMask.
- **Deposit Interface:** Users can enter a deposit amount and submit.
- **Withdrawal Interface:** Users can request and claim withdrawals.
- **Transfer Interface:** Users can transfer funds to other addresses.

Dependencies include:

- `axios` for API calls.
- `ethers` for Ethereum blockchain interaction.
- `react-router-dom` for routing.
- `tailwindcss` and `daisyui` for UI styling.

### Run Frontend

```bash
cd frontend
npm run dev
```

## Backend

The backend is managed by Hardhat, which provides tools to compile, test, and deploy the smart contract. Hardhat dependencies include:

- `@nomicfoundation/hardhat-toolbox` for testing and deployment.
- `solidity-coverage` and `hardhat-gas-reporter` for coverage and gas usage.

### Run Tests

To run tests:

```bash
cd backend
npx hardhat test
```
