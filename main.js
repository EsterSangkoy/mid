// Untuk getElement, insertValue ke table
const form = document.querySelector('#formStudent');
const search = document.querySelector('#search');
search.addEventListener('keyup', searchFP);
form.addEventListener('submit', insertDataForm);
function insertDataForm(event) {
    event.preventDefault();
    let studentId = document.querySelector('#idStudent');
    let fullName = document.querySelector('#fullName');
    let faculty = document.querySelector('#Faculty');
    let prodi = document.querySelector('#listProdi');
    let gender = document.querySelector("input[name=flexRadioDefault]:checked").value;
    if(!studentId.value || !fullName.value || !gender || !faculty.value || !prodi.value){
        alert("please fill all form");
        return;
    }
    let row;
    let outputDataStudent = document.querySelector('#outputData');
    let newRow = outputDataStudent.insertRow(row);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);

    cell1.innerHTML = studentId.value;
    cell2.innerHTML = fullName.value;
    cell3.innerHTML = gender;
    cell4.innerHTML = faculty.value;
    cell5.innerHTML = prodi.value;

    //Membersihkan form setelah di submit
    studentId.value = '';
    fullName.value = '';
    faculty.value = '';
    prodi.value = '';
    gender = '';
};

// Untuk hide dan show form student
let a;
function show(){
    if(a==1){
        document.querySelector('#formStudent').style.display="inline";
        return a=0;
    } else{
        document.querySelector('#formStudent').style.display="none";
        return a=1;
    }
};


// Untuk melakukan search
function searchFP(e) {
    let searchText = e.target.value.toLowerCase();
    let listofFP = [...document.querySelectorAll('td')];
    listofFP.forEach((fakultas) =>{
        let fakultasName = fakultas.firstChild.textContent;
        if(fakultasName.toLowerCase().indexOf(searchText) != -1){
            fakultas.style.display = '';
        } else {
            fakultas.style.display = 'none';
        }
    })
};