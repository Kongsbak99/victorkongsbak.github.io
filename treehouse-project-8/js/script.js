


const listContainer = document.querySelector('.list-container');
const overlay = document.querySelector('.overlay');
const overlayBackground = document.querySelector('.overlay-background');
const close = document.querySelector('.close');


// xXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX

// Funtions to get the random user

// xXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX

function getData(url) {
  return fetch(url)
          .then(status)
          .then( res => res.json())
          .catch(error => console.log('Something went wrong!', error))
}

// getting the employees from randomuser.me
Promise.all([
  getData(`https://randomuser.me/api/?results=12&nat=dk`),
])
.then(data => {
  employeeOverlay = data[0].results;
  randomEmployee(employeeOverlay);
})

// xXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX

//  Other functions

// xXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX

function status(response){
  if(response.ok){
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

function randomEmployee(data){
  let employee = "";

  // detail for each employee
  for(i=0; i<data.length; i++){
    employee += `
      <li data-id="${i}">
      <img src ='${data[i].picture.large}'>
      <h3 class="name">${data[i].name.first} ${data[i].name.last}</h3>
      <p class="email">${data[i].email}</p>
      <p class="city">${data[i].location.city}</p>
      </li>
    `
  }

  // Add HTML
  listContainer.innerHTML = employee;

  // link event listeners
  const lis = document.querySelectorAll('.list-container li');
  addLiListeners(lis);
}

// open overlay
function openOverlay(employeeId,data){
  const employee = data[employeeId]
  const name = `${employee.name.first} ${employee.name.last}`;
  const email = employee.email;
  const city = employee.location.city;
  const phone = employee.phone;
  const address = employee.location.street + ' ' + employee.location.state + ' ' + employee.location.postcode;
  const birthday = getDate(employee.dob.date);

  overlay.querySelector('h3').textContent = name;
  overlay.querySelector('img').setAttribute('src',employee.picture.large);
  overlay.querySelector('.email').textContent = email;
  overlay.querySelector('.city').textContent = city;
  overlay.querySelector('.phone').textContent = phone;
  overlay.querySelector('.address').textContent = address;
  overlay.querySelector('.birthday span').textContent = birthday;

  const idToNum = parseInt(employeeId,10);

  // Show the overlay & overlay-background layer behind it
  overlay.style.display = 'block';
  overlayBackground.style.display = 'block';

}

// Chanes the birtday date/time into the format required M/D/Y
function getDate(date){
  const newDate = new Date(date);
  return (newDate.getDate() +" - "+newDate.getMonth()) + " - " +  newDate.getFullYear();
}



// xXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX

//  EVENT LISTENERS

// xXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX

// Attached event listeners
function addLiListeners(lis){
  for(i=0; i<lis.length; i++){
    lis[i].addEventListener('click',(event) => {
      const tag = event.target.tagName;
      let employeeId = '';

      if(tag === 'LI') {
        employeeId = event.target.dataset.id;
      } else  {
        employeeId = event.target.parentElement.dataset.id;
      }

      openOverlay(employeeId,employeeOverlay);
    });
  }
}

// Eventlistener for when the close button (the X) is pressed
close.addEventListener('click',(event) => {
  overlay.style.display = 'none';
  overlayBackground.style.display = 'none';
})
