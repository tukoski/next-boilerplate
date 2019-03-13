const routes = (module.exports = require("next-routes")());

routes
  .add({ name: "home", pattern: "/", page: "Home" })
  .add({ name: "about", pattern: "/about", page: "About" })
  .add({ name: "team", pattern: "/about/team", page: "Team" });
