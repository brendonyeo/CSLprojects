pragma solidity >=0.4.11;

contract BasicIncrementCounter {
  // A contract with an integer, that is set to increment.
  uint public count = 0;
  event Varlog(
    uint _temp,
    uint _count
  );

  function setCounterZero() public {
    count = 0;
  }
  
  function incrementCounterEmit(uint x) public returns (uint temp) {
    temp = x;
    count += 1;
    emit Varlog(temp, count);
  }
}
