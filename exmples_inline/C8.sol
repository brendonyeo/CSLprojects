pragma solidity >=0.4.11;

contract C8 {
    uint public b;
    function f(uint x) public returns (uint r) {
      assembly{
          gasstart()
       }
       b = x; 
       assembly{
          gasstop()
       }
       r  = b;
       
    }
}
