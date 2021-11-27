let users = [
    {
      id: "123456789",
      createdDate: "2021-01-06T00:00:00.000Z",
      status: "En validation",
      firstName: "Mohamed",
      lastName: "Taha",
      userName: "mtaha",
      registrationNumber: "2584",
    },
     {
      id: "987654321",
      createdDate: "2021-07-25T00:00:00.000Z",
      status: "Validé",
      firstName: "Hamid",
      lastName: "Orrich",
      userName: "horrich",
      registrationNumber: "1594",
    },
       {
      id: "852963741",
      createdDate: "2021-09-15T00:00:00.000Z",
      status: "Rejeté",
      firstName: "Rachid",
      lastName: "Mahidi",
      userName: "rmahidi",
      registrationNumber: "3576",
    }
  ]
window.onload = function(event) {
    event.preventDefault;
    loadData(users);
};


  const table = document.querySelector('table');
  const tbody = document.querySelector('tbody');
  const showForm = document.querySelector('.showForm');
  const modal = document.querySelector('.modal');
  const backdrop = document.querySelector('.backdrop');
  const Enregistrer = document.querySelector('.enregistrer');


  function closeModal() {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
  }


  showForm.addEventListener('click', function() {
   modal.style.display = 'block';
   backdrop.style.display = 'block';

  });
  Enregistrer.addEventListener('click',closeModal);
  backdrop.addEventListener('click',closeModal);

 

const CreateUser = () => {
    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const status = document.querySelector('#status').value;
    const userName = document.querySelector('#userName').value;
    const createdDate = document.querySelector('#createdDate').value;
    const registrationNumber = document.querySelector('#registrationNumber').value;
    if(firstName!==''&&lastName!==''&&status!==''&&userName!==''&&userName!==''&&createdDate!==''&&registrationNumber!==''){
        const formData = {
            id:''+(Math.floor(Math.random() * 10000) + 1),
            createdDate,
            status,
            lastName,
            firstName,
            userName,
            registrationNumber};
            users.push(formData);
            refreshTable(formData);
    }
   
 
}

const refreshTable = (user) => {
    let objectKeys = Object.values(user);
    let row = document.createElement('tr');
    for(let values of objectKeys ) {
        let cell = document.createElement('td');
        let div = document.createElement('div');
        div.innerText = values;
        if(values==='Validé') {
         div.className = 'valide';
        }
        if(values==='En validation') {
         div.className = 'on-validation';
        }
        if(values==='Rejeté') {
         div.className = 'rejected';
        }
        div.style.cssText = 'text-align: center;border-radius: 5px;'
        cell.appendChild(div);
        row.appendChild(cell);
    }
     let cell = document.createElement('td');
     let i = document.createElement('i');
    i.className = 'fas fa-trash-alt';
    i.addEventListener("click",function () {
     deleteUser(user.id);
 });
     cell.appendChild(i);
     row.appendChild(cell);
    tbody.appendChild(row);
}
const loadData = (users) => {
    
    for (let user of users) {
        let objectKeys = Object.values(user)
       let row = document.createElement('tr');
       for(let values of objectKeys ) {
           let cell = document.createElement('td');
           let div = document.createElement('div');
           div.innerText = values;
           if(values==='Validé') {
            div.className = 'valide';
           }
           if(values==='En validation') {
            div.className = 'on-validation';
           }
           if(values==='Rejeté') {
            div.className = 'rejected';
           }
           div.style.cssText = 'text-align: center;border-radius: 5px;'
           cell.appendChild(div);
           row.appendChild(cell);
       }
        let cell = document.createElement('td');
        let i = document.createElement('i');
        i.className = 'fas fa-trash-alt';
       i.addEventListener("click",function () {
        deleteUser(user.id);
    });
        cell.appendChild(i);
        row.appendChild(cell);
       tbody.appendChild(row);
    }

}

const clearTable = () => {
    var child = tbody.lastElementChild;
    while(child ) {
        tbody.removeChild(child);
        child = tbody.lastElementChild;
    }
}

const deleteUser = (id) => {
        var index = users.map(function(user) { return user.id; }).indexOf(id);
       let data =  users.splice(index, 1);
       clearTable();
        loadData(users);
    
}