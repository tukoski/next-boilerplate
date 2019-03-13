const { createServer } = require("http");
const next = require("next");
const routes = require("./src/routes");
const serverConf = require("./config");

const app = next({ dir: "./src", dev: process.env.NODE_ENV !== "production" });
const handler = routes.getRequestHandler(app);
const port = process.env.PORT || serverConf.port;

app.prepare().then(() => {
  createServer(handler).listen(port);
  console.log(`Server listening in the port ${port}`);
});
