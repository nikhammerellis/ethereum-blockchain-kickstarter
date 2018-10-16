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

console.log("FACTORY ADDRESS FROM FILE: ", addressData);
//create an instance of our deployed factory contract
var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), addressData.address);

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkNhbXBhaWduRmFjdG9yeSIsImFkZHJlc3NEYXRhIiwicmVxdWlyZSIsImNvbnNvbGUiLCJsb2ciLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIiwiYWRkcmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQTRCLEFBQTVCOzs7Ozs7QUFFQSxJQUFJLGNBQWMsUUFBUSxBQUFSLEFBQWxCOztBQUVBLFFBQVEsQUFBUixJQUFZLEFBQVosK0JBQTJDLEFBQTNDO0FBQ0E7QUFDQSxJQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ2YsS0FBSyxBQUFMLE1BQVcsMEJBQWdCLEFBQTNCLEFBRGUsWUFFZixZQUFZLEFBRkcsQUFBakIsQUFLQTs7a0JBQWUsQUFBZiIsImZpbGUiOiJmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uaWsvZGV2L3VkZW15LWNvdXJzZXMvZXRoZXJldW0va2lja3N0YXJ0In0=