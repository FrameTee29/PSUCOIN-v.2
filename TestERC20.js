const Tx = require('ethereumjs-tx').Transaction;
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/'));

const contractAddr = 'CONTRACT_ADDRESS';
const contractAbi = [/* CONTRACT_ABI_ARRAY */];
const contractOwner = {
	addr: 'CONTRACT_OWNER_ADDRESS',
	key: 'CONTRACT_OWNER_PRIVATE_KEY'
};

sendToken('RECEIVER_ADDRESS', 'AMOUNT_OF_TOKEN');

function sendToken(receiver, amount) {
	console.log(`Start to send ${amount} tokens to ${receiver}`);
	const contract = web3.eth.contract(contractAbi).at(contractAddr);
	const data = contract.transfer.getData(receiver, amount * 1e18);
	const gasPrice = web3.eth.gasPrice;
	const gasLimit = 90000;
	const rawTransaction = {
		'from': contractOwner.addr,
		'nonce': web3.toHex(web3.eth.getTransactionCount(contractOwner.addr)),
		'gasPrice': web3.toHex(gasPrice),
		'gasLimit': web3.toHex(gasLimit),
		'to': contractAddr,
		'value': 0,
		'data': data,
		'chainId': 1
	};

	const privKey = new Buffer(contractOwner.key, 'hex');
	const tx = new Tx(rawTransaction);
	tx.sign(privKey);
	const serializedTx = tx.serialize();
	web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function (err, hash) {
		if (err) {
			console.log(err);
		}

		console.log(hash);
	});
}