# Dbank - A Decentralized Banking Smart Contract

## Overview

Dbank is a decentralized banking smart contract built on the Ethereum blockchain. It allows users to deposit Ether, withdraw funds, and transfer money between accounts, all while adhering to Islamic banking principles by avoiding interest. The contract implements features for managing user deposits and transfers securely, including anti-reentrancy protection.

## Features

- **Deposit Funds**: Users can deposit Ether into their account with a minimum deposit requirement.
- **Withdraw Funds**: Users can withdraw Ether from their balance.
- **Transfer Funds**: Users can transfer Ether to other users seamlessly.
- **Anti-Reentrancy Protection**: Implemented to safeguard against reentrancy attacks.
- **Events Logging**: Events are emitted for deposits, withdrawals, and transfers for transparency.

## Smart Contract Details

### Contract: Dbank

- **Owner**: The contract owner, who deploys the contract.
- **Deposits**: Users can make deposits by sending Ether to the contract.
- **Withdrawals**: Users can withdraw their deposited funds.
- **Transfers**: Users can send Ether to other addresses.

### Data Structures

- **Deposit Struct**: Holds information about user deposits, including amount, name, and deposit time.
- **Mappings**:
  - `deposits`: Maps user addresses to their deposit information.
  - `balances`: Maps user addresses to their current balances.

### Events

- `DepositMade`: Emitted when a deposit is made.
- `MoneyWithdrawn`: Emitted when money is withdrawn.
- `FundsTransfered`: Emitted when funds are transferred between users.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/dbank.git
   cd dbank
   ```
2. Install dependencies (if using Hardhat):
   ```bash
   npm install
   ```

## Testing

To test the smart contract using Ganache, follow these steps:

1. Start Ganache and create a new workspace.
2. Deploy the smart contract using Hardhat:
   ```bash
   npx hardhat run scripts/deploy.js --network ganache
   ```
3. Run the tests:
   ```bash
   npx hardhat test
   ```

## Usage

1. **Deposit Ether**:

   ```solidity
   dbank.DepositMoney("YourName") payable
   ```

2. **Withdraw Ether**:

   ```solidity
   dbank.withdraw(amount)
   ```

3. **Transfer Ether**:
   ```solidity
   dbank.Transfer(amount, recipientAddress)
   ```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or fixes.

## License

This project is licensed under the MIT License.

### Customization

- Update the repository link with your actual GitHub repository.
- Adjust the usage examples based on how you want users to interact with your contract.
- Feel free to add more sections like a changelog or acknowledgments as needed.

Let me know if you need further modifications or additional information!

```

```

```

```
