const express = require("express");
const bodyParser = require("body-parser");
const viewEngine = require("./config/viewEngine");
const initWebRoute = require("./route/web");
require("dotenv").config();

const app = express();

// config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoute(app);

const port = process.env.PORT;

app.listen(port, () => {
    console.log("Backend Nodejs is running on the port: " + port);
});
