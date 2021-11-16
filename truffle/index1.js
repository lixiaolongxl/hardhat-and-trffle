var Web3 = require('web3')
var request = require('request');
// var contract = require('truffle-contract')
var contract = require("@truffle/contract");
var zastrin_pay_artifacts = require('./build/contracts/Migrations.json')
var provider = new Web3.providers.HttpProvider("http://localhost:8545");


var MyContract = contract({
  abi: zastrin_pay_artifacts.abi,
  unlinked_binary: zastrin_pay_artifacts.deployedBytecode,
  address: '0xEC442E1487F4Eed02c99c0e7Ef6233B3A227de23' // optional
})
MyContract.setProvider(provider);
// console.log(MyContract);
let coin;
MyContract.at('0xEC442E1487F4Eed02c99c0e7Ef6233B3A227de23').then(function (instance) {
  coin = instance;
  // MyContract.web3.eth.getAccounts(console.log)
  // Make a transaction that calls the function `sendCoin`, sending 3 MetaCoin
  // to the account listed as account_two.
  // console.log(coin);
  return coin.setname('lixiaolong1', { from: '0x3be2e57Fa57F256Cbeddfc318200D5D269c4Fe64' })
}).then(function (result) {
  // console.log(result);
  //  result.then(console.log)

  // This code block will not be executed until @truffle/contract has verified
  // the transaction has been processed and it is included in a mined block.
  // @truffle/contract will error if the transaction hasn't been processed in 120 seconds.

  // Since we're using promises, we can return a promise for a call that will
  // check account two's balance.
  return coin.getname.call()
}).then(function (result) {
  console.log(result);
  // var BN = MyContract;
  // var BN = MyContract.web3.utils.BN;
  // console.log(MyContract.web3.utils)

  // console.log(result.toString());
  // console.log(new BN(result).toString());
}).then(() => {
  // console.log(coin.HandlesetName);
coin.HandlesetName({ fromBlock: 'latest' }, function (err, res) {
  // log
}).on('data', function (event) {
    console.log(event); // 与上述可选的回调结果相同
  })
  .on('changed', function (event) {
    // 从本地数据库中删除事件
  })
  .on('error', function (error, receipt) { // 如果交易被网络拒绝并带有交易收据，第二个参数将是交易收据。

  });
})


