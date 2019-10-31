pragma solidity >=0.4.11;

contract C6 {
    uint public b;
    function f(uint x) public returns (uint r) {
      assembly{
          gasstart()
       }
       assembly{
          gasstop()
       }
       b = x; 
       r  = b;
       
    }
}
