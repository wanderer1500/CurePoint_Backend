const express = require("express");
const app = express();
// const PORT = 8080;

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.listen(8080, () => {
    console.log("App is listening to port 8080");
});