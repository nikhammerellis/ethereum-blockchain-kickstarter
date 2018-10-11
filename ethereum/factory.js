import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

//create an instance of our deployed factory contract
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x895151eafB2175D39376e90df6B30b4CCEBf65Af"
);

export default instance;
