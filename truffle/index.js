var Web3 = require('web3')
var request = require('request');
// var contract = require('truffle-contract')
var contract = require("@truffle/contract");
var zastrin_pay_artifacts = require('./build/contracts/Migrations.json')
var ws_provider = 'wss://ropsten.infura.io/ws'
var web3 = new Web3(new Web3.providers.WebsocketProvider(ws_provider))
var Migrations = contract(zastrin_pay_artifacts);
var econtract = new web3.eth.Contract(Migrations.abi,'0x3bC7A8c6b51E08a554778DE46729b3c4054Fd3D4');
console.log(econtract)

// econtract.methods.getissender().call().then(res=>{console.log(res)})
// econtract.methods.owner().call().then(console.log)