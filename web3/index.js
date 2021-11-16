const Web3 = require('web3');

// import Web3 from 'web3'
// console.log(Web3);
const json = require('./Migrations.json');



if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.WebsocketProvider("ws://localhost:8545"));
}
// var BN = web3.utils.BN;
// console.log(web3.givenProvider);

// console.log(web3.eth.defaultBlock);
// web3.eth.net.isListening().then(console.log) //连接上了
// web3.eth.getNodeInfo().then(res=>{console.log(res)}) //
// web3.eth.net.getId().then(res=>{console.log(res)})//获取netid
// web3.eth.getProtocolVersion().then(res=>{console.log(res)})//返回节点的以太坊协议版本。
// web3.eth.net.isListening().then(res=>{console.log(res)})//查看当前节点是否正在连接其它对等节点。
// web3.eth.net.getPeerCount().then(res=>{console.log(res)})//获取正在连接的对等节点的数量。

// var version = web3.version;
// console.log(version)
// web3.eth.getAccounts(console.log);
// console.log(web3.eth.accounts)
// console.log(web3.eth.accounts)
// web3.eth.getBalance("0x3A93a9f40917fD533B6E5B606861BA1a4383778c",24)
// .then(console.log);
// web3.eth.getBalance("0x329288eC08E45AE6d33637Ea3f57c37a51E2f8E9",24)
// .then(console.log);
// console.log(web3)
// var filter =  web3.eth;
//         console.log(filter)
// web3.eth.getPastLogs({ //获取日志
//             // fromBlock:2000,
//             // toBlock:2064,
//             address:'0x74d7a5a8b5c220a9f22e3a06f3ca13657955d509852c2284a4ed489b7bd47ce5'
//         } ).then(console.log)
const bytecode = json.bytecode;

var MyContract = new web3.eth.Contract(json.abi, '0xEC442E1487F4Eed02c99c0e7Ef6233B3A227de23');
// console.log(MyContract);
    // MyContract.methods.setCompleted1(10000).call().then(res=>{
    //     MyContract.methods.last_completed_migration().call().then(console.log);
    // });
    MyContract.methods.owner().call().then(res=>{console.log(res)})
    MyContract.methods.setname('lixiaolng2222').send({from: '0xFC191Fa151228DD5Fba9d81A1B1A06EB9B8EE15d'})
    .on('transactionHash', function(hash){
       
    })
    .on('confirmation', function(confirmationNumber, receipt){
       
    })
    .on('receipt', function(receipt){
        // console.log(receipt);
    })
    .on('error', function(error, receipt) { // 如果交易被网络拒绝并带有交易收据，则第二个参数将是交易收据。
        
    });
    MyContract.methods.getname().call().then(console.log)
    // console.log(MyContract.events)
    MyContract.events.HandlesetName({fromBlock:'latest'},function(error, event){
        console.log(event,0)
    }).on("connected", function(subscriptionId){
        console.log(subscriptionId,1);
    })
    .on('data', function(event){
        console.log(event,2); // 与上述可选的回调结果相同
    });
    
    // setInterval(()=>{
    //     MyContract.methods.getname().call().then(res=>{console.log(res)})
    // },1000)
// const contrant = new web3.eth.Contract(json.abi,{
//     from: '0x3A93a9f40917fD533B6E5B606861BA1a4383778c', // 默认交易发送地址
//     gasPrice: '20000000000', // 以 wei 为单位的默认 gas 价格，当前价格为 20 gwei
//     data:bytecode,
//     gas: 1500000,
// });
// contrant.deploy({
//     data:bytecode,
// }).send({
//     from: '0x3A93a9f40917fD533B6E5B606861BA1a4383778c',
//     gas: 1500000,
//     gasPrice: '20000000000'
// }).then(function(newContractInstance){
//     console.log(newContractInstance.options.address) // 带有新合约地址的合约实例

   
//     // console.log(contrant)
//     contrant.options.address = newContractInstance.options.address;

    
//     // contrant.methods.last_completed_migration().call().then((result)=>{
//     //     console.log(result,1)
//     // })
//     // console.log(contrant.methods);
//     contrant.methods.getissender().call().then(res=>{console.log(res)})
//     contrant.methods.setCompleted1(123).call().then(res=>{console.log(res)})
//     contrant.methods.last_completed_migration().call().then(res=>{console.log(res)})
//     setInterval(()=>{
//         contrant.methods.last_completed_migration().call().then(res=>{console.log(res)})
//     },1000)
//     // contrant.methods.last_completed_migration().call().then(res=>{console.log(res)})

    
    
//     // setInterval(function(){
//     //     contrant.methods.setCompleted(123).call().then(function(result){
//     //         console.log(result)
//     //     })
//     //     contrant.methods.last_completed_migration().call().then((result)=>{
//     //         console.log(result,1)
//     //     })
//     // },2000)
// });
// console.log(a);

// // contrant.methods['0x445df0ac']()


// .call((err, result) => {
//     console.log(err, result);
    
// })



// console.log(json.abi)
// console.log(json.bytecode)
// web3.eth.sendTransaction({
//     from: '0x3A93a9f40917fD533B6E5B606861BA1a4383778c', 
//     // data: '0x4322222',
//     to:'0x329288eC08E45AE6d33637Ea3f57c37a51E2f8E9',
//     value:20000000
// })


// .once('transactionHash', function(hash){ 
//     console.log(hash);
    
//  })
// .once('receipt', function(receipt){ 
//     console.log(receipt);
//  })
// .on('confirmation', function(confNumber, receipt){ 
//     console.log(confNumber, receipt);
//  })
// .on('error', function(error){ 
//     console.log(error);
//  })
// .then(function(receipt){
//     console.log( receipt);
//     // will be fired once the receipt is mined
// });
// console.log(web3.eth.getBlockNumber().then(console.log));

// let acc = web3.eth.accounts.create()
// console.log(acc);
// web3.eth.getBlock(0 ,function(err,res){
//     console.log(res)
// })

// var contract = new web3.eth.Contract(abi, address);

// var batch = new web3.BatchRequest();
// batch.add(web3.eth.getBalance.request('0x0000000000000000000000000000000000000000', 'latest', callback));
// batch.add(contract.methods.balance(address).call.request({from: '0x0000000000000000000000000000000000000000'}, callback2));
// batch.execute();