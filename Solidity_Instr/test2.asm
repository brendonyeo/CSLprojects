6080604052348015600f57600080fd5b5060a58061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063b3de648b14602d575b600080fd5b605660048036036020811015604157600080fd5b8101908080359060200190929190505050606c565b6040518082815260200191505060405180910390f35b600080548202905091905056fea165627a7a72305820c625d768e15f8c5170682ae44b0fd37c930603e217aa4789e40126ebf9f232950029
00000: PUSH1 0x80
00002: PUSH1 0x40
00004: MSTORE
00005: CALLVALUE
00006: DUP1
00007: ISZERO
00008: PUSH1 0x0f
0000a: JUMPI
0000b: PUSH1 0x00
0000d: DUP1
0000e: REVERT
0000f: JUMPDEST
00010: POP
00011: PUSH1 0xa5
00013: DUP1
00014: PUSH2 0x001e
00017: PUSH1 0x00
00019: CODECOPY
0001a: PUSH1 0x00
0001c: RETURN
0001d: Missing opcode 0xfe
0001e: PUSH1 0x80
00020: PUSH1 0x40
00022: MSTORE
00023: CALLVALUE
00024: DUP1
00025: ISZERO
00026: PUSH1 0x0f
00028: JUMPI
00029: PUSH1 0x00
0002b: DUP1
0002c: REVERT
0002d: JUMPDEST
0002e: POP
0002f: PUSH1 0x04
00031: CALLDATASIZE
00032: LT
00033: PUSH1 0x28
00035: JUMPI
00036: PUSH1 0x00
00038: CALLDATALOAD
00039: PUSH1 0xe0
0003b: SHR
0003c: DUP1
0003d: PUSH4 0xb3de648b
00042: EQ
00043: PUSH1 0x2d
00045: JUMPI
00046: JUMPDEST
00047: PUSH1 0x00
00049: DUP1
0004a: REVERT
0004b: JUMPDEST
0004c: PUSH1 0x56
0004e: PUSH1 0x04
00050: DUP1
00051: CALLDATASIZE
00052: SUB
00053: PUSH1 0x20
00055: DUP2
00056: LT
00057: ISZERO
00058: PUSH1 0x41
0005a: JUMPI
0005b: PUSH1 0x00
0005d: DUP1
0005e: REVERT
0005f: JUMPDEST
00060: DUP2
00061: ADD
00062: SWAP1
00063: DUP1
00064: DUP1
00065: CALLDATALOAD
00066: SWAP1
00067: PUSH1 0x20
00069: ADD
0006a: SWAP1
0006b: SWAP3
0006c: SWAP2
0006d: SWAP1
0006e: POP
0006f: POP
00070: POP
00071: PUSH1 0x6c
00073: JUMP
00074: JUMPDEST
00075: PUSH1 0x40
00077: MLOAD
00078: DUP1
00079: DUP3
0007a: DUP2
0007b: MSTORE
0007c: PUSH1 0x20
0007e: ADD
0007f: SWAP2
00080: POP
00081: POP
00082: PUSH1 0x40
00084: MLOAD
00085: DUP1
00086: SWAP2
00087: SUB
00088: SWAP1
00089: RETURN
0008a: JUMPDEST
0008b: PUSH1 0x00
0008d: DUP1
0008e: SLOAD
0008f: DUP3
00090: MUL
00091: SWAP1
00092: POP
00093: SWAP2
00094: SWAP1
00095: POP
00096: JUMP
00097: Missing opcode 0xfe
00098: LOG1
00099: PUSH6 0x627a7a723058
000a0: SHA3
000a1: Missing opcode 0xc6
000a2: Missing opcode 0x25
000a3: Missing opcode 0xd7
000a4: PUSH9 0xe15f8c5170682ae44b
000ae: Missing opcode 0xf
000af: Missing opcode 0xd3