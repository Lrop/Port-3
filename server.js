var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");
var http = require("http");

var app = express();

var app = express();
app.get("/index.html", function(req, res) {
  res.header("Content-Type", "text/html").send("<html>my html code</html>");
});

var PORT = process.env.PORT || 8080;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());

// app.use(express.static("public"));
// app.use(express.static(__dirname + '../public/Assets/styleFriend.css'));

// require("./routing/htmlRoutes")(app);
// require("./routing/apiRoutes")(app);

// response.sendfile("index.html");

app.get("/", function(req, res) {
  res.render("index", {});
});

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
