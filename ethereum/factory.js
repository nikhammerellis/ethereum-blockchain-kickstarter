import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

let addressData = require("../factory-address.json");

//create an instance of our deployed factory contract
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  addressData.address
);

export default instance;
