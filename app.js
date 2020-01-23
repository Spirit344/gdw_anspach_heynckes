//Webserver
const express = require("express");

//Framework für Datenbank
const mongoose = require("mongoose");

//URL Paths
const routes = require("./routes/routes");

/*
// local config
const config = {
  db: "mongodb://localhost:27017/wgdb",
  port: 3000
};
*/

// cloud config
const config = {
  db: "mongodb+srv://wg-helper:wg-helper@cluster0-dgie3.mongodb.net/test?retryWrites=true&w=majority",
  port: process.env.PORT
};

//Server initialisieren
const app = express();

//Datenbank Verbindung 
mongoose.connect(config.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//read json + urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//default route
app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

//mappen der restlichen routen auf /recipes
app.use("/recipes", routes);

//Server listening to port 3000
app.listen(config.port);

//zum nutzen in anderen datein
module.exports = app;
