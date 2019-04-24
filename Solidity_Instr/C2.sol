pragma solidity >=0.4.11;

contract C2 {
    uint b;
    function f(uint x) public returns (uint r) {
        b = x; 
       assembly {
//          gasstart()
           mstore(0x40, add(1, 3))
            //r := mul(x, 2) // ignore the offset, we know it is zero
        }
       r  = b;
       
    }
}
