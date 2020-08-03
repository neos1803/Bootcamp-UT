const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

// View Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Apps program
