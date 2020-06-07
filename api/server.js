const express = require("express"),
  path = require("path"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  tungus = require("tungus"),
  mongoose = require("mongoose"),
  tingodb = require("tingodb"),
  config = require("./db");
memberRoute = require("./routes/member.route");

mongoose.Promise = global.Promise;
mongoose.connect(config.db, function (err) {
  if (err) {
    console.log(err);
  }
});

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/members", memberRoute);

let port = process.env.port || 4000;

const server = app.listen(port, function () {
  console.log("Listening on port " + port);
});
