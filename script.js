
//Add the tasks

function addTasksFunction() {

	let textInput = document.getElementById('textInput');
	let dateInput = document.getElementById('dateInput');
	let idInput = document.getElementById('numbersInput');
	let counter = table.rows.length;
	document.getElementById('total').innerHTML = counter;

	if (textInput.value == '') {
		alert('Please fill task name');
	} else if (dateInput.value === '') {
		alert('Please fill task date');
	} else if (idInput.value === '') {
		alert('Please fill the task ID ');
	} else {
		var row = table.insertRow();
		var cell1 = row.insertCell();
		var cell2 = row.insertCell();
		var cell3 = row.insertCell();
		cell1.innerHTML = '<input type="button" class="btn btn-secondary btn-sm" scope="col" value="Delete" onclick="deleteRow(this) " >  ' + textInput.value;
		cell2.innerHTML = dateInput.value;
		cell3.innerHTML = numbersInput.value;
	}
}

//Delete the tasks


function deleteRow(btn) {
	var row = btn.parentNode.parentNode;
	row.parentNode.removeChild(row);
	let table = document.getElementById('table');
	let counter = table.rows.length-1;
	document.getElementById('total').innerHTML = counter;
  }




//Filter

let table = document.getElementById('table');
let enterKey = document.getElementById('taskSearch');

document.getElementById('taskSearch').addEventListener('keypress', function (e) {
	if (e.key === 'Enter') {
		let searchFor = document.getElementById('taskSearch').value;
		let nrOfRows = table.rows.length;

		for (let i = 1; i < nrOfRows; i++) {
			let currentTaskName = table.rows[i].innerText;
			if (currentTaskName.includes(searchFor)) {
				table.rows[i].style.display = 'table-row';
				
			} else {
				table.rows[i].style.display = 'none';
			}
		}

	}
	
});


let counter = table.rows.length-1;
document.getElementById('total').innerHTML = counter;