const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const pg = require("pg");

const authentication = require("./controller/authentication");

const app = express();
const uri =
  "postgres://bqeheala:GWAZ5COFlyvb129JAd-EhwSLdqAzkD_l@raja.db.elephantsql.com:5432/bqeheala";
// app.use(bodyParser.urlencoded({
//     extended: true
//   }));
app.use(bodyParser.json());

const client = new pg.Client({
  connectionString: uri
});

client.connect((err, result) => {
  if (err) console.log(err);
});

app.get("/", (req, res) => {
  console.log("request url:", req.url);
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.get("/manifest.json", (req, res) => {
  console.log("request url:", req.url);
  res.sendFile(path.join(__dirname, "../build/manifest.json"));
});
app.get("/favicon.ico", (req, res) => {
  console.log("request url:", req.url);
  res.sendFile(path.join(__dirname, "../build/favicon.ico"));
});

app.get("/static/css/main.d5de87e7.chunk.css", (req, res) => {
  console.log("request url:", req.url);
  res.sendFile(
    path.join(__dirname, "../build/static/css/main.d5de87e7.chunk.css")
  );
});
app.get("/static/js/2.c338c264.chunk.js", (req, res) => {
  console.log("request url:", req.url);
  res.sendFile(path.join(__dirname, "../build/static/js/2.c338c264.chunk.js"));
});

app.get("/static/js/main.5c620321.chunk.js", (req, res) => {
  console.log("request url:", req.url);
  res.sendFile(
    path.join(__dirname, "../build/static/js/main.5c620321.chunk.js")
  );
});

app.get("/static/media/web-design-2906159_960_720.f5705611.jpg", (req, res) => {
  console.log("request url:", req.url);
  res.sendFile(
    path.join(
      __dirname,
      "../build/static/media/web-design-2906159_960_720.f5705611.jpg"
    )
  );
});

app.post("/login", authentication.verifyLogin, (req, res) => {
  const characters = res.locals.data;

  res.status(200).send(characters);
});

app.get("/getCharacters", (req, res) => {});

app.post("/createCharacter", (req, res) => {});

app.post("/signup", (res, req) => {});

app.listen(3030);
