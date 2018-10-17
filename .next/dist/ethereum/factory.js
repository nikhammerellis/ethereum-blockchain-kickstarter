"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require("./build/CampaignFactory.json");

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addressData = require("../factory-address.json");

//create an instance of our deployed factory contract
var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), addressData.address);

exports.default = instance;