const path = require('path');
const express = require("express");
// import webpack from "webpack";
// import webpackDevMiddleware from "webpack-dev-middleware";
// import webpackHotMiddleware from "webpack-hot-middleware";
// import * as config from "../webpack.prod.js";


const app           = express(),
      DIST_DIR      = path.join(__dirname, "public"),
      HTML_FILE     = path.join(DIST_DIR, "index.html"),
      isDevelopment = process.env.NODE_ENV !== "production",
      DEFAULT_PORT  = 3000;

app.set("port", process.env.PORT || DEFAULT_PORT);

app.use(express.static(DIST_DIR));

app.get("*", (req, res) => res.sendFile(HTML_FILE));

app.listen(app.get("port"));