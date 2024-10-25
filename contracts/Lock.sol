// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
  
  contract abstract Dbank{

    address public immutable owner;
    constructor(){
      owner=msg.sender;
    } 
    struct Deposit{
      uint256 amount;
      string name;
      uint256 depositTime;
    }
    uint256 public constant MIN_DEPOSIT=0.01 ether;

    mapping(address=>Deposit) public deposits;
    mapping (address=>uint) balances;

    modifier onlyOwner(){
      require(msg.sender==owner,"Not the Owner");
      _;
    }
    receive() virtual external payable;
    //events
      event DepositMade(address indexed user, uint256 amnount);
      event MoneyWithdrawn(address indexed user,uint amount);
      event FundsTransfered(address indexed from, address indexed to, uint amount);

    function  DepositMoney(string memory _name) public payable {
      require(msg.value>=MIN_DEPOSIT,"must deposit some balance");
      balances[msg.sender]+= msg.value;
      deposits[msg.sender] = Deposit(balance,_name,block.timestamp);
    }

    function withdraw(uint amount) external{
      require(balances[msg.sender]>=amount,"insuficient amount");
      payable(msg.sender).transfer(amount);
      balances[msg.sender]-=amount;
    }

    function Transfer(uint amount,address _to) public payable{
      require(balances[msg.sender]>=amount,"insufficient amount");
    }


    
}