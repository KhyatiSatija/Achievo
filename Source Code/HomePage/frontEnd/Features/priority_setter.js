document.addEventListener('DOMContentLoaded', function () {
    // Dark mode toggle
    const darkModeToggle = document.querySelector('.radio-btn');
    const body = document.body;
    const radioInner = document.querySelector('.radio-inner');
  
    darkModeToggle.addEventListener('click', function () {
      radioInner.classList.toggle('active');
      body.classList.toggle('dark-mode');
      // Additional actions when dark mode toggles
    });
  
    // Navigation link color change
    const linkColor = document.querySelectorAll('.nav__link');
  
    function colorLink() {
      linkColor.forEach(l => l.classList.remove('active-link'));
      this.classList.add('active-link');
    }
  
    linkColor.forEach(l => l.addEventListener('click', colorLink));
  
    // Show/Hide sub-menu
    const subMenu = document.getElementById("subMenu");
  
    function toggleMenu() {
      subMenu.classList.toggle("open-menu");
    }
  
    // Dark mode toggle using plain JavaScript
    function toggleDarkMode() {
      body.classList.toggle('dark-mode');
      radioInner.style.transform = body.classList.contains('dark-mode')
        ? 'translateX(25px)'
        : '';
      // Additional actions when dark mode toggles
    }
  
    // Dark mode toggle click event
    const darkModeToggleBtn = document.querySelector('.radio-btn');
    darkModeToggleBtn.addEventListener('click', toggleDarkMode);
  
    // Function to show hidden menu
    function showMenu(toggleId, navbarId) {
      const toggle = document.getElementById(toggleId);
      const navbar = document.getElementById(navbarId);
  
      if (toggle && navbar) {
        toggle.addEventListener('click', () => {
          // Show menu
          navbar.classList.toggle('show-menu');
          // Rotate toggle icon
          toggle.classList.toggle('rotate-icon');
        });
      }
    }
  
    // Call the showMenu function with your specific IDs
    showMenu('nav-toggle', 'nav');
  });
  
  
  let subMenu = document.getElementById("subMenu");
          
  function toggleMenu(){
      subMenu.classList.toggle("open-menu");
  }
  
  






// --------------------------------------------------------------------------
function redirect(redirectSite) {
    console.log("redirectSite", window.location.host + `/${redirectSite}`);
    window.location.href = window.location.origin + `/${redirectSite}`;
  }
  
  function validateLogin() {
    const username = document.getElementById("username").value;
    const userpassword = document.getElementById("userpassword").value;
    const userdata = {
      username: username,
      password: userpassword,
    };
    console.log(JSON.stringify(userdata));
    const call = {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    };
  
    fetch("http://localhost:3000/validateLogin", call)
      .then((data) => {
        console.log("Inside Fetch");
        if (!data.ok) {
          throw Error(data.status);
        }
        if (data.ok) {
          alert("Login details verified");
          redirect(todo);
        }
      })
      .then((update) => {
        console.log(update);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  
  function addItem(category) {
    const taskInput = document.getElementById(category + "-task");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;
  
    const list = document.getElementById(category + "-list");
    const listItem = document.createElement("li");
    /*listItem.textContent = taskText;*/
    listItem.className = "task-item";
    listItem.innerHTML = `
        <input type="text" value="${taskText}">
        <button class="delete-button" onclick="removeItem(this)">X</button>
    `;
    list.appendChild(listItem);
    taskInput.value = "";
  }
  
  function removeItem(button) {
    const listItem = button.parentElement;
    listItem.remove();
  }
  
  // Get all the star rating labels
  const starRatingLabels = document.querySelectorAll(".star-rating label");
  
  // Add event listeners for mouseenter and mouseleave
  starRatingLabels.forEach((label) => {
    label.addEventListener("mouseenter", handleMouseEnter);
    label.addEventListener("mouseleave", handleMouseLeave);
  });
  
  function handleMouseEnter(event) {
    // Get the current hovered label and all labels before it
    const hoveredLabel = event.target;
    const previousLabels = getAllPreviousLabels(hoveredLabel);
  
    // Change the color of stars before the hovered label
    previousLabels.forEach((label) => {
      label.style.color = "orange";
    });
  }
  
  function handleMouseLeave(event) {
    // Get all the star rating labels and reset their color
    starRatingLabels.forEach((label) => {
      label.style.color = "#ccc";
    });
  }
  
  function getAllPreviousLabels(label) {
    // Get all the labels before the current label
    const previousLabels = [];
    let currentLabel = label.previousElementSibling;
    while (currentLabel) {
      previousLabels.push(currentLabel);
      currentLabel = currentLabel.previousElementSibling;
    }
    return previousLabels;
  }
  
  window.onload = function () {
    //Get All Redirect Buttons
    const buttons = document.querySelectorAll(".nav-button");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        console.log('button.id', button.id)
        const redirectSite = button.id;
        redirect(`app/${redirectSite}`);
      });
    });
  };
  