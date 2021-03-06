const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const controllers = require("./controllers/index");
const app = express();

app.set("port", process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(controllers);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
    layoutDir: path.join(__dirname, "views", "layouts"),
    partialsDir: path.join(__dirname, "views", "partials"),
    defaultLayout: "main"
  })
);
//
// app.use(express.static(path.join(__dirname, '..' , 'public')));
// app.use(controllers);



module.exports = app;
