// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
  
contract Dbank {
    address public immutable owner;
    bool private locked;
    
    constructor() {
        owner = msg.sender;
    } 

    struct Deposit {
        uint256 amount;
        string name;
        uint256 depositTime;
    }

    uint256 public constant MIN_DEPOSIT = 0.01 ether;

    mapping(address => Deposit) public deposits;
    mapping(address => uint256) private balances;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the Owner");
        _;
    }

    modifier noReentrant() {
        require(!locked, "reentrancy detected");
        locked = true;
        _;
        locked = false;
    }

    event DepositMade(address indexed user, uint256 amount);
    event MoneyWithdrawn(address indexed user, uint256 amount);
    event FundsTransfered(address indexed from, address indexed to, uint256 amount);

    receive() external payable {
        balances[msg.sender] += msg.value;
        emit DepositMade(msg.sender, msg.value);
    }    

    fallback() external payable {
        balances[msg.sender] += msg.value;
        emit DepositMade(msg.sender, msg.value);
    }

    function DepositMoney(string memory _name) public payable {
        require(msg.value >= MIN_DEPOSIT, "must deposit some balance");
        balances[msg.sender] += msg.value;
        deposits[msg.sender] = Deposit(msg.value, _name, block.timestamp);
        emit DepositMade(msg.sender, msg.value);
    }

    function withdraw(uint256 amount) external noReentrant {
        require(balances[msg.sender] >= amount, "insufficient amount");
        balances[msg.sender] -= amount;
        (bool success, ) = payable(msg.sender).call{value: amount}("");
        require(success, "Transfer failed");
        emit MoneyWithdrawn(msg.sender, amount);
    }

    function Transfer(uint256 amount, address _to) public {
        require(_to != address(0), "Invalid recipient address");
        require(balances[msg.sender] >= amount, "insufficient amount");
        
        balances[msg.sender] -= amount;
        balances[_to] += amount;
        
        (bool success, ) = payable(_to).call{value: amount}("");
        require(success, "Transfer failed");
        
        emit FundsTransfered(msg.sender, _to, amount);
    }

    function checkBalance() public view returns (uint256) {
        return balances[msg.sender];
    }
}