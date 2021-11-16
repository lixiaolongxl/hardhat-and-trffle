// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Migrations {
  address public owner = msg.sender;
  uint public last_completed_migration;
  string public name ;
  event HandlesetName(address bidders,string name); // 事件
  modifier restricted() {
    require(
      msg.sender == owner,
      "This function is restricted to the contract's owner"
    );
    _;
  }
  function setname(string memory  _name) public {
    name  = _name;
    emit HandlesetName(msg.sender, _name);
  }
  function getname() public view returns(string memory){
    return name ;
  }
  function setCompleted(uint  completed) public restricted {
    last_completed_migration = completed;
  }
  function getCompleted() public view returns(uint){
    return last_completed_migration;
  }
  function setCompleted1(uint completed) public {
    last_completed_migration = completed;
  }
  function getissender() public view returns(bool){
    if(msg.sender == owner){
      return true;
    }else {
      return false;
    }
  }
}
