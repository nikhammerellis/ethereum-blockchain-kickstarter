const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const path = require("path");
const fs = require("fs-extra");
const compiledFactory = require("./build/CampaignFactory.json");
const mnemonic = require("../secrets");

const provider = new HDWalletProvider(
  mnemonic,
  "https://rinkeby.infura.io/v3/17a0907aaeff464099782644eacda9f1"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("attempting to deploy from account: ", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({
      data: compiledFactory.bytecode
    })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("contract deployed to: ", result.options.address);
  console.log("updating factory address...");
  const addressPath = path.join(__dirname, "../factory-address.json");
  //remove old address file
  fs.removeSync(addressPath);
  //create new address file
  fs.ensureFileSync(addressPath);

  let factoryAddress = {
    address: result.options.address
  };

  let data = JSON.stringify(factoryAddress);
  fs.writeFileSync(addressPath, data);
  console.log("factory address updated");
};
deploy();
