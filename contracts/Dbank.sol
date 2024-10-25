// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;
  
  contract  Dbank{

    address public immutable owner;
    bool private locked;
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
    modifier  noReentrant(){
    require(!locked,"reentrancy detected");
    locked=true;
       _;
    locked=false;
}
    //events
      event DepositMade(address indexed user, uint256 amnount);
      event MoneyWithdrawn(address indexed user,uint amount);
      event FundsTransfered(address indexed from, address indexed to, uint amount);

    receive() external payable{
      emit DepositMade(msg.sender, msg.value);
      }    
     fallback() external payable{
      emit DepositMade(msg.sender, msg.value);
      }
      

    
    function  DepositMoney(string memory _name) public payable {
      require(msg.value>=MIN_DEPOSIT,"must deposit some balance");
      balances[msg.sender]+= msg.value;
      deposits[msg.sender] = Deposit(msg.value, _name,block.timestamp);
    }

    function withdraw(uint amount) external noReentrant(){
      require(balances[msg.sender]>=amount,"insuficient amount");
      payable(msg.sender).transfer(amount);
      balances[msg.sender]-=amount;
        emit  MoneyWithdrawn(msg.sender,amount);

    }

    function Transfer(uint amount,address _to) public payable{
      require(balances[msg.sender]>=amount,"insufficient amount");      
      payable(_to).transfer(amount);
      balances[msg.sender]-=amount;
      balances[_to]+=amount;
      emit FundsTransfered( msg.sender,_to,amount);

    }


    
}