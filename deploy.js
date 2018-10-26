// ropsten network에 배포 
// compile 결과물을 배포한다. 

const {interface, bytecode} = require('./compile'); 
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const provider = new HDWalletProvider('motor piece better happy swap spread print drastic print sunny suggest bronze',
                   'https://ropsten.infura.io/v3/a7f9adcd094241d1a54bbdde44b7618d' );

const web3 = new Web3(provider);

console.log("Deploy will start soon");

const deploy = async () => {
     const accounts = await web3.eth.getAccounts(); 
     console.log(accounts[0])
     const result = await new web3.eth.Contract(JSON.parse(interface))
     .deploy({data: '0x'+bytecode})
     .send({from: accounts[0], gas: '1000000', gasPrice: '20000000'});

     console.log('contract deployment complete : ', result.options.address);
     console.log(interface)
}

deploy();