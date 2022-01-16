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

	var amount = [];
	var balance = 0;

	for (let i = 0; i < data.length; i++) {
		balance += data[i].amount;
		amount.push(balance);
	}

	function tableCreate() {
		const body = document.querySelector(".infotable"),
			tbl = document.createElement("table");
		tbl.style.width = "100%";
		tbl.style.border = "1px solid black";
		tbl.classList.add("table");
		tbl.classList.add("table-striped");

		var header = tbl.createTHead();
		var row = header.insertRow();
		["Fecha", "Cantidad", "billetes", "Balance"].forEach((e) => {
			var cell = row.insertCell();
			cell.appendChild(document.createTextNode(e));
		});
		for (let i = 0; i < data.length; i++) {
			const tr = tbl.insertRow();

			td = tr.insertCell();
			td.appendChild(document.createTextNode(stringify(data[i].date)));
			td.style.border = "1px solid black";
			td = tr.insertCell();
			td.appendChild(document.createTextNode(`Cantidad: ${data[i].amount}`));
			td.style.border = "1px solid black";
			td = tr.insertCell();
			td.appendChild(document.createTextNode(`Billetes: ${data[i].bills}`));
			td.style.border = "1px solid black";
			td = tr.insertCell();
			td.appendChild(document.createTextNode(`Balance: ${amount[i]}`));
			td.style.border = "1px solid black";
		}
		body.appendChild(tbl);
	}

	const e1 = document.querySelector("#e1");
	const e2 = document.querySelector("#e2");
	const e5 = document.querySelector("#e5");
	const e10 = document.querySelector("#e10");
	const e20 = document.querySelector("#e20");
	const e50 = document.querySelector("#e50");
	tableCreate();
	for (let i = 0; i < data.length; i++) {
		data[i].bills.forEach((e) => {
			console.log(e);
			switch (e) {
				case 1:
					e1.innerHTML = parseInt(e1.innerHTML) + 1;
					break;
				case -1:
					e1.innerHTML = parseInt(e1.innerHTML) - 1;
					break;
				case 2:
					e2.innerHTML = parseInt(e2.innerHTML) + 1;
					break;
				case -2:
					e2.innerHTML = parseInt(e2.innerHTML) - 2;
					break;

				case 5:
					e5.innerHTML = parseInt(e5.innerHTML) + 1;
					break;
				case -5:
					e5.innerHTML = parseInt(e5.innerHTML) - 2;
					break;

				case 10:
					e10.innerHTML = parseInt(e10.innerHTML) + 1;
					break;
				case -10:
					e10.innerHTML = parseInt(e10.innerHTML) - 2;
					break;

				case 20:
					e20.innerHTML = parseInt(e20.innerHTML) + 1;
					break;
				case -20:
					e20.innerHTML = parseInt(e20.innerHTML) - 2;
					break;

				case 50:
					e50.innerHTML = parseInt(e50.innerHTML) + 1;
					break;
				case -50:
					e50.innerHTML = parseInt(e50.innerHTML) - 2;
					break;
			}
		});
	}
});

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
