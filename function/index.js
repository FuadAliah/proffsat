const { onRequest } = require("firebase-functions/v2/https");
const next = require("next");

const dev = false;
const app = next({ dev, conf: { distDir: ".next" } });
const handle = app.getRequestHandler();

exports.nextjsFunc = onRequest((req, res) => {
  return app.prepare().then(() => handle(req, res));
});
