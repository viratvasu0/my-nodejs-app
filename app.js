const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello from Build Piper CI/CD!");
});

module.exports = app;
