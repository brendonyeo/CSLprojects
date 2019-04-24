pragma solidity >=0.4.11;

contract C {
    uint b;
    event F_CALL(string);
    function f(uint x) public returns (uint r) {
        assembly {
            gasstop()
         //   r := mul(x, 2) // ignore the offset, we know it is zero
        }
        b = x;
        emit F_CALL("hello");
    }
}
