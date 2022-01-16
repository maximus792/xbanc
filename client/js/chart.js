export function chartRender(color = "rgb(0,0,0)", dades) {
  var labels = [];
  for (var i = 0; i < dades.length; i++) {
    labels.push(stringify(dades[i].date));
  }
  var amount = [];
  var balance = 0

  for (let i = 0; i < dades.length; i++) {
    console.log(dades[i].amount);
		balance += dades[i].amount;
    amount.push(balance)
	}
  
  document.querySelector("#totalbalance").innerHTML = `BALANCE: ${balance}€`
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Balance",
        backgroundColor: color,
        borderColor: color,
        data: amount,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      plugins: {
        legend: false
      },
    },
  };

  const myChart = new Chart(document.getElementById("myChart"), config);

}
function stringify(s) {
  var date = new Date(s);
  var date =
    date.toLocaleDateString("es", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }) +
    ",  " +
    date.getHours() +
    ":" +
    date.getMinutes();
  return date;
}
function changecolor(myChart, dades) {

  myChart.destroy();

  if (dades[dades.length - 2].amount < amount)
    chartRender("rgb(0,255,0)", dades);
  else chartRender("rgb(255,0,0)", dades);
}
