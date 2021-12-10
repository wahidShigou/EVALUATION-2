var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

//Retrieve the data
function readFormData(){
    var formData = {};
    formData["id"] = document.getElementById("id").value;
    formData["nom"] = document.getElementById("nom").value;
    formData["montant"] = document.getElementById("montant").value;
    return formData;
}

//Insert the data
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.id;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.nom;
    var cell4 = newRow.insertCell(2);
        cell4.innerHTML = data.montant;
    var cell5 = newRow.insertCell(3);
        cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
}

//Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('id').value = selectedRow.cells[0].innerHTML;
    document.getElementById('nom').value = selectedRow.cells[1].innerHTML;
    document.getElementById('montant').value = selectedRow.cells[2].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.id;
    selectedRow.cells[1].innerHTML = formData.nom;
    selectedRow.cells[2].innerHTML = formData.montant;
}

//Delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset the data
function resetForm(){
    document.getElementById('id').value = '';
    document.getElementById('nom').value = '';
    document.getElementById('montant').value = '';
}