const Web3 = require("web3");
var httpRpcAddr = "http://127.0.0.1:8546"
var Provider = new Web3.providers.HttpProvider(httpRpcAddr);
var web3 = new Web3(Provider);

var abi =  [{"constant":true,"inputs":[],"name":"count","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"incrementCounterEmit","outputs":[{"name":"temp","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"incrementCounterEmitNoGas","outputs":[{"name":"temp","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"setCounterZero","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_temp","type":"uint256"},{"indexed":false,"name":"_count","type":"uint256"}],"name":"Varlog","type":"event"}];
var bytecode = "0x60806040526000805534801561001457600080fd5b5061020d806100246000396000f3fe608060405234801561001057600080fd5b5060043610610069576000357c01000000000000000000000000000000000000000000000000000000009004806306661abd1461006e5780634c8910b31461008c578063974ed7f7146100ce578063c9e6386a14610110575b600080fd5b61007661011a565b6040518082815260200191505060405180910390f35b6100b8600480360360208110156100a257600080fd5b8101908080359060200190929190505050610120565b6040518082815260200191505060405180910390f35b6100fa600480360360208110156100e457600080fd5b810190808035906020019092919050505061017b565b6040518082815260200191505060405180910390f35b6101186101d8565b005b60005481565b6000819050600160008082825401925050819055507f54aa50399cbd42c39749f9fa799ee48975e269287b0e719d5402fc453abc257e81600054604051808381526020018281526020019250505060405180910390a1919050565b6000819050600160008082825401925050819055505f7f54aa50399cbd42c39749f9fa799ee48975e269287b0e719d5402fc453abc257e81600054604051808381526020018281526020019250505060405180910390a15e919050565b6000808190555056fea165627a7a72305820603b1c5bb8eafaa2fb0f7d19347b94735270a9ab0c7dc73825152d1a0d8e1e350029";

var createTx = {
  from:"0x8461b6221f2e5d0376b8a567468370f60a19218a",
  data:bytecode,
  gas:5000000
};
web3.eth.sendTransaction(createTx, function(err, hash)  {
  if (err) {
    console.log(err); return;
  }
  // Log the tx, you can explore status manually with eth.getTransaction()
  console.log('[Contract created] Contract creation tx: ' + hash);

  // Wait for the transaction to be mined
  var receipt;
  while (receipt == null||receipt==undefined) {

    receipt = web3.eth.getTransactionReceipt(hash);

    // Simulate the sleep function
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 1000);
  }
  // console.log(receipt);
  console.log('[Contract mined] Contract address: ' + receipt.contractAddress);

  var MyContract = web3.eth.contract(abi);
  // initiate contract for an address
  var instance = MyContract.at(receipt.contractAddress);

  var event = instance.Varlog({}, {fromBlock:0, toBlock:'latest'});

  // watch for changes
  event.watch(function(error, result){
      // result will contain various information
      // including the argumets given to the `Deposit`
      // call.
      if (!error)
          console.log(result.args._temp.toString(10));
          console.log(result.args._count.toString(10));
          // console.log(result);
          // console.log("test");
          event.stopWatching();
  });

  instance.incrementCounterEmitNoGas(500,{from: "0x8461b6221f2e5d0376b8a567468370f60a19218a",gas: 700000},function(err, hash)  {
    if (err) {w
      console.log(err); return;
    }
    // Log the tx, you can explore status manually with eth.getTransaction()
    console.log('\n\t[FC2] Function incrementCounterEmit call tx: ' + hash);

    // Wait for the transaction to be mined
    var receipt;

    while (receipt == null||receipt==undefined) {

      receipt = web3.eth.getTransactionReceipt(hash);

      // Simulate the sleep function
      // Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 1000);
    }
    console.log(receipt);
  });
});
