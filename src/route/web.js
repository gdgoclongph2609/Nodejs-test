const express = require("express");
let router = express.Router();

let initWebRoute = (app) => {
    router.get("/", (req, res) => {
        return res.render("home"); // KHÔNG ghi .ejs
    });

    return app.use("/", router);
};

module.exports = initWebRoute;
