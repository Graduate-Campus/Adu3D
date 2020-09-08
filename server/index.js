var express = require("express");
var app = express();
var path = require("path");
var port = 5000;

//setting middleware
app.use(express.static(path.join(__dirname, "../public"))); //  "public" off of current is root

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
