const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const authorRoute = require("./routes/authors");
const postRoute = require("./routes/posts");
const commentRoute = require("./routes/comments");
const rootIndex = require("./routes/index");

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use("/author", authorRoute);
app.use("/post", postRoute);
app.use("/comment", commentRoute);
app.use("/", rootIndex);

app.listen(3000, function(){
    console.log(`Server started on port 3000`);
});