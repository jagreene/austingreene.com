var express = require("express");
var path = require("path");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var exphbs  = require("express-handlebars");

var home  = require("./routes/home")();
var gallery = require("./routes/gallery")();

var app = express();

var PORT = process.env.PORT || 3001

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", home.getHome);
app.get("/declaration", home.getDeclaration);
app.get("/projects", gallery.getProjects);
app.get("/gallery", gallery.getGallery);

app.listen(PORT, function() {
  console.log("App running on port:", PORT);
});
