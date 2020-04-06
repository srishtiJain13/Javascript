document.querySelector('#button_type').addEventListener('click',addValue);

var arr=[];

function addValue(){
    var inputVal = document.getElementById('input_type').value;
    if(inputVal !=""){
        arr.push(inputVal);
        clearTextBox();
        showValues();
    }else{
        alert("Enter some value !");
    }
}

function showValues(){
    if(arr.length>0){
        document.getElementById('table').classList.remove('d-none');
    }else{
        document.getElementById('table').classList.add('d-none');
    }
    var listItem = '';
    for(var i=0; i< arr.length; i++){
        listItem += '<tr><td>'+(i+1)+'</td><td>' +arr[i] +'</td><td> <button type="button" class="btn btn-success" id="edit_button" onclick="editValue(' +i +')"><i class="fas fa-pencil-alt"></i></button></td><td> <button type="button" id="delete_button" class="btn btn-danger" onclick="deleteValue('+i+')"><i class="far fa-trash-alt"></i></button></td></tr>'
    }
    document.getElementById('list').innerHTML = listItem
}
var editedIndex;

function editValue(index){
    editedIndex=index;
    document.getElementById('input_type').value=arr[index];
    document.getElementById('button_type').style.display='none';
    document.getElementById('save_button').style.display='inline';
}
document.querySelector('#save_button').addEventListener('click',saveEditedValue);

function saveEditedValue(){
    var inputVal = document.getElementById('input_type').value;
    if(inputVal !='') {
        arr[editedIndex]= inputVal;
        clearTextBox()
        showValues();
        document.querySelector('#save_button').style.display = 'none';
        document.getElementById('button_type').style.display='inline';
    } else {
        // error
        alert("Enter some value !");
    }
}

function clearTextBox(){
    document.getElementById('input_type').value="";
}

function deleteValue(index){
    arr.splice(index,1);
    showValues();
}

