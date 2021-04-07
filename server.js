require("dotenv").config();

const express = require("express");

const app = express();

app.use("/api/search", require("./controllers/searchController"));

app.listen(5000, console.log("running"));
