$(document).ready(function () {
    $(".radio-btn").click(function () {
      $(".radio-inner").toggleClass("active");
      $("body").toggleClass("dark");
      

    });
  });


  const linkColor = document.querySelectorAll('.nav__link')

  function colorLink(){
      linkColor.forEach(l => l.classList.remove('active-link'))
      this.classList.add('active-link')
  }
  
  linkColor.forEach(l => l.addEventListener('click', colorLink))
  
  /*=============== SHOW HIDDEN MENU ===============*/
  const showMenu = (toggleId, navbarId) =>{
      const toggle = document.getElementById(toggleId),
      navbar = document.getElementById(navbarId)
  
      if(toggle && navbar){
          toggle.addEventListener('click', ()=>{
              /* Show menu */
              navbar.classList.toggle('show-menu')
              /* Rotate toggle icon */
              toggle.classList.toggle('rotate-icon')
          })
      }
  }
  showMenu('nav-toggle','nav')


let subMenu = document.getElementById("subMenu");
        
// function toggleMenu(){
//     subMenu.classList.toggle("open-menu");
// }

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.userpp').addEventListener('click', toggleMenu);
});

function toggleMenu() {
    var subMenu = document.getElementById("subMenu");
    subMenu.classList.toggle("open-menu");
}


function isValidName(name) {
    // Name should not be empty
    return name.trim() !== '';
}
function isValidUsername(username) {
    // Username should contain only letters, numbers, underscores, and be between 3 and 20 characters
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    return usernameRegex.test(username);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(phoneNumber) {
    // Simple phone number validation regex for digits and optional hyphens
    const phoneRegex = /^\d+(-\d+)*$/;
    return phoneRegex.test(phoneNumber);
}

// Function to validate a date of birth
function isValidDateOfBirth(dateOfBirth) {
    // (MM/DD/YYYY)
    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
    return dateRegex.test(dateOfBirth);
}

// Example usage:
const name = prompt("Enter your name:");
const username = prompt("Enter your username:");
const email = prompt("Enter your email:");
const phoneNumber = prompt("Enter your phone number:");
const dateOfBirth = prompt("Enter your date of birth (MM/DD/YYYY):");


if (!isValidName(name)) {
    alert("Name is mandatory! Please enter your name.");
}

if (!isValidUsername(username)) {
    alert("Invalid username! Username should contain only letters, numbers, underscores, and be between 3 and 20 characters.");
}

if (!isValidEmail(email)) {
    alert("Invalid email address! Please enter a valid email.");
}

if (!isValidPhoneNumber(phoneNumber)) {
    alert("Invalid phone number! Please enter a valid phone number containing only digits and optional hyphens.");
}

if (!isValidDateOfBirth(dateOfBirth)) {
    alert("Invalid date of birth! Please enter a valid date in the format MM/DD/YYYY.");
}

