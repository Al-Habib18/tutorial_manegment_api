/** @format */

const express = require("express");
const cors = require("cors");

const connect_db = require("./db");
const router = require("./app/routes/index");

const app = express();

let corsOptions = {
    origin: "https://localhost:8081",
};

app.use(cors(corsOptions));

// parse request of content type - application/json
app.use(express.json());

// parse request of content type -application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(router);
// Root route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to My application!" });
});

app.use((err, req, res, next) => {
    let message = err.message ? err.message : "Server error occurred";
    let status = err.status ? err.status : 500;

    console.log(err);
    return res.status(status).json({ message: message });
});

const PORT = process.env.PORT || 8080;

connect_db("mongodb://localhost:27017/tutorial-db")
    .then(
        console.log("Database connection established"),
        app.listen(PORT, () => {
            console.log("app listening on port", PORT);
        })
    )
    .catch((e) => {
        console.log("error accourd", e);
    });
