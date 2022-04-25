var accBtn = document.getElementById('accBtn');
var addAccBtn = document.getElementById('addAccBtn');
var editDelBtn = document.getElementById('editDelBtn');
var mainView = document.getElementById('mainView'); 
var mainBody = document.getElementById('mainBody');
var formView = document.getElementById('formView'); 
var saveBtn = document.getElementById('saveBtn'); 
var accId = document.getElementById('accId'); 
var accName = document.getElementById('accName'); 
var accDeposit = document.getElementById('accDeposit'); 
var accCard = document.getElementById('accCard'); 
var editView = document.getElementById('editView');
var editBody = document.getElementById('editBody');
var editFormView = document.getElementById('editFormView');
var eaccId = document.getElementById('eaccId'); 
var eaccName = document.getElementById('eaccName'); 
var eaccDeposit = document.getElementById('eaccDeposit'); 
var eaccCard = document.getElementById('eaccCard'); 
var editBtn = document.getElementById('editBtn');
var id;

var db = [
	{
		id : "1",
		name : "Danilo",
		deposit : 12000,
		cCard : "Visa"
	},
	{
		id : "2",
		name : "Milica",
		deposit : 14000,
		cCard : "Master"
	}
];
accBtn.addEventListener('click',showMainView);
addAccBtn.addEventListener('click',showForm);
saveBtn.addEventListener('click',saveAccount);
editDelBtn.addEventListener('click',showEditView);
editBtn.addEventListener('click',changeAccount);

createTable();

function createTable() {
	var text = '';
	for (let i = 0; i < db.length; i++) {
		text += '<tr>';
		text += '<td>'+db[i].id+'</td>';
		text += '<td>'+db[i].name+'</td>';
		text += '<td>'+db[i].deposit+'</td>';
		text += '<td>'+db[i].cCard+'</td>';
		text += '</tr>';
	}
	mainBody.innerHTML = text;
}

function createEditTable() {
	var text = '';
	for (let i = 0; i < db.length; i++) {
		text += '<tr>';
		text += '<td>'+db[i].id+'</td>';
		text += '<td>'+db[i].name+'</td>';
		text += '<td>'+db[i].deposit+'</td>';
		text += '<td>'+db[i].cCard+'</td>';
		text += '<td><button data-id="'+i+'" class="btn btn-warning edit">Edit</button></td>';
		text += '<td><button data-id="'+db[i].id+'" class="btn btn-danger delete">Delete</button></td>';
		text += '</tr>';
	}
	editBody.innerHTML = text;
	var deleteBtns = document.querySelectorAll('.delete');
	var editBtns = document.querySelectorAll('.edit');
	for (let i = 0; i < deleteBtns.length; i++) {
		deleteBtns[i].addEventListener('click',deleteAccount);
		editBtns[i].addEventListener('click',editAccount);
		
	}
}


function changeAccount() {
	var accId = eaccId.value;
	var accName = eaccName.value;
	var accDeposit = eaccDeposit.value;
	var accCard = eaccCard.value;


	db[id] = {
		id : accId,
		name : accName,
		deposit : accDeposit,
		cCard : accCard
	};
	createTable();
	showMainView();
}

function editAccount() {
	mainView.style.display = "none";
	formView.style.display = "none";
	editView.style.display = "none";
	editFormView.style.display = "block";

	 id = this.getAttribute('data-id');
	 eaccId.value = db[id].id;
	 eaccName.value = db[id].name;
	 eaccDeposit.value = db[id].deposit;
	 eaccCard.value = db[id].cCard;
}


function deleteAccount() {
	var id = this.getAttribute('data-id');
	db = db.filter(user => user.id !== id);
	createTable();
	showMainView();
}

function showEditView() {
	createEditTable();
	mainView.style.display = "none";
	formView.style.display = "none";
	editView.style.display = "block";
	editFormView.style.display = "none";
}

function showForm() {
formView.style.display = "block";
mainView.style.display = "none";
editView.style.display = "none";
editFormView.style.display = "none";
}
function showMainView() {
	mainView.style.display = "block";
	formView.style.display = "none";
	editView.style.display = "none";
	editFormView.style.display = "none";
	}

	function saveAccount() {
		var id = accId.value;
		var name = accName.value;
		var deposit = accDeposit.value;
		var card = accCard.value;

		var newAccount = {
			id : id,
			name : name,
			deposit : deposit,
			cCard : card
		}

		db.push(newAccount);
		createTable();
		showMainView();
	}