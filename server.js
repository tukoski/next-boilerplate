const { createServer } = require("http");
const next = require("next");
const routes = require("./routes");
const serverConf = require("./config");

const app = next({ dir: "./src", dev: process.env.NODE_ENV !== "production" });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer(handler).listen(process.env.PORT || serverConf.port);
});
