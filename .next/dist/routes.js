"use strict";

var routes = require("next-routes")();

//to add a route, give the URL with variables, then the component to show

routes.add("/campaigns/new", "/campaigns/new") //this route needs to be before the next one, due to parsing issues
.add("/campaigns/:address", "/campaigns/show").add("/campaigns/:address/requests", "/campaigns/requests/index").add("/campaigns/:address/requests/new", "campaigns/requests/new");

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQTs7QUFFQSxPQUNHLEFBREgsSUFDTyxBQURQLGtCQUN5QixBQUR6QixrQkFDMkMsQUFEM0M7Q0FFRyxBQUZILElBRU8sQUFGUCx1QkFFOEIsQUFGOUIsbUJBR0csQUFISCxJQUdPLEFBSFAsZ0NBR3VDLEFBSHZDLDZCQUlHLEFBSkgsSUFJTyxBQUpQLG9DQUkyQyxBQUozQzs7QUFNQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uaWsvZGV2L3VkZW15LWNvdXJzZXMvZXRoZXJldW0va2lja3N0YXJ0In0=