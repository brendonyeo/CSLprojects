const Web3 = require("web3")
var httpRpcAddr = "http://127.0.0.1:8546"
var Provider = new Web3.providers.HttpProvider(httpRpcAddr);
var web3 = new Web3(Provider);

var abi  = [{"constant":true,"inputs":[],"name":"b","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"f","outputs":[{"name":"r","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];
var bytecode ="0x608060405234801561001057600080fd5b5060f68061001f6000396000f3fe6080604052348015600f57600080fd5b5060043610604f576000357c0100000000000000000000000000000000000000000000000000000000900480634df7e3d0146054578063b3de648b146070575b600080fd5b605a60af565b6040518082815260200191505060405180910390f35b609960048036036020811015608457600080fd5b810190808035906020019092919050505060b5565b6040518082815260200191505060405180910390f35b60005481565b60005e8160008190555060005490505f91905056fea165627a7a723058208fa1ab68dd6bdda2a2363d9da5a6246b5c9a9b5d8013d46d249e4c14e92687960029"; 
//"0x6080604052348015600f57600080fd5b5060a78061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063b3de648b14602d575b600080fd5b605660048036036020811015604157600080fd5b8101908080359060200190929190505050606c565b6040518082815260200191505060405180910390f35b60005f6000548202905091905056fea165627a7a723058201ad5ce6e2ce600c8e12c96c90d17fe0093c17fcf32ba4233e739d2d7f12023fc0029"; 
//var instance =web3.eth.contract(abi).new({from:"0x2b71cc952c8e3dfe97a696cf5c5b29f8a07de3d8",data:bytecode,gas:5000000});
var createTx = {
from:"0x2b71cc952c8e3dfe97a696cf5c5b29f8a07de3d8",
data:bytecode,
gas:5000000
};
web3.eth.sendTransaction(createTx, function(err, hash)  {
        if (err) { 
            console.log(err); return; 
        }
        // Log the tx, you can explore status manually with eth.getTransaction()
        console.log('Contract creation tx: ' + hash);
    
        // Wait for the transaction to be mined
        var receipt;
        while (receipt == null||receipt==undefined) {

            receipt = web3.eth.getTransactionReceipt(hash);

            // Simulate the sleep function
            Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 1000);
        }

        console.log('Contract address: ' + receipt.contractAddress);
 
       var MyContract = web3.eth.contract(abi);
// initiate contract for an address
        var instance = MyContract.at(receipt.contractAddress);
 
		instance.f(500,{from: "0x2b71cc952c8e3dfe97a696cf5c5b29f8a07de3d8",gas: 700000},function(err, hash)  {
			if (err) { 
			    console.log(err); return; 
			}
			// Log the tx, you can explore status manually with eth.getTransaction()
			console.log('Contract f call tx: ' + hash);
		    
			// Wait for the transaction to be mined
			var receipt;

			while (receipt == null||receipt==undefined) {

			    receipt = web3.eth.getTransactionReceipt(hash);
		     
			    // Simulate the sleep function
			    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 1000);
			}
			console.log(receipt);
			var b = instance.b({from: "0x2b71cc952c8e3dfe97a696cf5c5b29f8a07de3d8",gas: 700000});
			console.log(b);
			console.log(b.toString()); 
		      
	      });
    
});


