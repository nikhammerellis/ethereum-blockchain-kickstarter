const routes = require("next-routes")();

//to add a route, give the URL with variables, then the component to show

routes
  .add("/campaigns/new", "/campaigns/new") //this route needs to be before the next one, due to parsing issues
  .add("/campaigns/:address", "/campaigns/show")
  .add("/campaigns/:address/requests", "/campaigns/requests/index")
  .add("/campaigns/:address/requests/new", "campaigns/requests/new");

module.exports = routes;
