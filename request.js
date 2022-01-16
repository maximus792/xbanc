const editJsonFile = require("edit-json-file");
const express = require("express");
const path = require("path");
const { parse } = require("path/posix");

// If the file doesn't exist, the content will be an empty object by default.
let file = editJsonFile("client/js/data.json");
var app = express();

//configs
app.set("views", path.join(__dirname, "client"));
app.use(express.urlencoded({ extended: true }));
//app.use(express.json())

//midlewares
app.use(express.static(path.join(__dirname, "client")));

// Set a couple of fields

app.get("/", function (req, res) {
	res.render("index.html");
	console.log(req);
});

app.get("/setup",(req,res)=>{
  file.set("data",[])
  file.save()
})

app.post("/", (req, res) => {
  var data = req.body.data
  console.log(data);
  data = JSON.parse(data)
	console.log(data);
  file.append("data", data)
  file.save()
  res.redirect("/")
});

module.exports = app;
