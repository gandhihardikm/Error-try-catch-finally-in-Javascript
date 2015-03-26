/**
 * 
 */

function addToTable() {
	var addItem = prompt("Enter item to buy", "");
	var getTable = document.getElementById("tableShopper");
	var row = getTable.insertRow(1);
	try {
		if (addItem == "") throw "Item cannot be Empty";
		else if (!isNaN(addItem)) throw "Item cannot be only number";
		else if (addItem != "") {
			Item = row.insertCell(0);
			Item.innerHTML = addItem;
		}
	} catch (e) {
		alert(e);
	}
}