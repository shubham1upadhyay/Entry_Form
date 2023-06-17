const nameInput = document.getElementById("name");
const professionInput = document.getElementById("profession");
const ageInput = document.getElementById("age");

const addBtn = document.getElementById("add-btn");
const message = document.getElementById("message");
const employeesList = document.getElementById("employees-list");


let employee = [];


// addBtn.addEventListener("click", ()=>{
function addEmp(){
     // event.preventDefault;
    let nameValue = nameInput.value;
    let professionValue = professionInput.value;
    let ageValue = ageInput.value;

    // if any fields are empty
    let displayError = "";
    if(nameValue === '' || professionValue === '' || ageValue === '')
    {
        displayError = `
            <p class="text-danger">Error : Please Make sure All the fields are filled before adding in an employee !
            <i class="fa fa-close" style="font-size:30px;color:red"></i>
            </p>
        `;
        message.innerHTML = displayError;
    }
    else{

        const emp = {
            id: employee.length + 1,
            name: nameValue,
            profession: professionValue,
            age: ageValue
          };

          employee.push(emp);
          renderData();
          showMsg();
    }
}
// function to show error and success message
function showMsg()
{
    document.getElementById("default-msg").classList.add("hide");
        let displaySuccess = `
            <p class="text-success">Successfully added
            <i class="fa fa-thumbs-up"></i>
            </p>
           
            `;
         nameInput.value = '';
         professionInput.value = '';
         ageInput.value = '';
         message.innerHTML = displaySuccess;
}

function renderData() {
    const employeeList = document.getElementById('employees-list');
    employeeList.innerHTML = '';

    employee.forEach(e => {
      const li = document.createElement('li');

      li.innerHTML = `
      ${e.id} 
      <span>Name :</span> ${e.name}
      <span>Profession :</span> ${e.profession}
      <span>Age :</span> ${e.age}
      `; 
      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add("delete-btn");
      deleteBtn.textContent = 'Delete User';
      
      deleteBtn.addEventListener('click', () => deleteEmp(e.id));
      li.appendChild(deleteBtn);
      employeeList.appendChild(li);
    });

    if(employee.length == 0)
    {
        document.getElementById("default-msg").classList.remove("hide");
    }
}

// function to delete employeee

function deleteEmp(id){
    employee = employee.filter(e => e.id !== id);

    let displayError = `
            <p class="text-success">
             Employee with id ${id} is deleted successfully !
             <i class="fa fa-check" aria-hidden="true"></i>
             </p> 
        `;
        message.innerHTML = displayError;
        
    renderData();
}