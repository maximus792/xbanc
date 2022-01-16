document.querySelector(".switch").addEventListener(
	"click",
	() => {
		if (document.querySelector(".switch").innerHTML === "Cambiar a Quitar")
			document.querySelector(".switch").innerHTML = "Cambiar a Agregar";
		else document.querySelector(".switch").innerHTML = "Cambiar a Quitar";
		document.querySelector(".main-container").classList.toggle("remove");
	},
	false
);

var totalBalance = 0;
var bills = [];
var timeNow = new Date();
var options = {
	year: "numeric",
	month: "long",
	day: "numeric",
};
var data = {
	date: timeNow.getTime(),
	amount: totalBalance,
	bills: bills,
};

var elements = document.getElementsByClassName("money-box");
for (var i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", function (e) {
		var toast = new bootstrap.Toast(document.querySelector("#liveToast"));
		if (
			document.querySelector(".main-container").classList.contains("remove")
		) {
			totalBalance -= parseInt(e.target.innerHTML.slice(0, -1));
			bills.push(parseInt(e.target.innerHTML.slice(0, -1)) * -1);
		} else {
			totalBalance += parseInt(e.target.innerHTML.slice(0, -1));
			bills.push(parseInt(e.target.innerHTML.slice(0, -1)));
		}
		if (totalBalance < 0) {
			document.querySelector("#totalBalance").innerHTML =
				"Cantidad eliminada: " +
				totalBalance +
				"€  (" +
				String(bills) +
				")";
		} else document.querySelector("#totalBalance").innerHTML = "Cantidad añadida: " + totalBalance + "€  (" + String(bills) + ")";
		console.log(`total balance: ${totalBalance}, bills: ${bills}`);
		data.bills = bills;
		data.amount = totalBalance;
    document.querySelector(".inp").value = JSON.stringify(data)
    console.log(document.querySelector(".inp").value);
		toast.show();
    
	});
}
document.querySelector(".cancelar").addEventListener("click", (e) => {
	e.preventDefault();
	location.reload();
});

/*
document.querySelector(".finalizar").addEventListener("click",send())

async function send() {
  console.log("he")
  var timeNow = new Date();
  var options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  var data = {
    date: timeNow.getTime(),
    amount: totalBalance,
    bills: bills,
  };
  await fetch("/", {
    method: "post",
    body: JSON.stringify(data),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("Data returned from python server", data);
    });
}

*/
