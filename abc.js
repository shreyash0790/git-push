// // Multiple Element Selectors
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByTagName('li'));
// console.log(document.getElementsByClassName('item'));;;

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));


// // MANIPULATING THE DOM
// const ul = document.querySelector('.items');
// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// // btn.style.background = 'red';


// // EVENTS

// // Mouse Event
// btn.addEventListener('click', e => {
//   e.preventDefault();
//   console.log(e.target.className);
//   document.getElementById('my-form').style.background = '#ccc';
//   document.querySelector('body').classList.add('bg-dark');
//   ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
// });

// // Keyboard Event
// const nameInput = document.querySelector('#name');
// nameInput.addEventListener('input', e => {
//   document.querySelector('.container').append(nameInput.value);
// });


// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    let name=nameInput.value;
    let email=emailInput.value;
    let  obj={
      name,
      email
    }
    // storing the items 
  const existingData = JSON.parse(localStorage.getItem('userData')) || [];
  existingData.push(obj);

  localStorage.setItem('userData', JSON.stringify(existingData));

  var lii = document.createElement('li');
 
  // Add class
  lii.className = 'item';
  // Add text node with input value
  lii.appendChild(document.createTextNode(nameInput.value+ ' '+ '=>'));
  lii.appendChild(document.createTextNode(emailInput.value));
  userList.appendChild(lii);
  
  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('Delete'));

  // Append del button to li
  lii.appendChild(deleteBtn);

  // Append li to list
  userList.appendChild(lii);

  deleteBtn.addEventListener('click', function(e) {
    e.preventDefault();

    existingData.splice(existingData.findIndex(item => item.name === name && item.email === email), 1);
      localStorage.setItem('userData', JSON.stringify(existingData));

    lii.remove();
  });
  
// clear the fields 
   nameInput.value ='' ;
   emailInput.value = '';
  }
}

