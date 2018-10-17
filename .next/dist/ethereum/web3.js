"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  //we are in the browser and metamask is running
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  //we are on the server *OR* the user is not running metamask
  var provider = new _web2.default.providers.HttpProvider("https://rinkeby.infura.io/v3/17a0907aaeff464099782644eacda9f1");
  web3 = new _web2.default(provider);
}

exports.default = web3;