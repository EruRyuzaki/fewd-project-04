let appData = {};

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static("./dist"));

app.get("/", (req, res) => {

    res.sendFile(path.resolve(__dirname, "./src/client/pages/index.html"));

});

app.post("/create", (req, res) => {

    appData = req.body;
    res.status(200).send(appData);

});

app.get("/request", (req, res) => {

    res.status(200).send(appData);

});

const port = 3000;

app.listen(port, () => {

    console.log("Server is running: http://localhost/" + port);
    
});