# CSLprojects
projects during CSL@NTU


examples_inline: contract with inline assembly with special instruction support such as gasstart gasstop and others to do in near future.


go-ethereum: instrumented by Yang Xuan


solidity: instrumented by Liu Ye. 

file changes: 

Token.h  145~147

Instruction.h 107~109

Instruction.CPP  97~99

AsmParser.cpp  402~407


note: We found that solidity at version 0.5.17 cannot produce correct bytecode for inline-assembly contract. So we choose solidity@0.5.2 to make the implementation.


Tips: You could use buildDocker.sh to build a docker image and then run it.


Test steps:


1. Start a ethereum client with this revised go-ethereum .(also I have providedthe bootstrap.sh under Ethereum to help you, please reset the datadir and CustomGeneisis to actual directory in your enviroment)  

2. You could just run node test.js(you can replace the bytecode with that of C6,C8,C9 under examples_inline) here and check the output to see what happens to the gas using variation 

Contacts:

Liu Ye
liuye5@live.com

