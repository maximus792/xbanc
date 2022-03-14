import { chartRender } from "./js/chart.js";

var timeNow = new Date();
var options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

var result = timeNow.getTime();

var timeget = new Date(result);

var dades = {};

function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  };
  rawFile.send(null);
}

readTextFile("./js/data.json", function (text) {
  var data = JSON.parse(text); //parse JSON
  data = data.data;
  console.log(data);
  var totalBalance = 0,
    prebalance = 0;
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].amount);
    totalBalance += data[i].amount;
  }
  for (let i = 0; i < data.length - 1; i++) {
    prebalance += data[i].amount;
  }
  console.log(totalBalance);

  /*if (data[data.length - 2].amount < data[data.length - 1].amount)
	var color = "rgb(0,255,0)";
else var color = "rgb(255,0,0)"; */
  if (totalBalance > prebalance) var color = "rgb(0,255,0)";
  else var color = "rgb(255,0,0)";

  chartRender(color, data, totalBalance);
});

/* var dades = [
  { date: 1641638185455, amount: 10 },
  { date: 1241638185455, amount: 20 },
  { date: 1341638185455, amount: 30 },
  { date: 1441638185455, amount: 40 },
  { date: 1641678185475, amount: 10 },
];*/
