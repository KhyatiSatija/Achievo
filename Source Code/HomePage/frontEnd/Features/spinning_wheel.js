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
const showMenu = (toggleId, navbarId) => {
    const toggle = document.getElementById(toggleId),
      navbar = document.getElementById(navbarId);
  
    if (toggle && navbar) {
      toggle.addEventListener('click', () => {
        /* Toggle the menu */
        navbar.classList.toggle('show-menu');
        /* Rotate toggle icon */
        toggle.classList.toggle('rotate-icon');
      });
  
      // Hide the menu when clicking outside the menu
      document.addEventListener('click', (event) => {
        const targetElement = event.target;
        if (!navbar.contains(targetElement) && !targetElement.matches(`#${toggleId}`) && navbar.classList.contains('show-menu')) {
          navbar.classList.remove('show-menu');
          toggle.classList.remove('rotate-icon');
        }
      });
    }
  };
  
  showMenu('nav-toggle', 'nav');
  
  
  
function myfunction() {
    var x = 1024;
    var y = 9999;
    var deg = Math.floor(Math.random() * (x - y)) + y; 
    document.getElementById('box').style.transform = "rotate("+deg+"deg)";

    var element = document.getElementById('mainbox');
    element.classList.remove('animate');
    setTimeout(function(){
        element.classList.add('animate');
        var valueList = ["Gaming","Homework","Sport","Sleep","Eat","Rest","Talk","Work",];
        var getValue = valueList[Math.floor(Math.random() * valueList.length)];
        // alert(getValue); 
    }, 1000);
}
function myfunction() {
    var x = 1024;
    var y = 9999;
    var deg = Math.floor(Math.random() * (x - y)) + y; 
    document.getElementById('box').style.transform = "rotate("+deg+"deg)";

    var element = document.getElementById('mainbox');
    element.classList.remove('animate');
    setTimeout(function(){
        element.classList.add('animate');
        var valueList = ["Gaming","Homework","Sport","Sleep","Eat","Rest","Talk","Work"];
        var getValue = valueList[Math.floor(Math.random() * valueList.length)];
        document.getElementById('quote').innerText = getQuote(getValue);
    }, 5000);
}

// Function to get the corresponding quote for the selected activity
function getQuote(activity) {
    switch (activity) {
        case "Gaming":
            return "Level up life, conquer virtual quests!";
        case "Homework":
            return "Learn smart, achieve dreams, shine bright!";
        case "Sport":
            return "Chase passions, get fit, live strong!";
        case "Sleep":
            return "Rest well, awake to conquer anew!";
        case "Eat":
            return "Nourish, delight, savor life's nourishment!";
        case "Rest":
            return "Recharge, find peace, conquer challenges ahead!";
        case "Talk":
            return "Speak kind, inspire hearts, create positive change!";
        case "Work":
            return "Passion fuels purpose, chase dreams relentlessly!";
        default:
            return "";
    }
}




function toggleDarkMode() {
  const body = document.body;
  const spacebt = document.querySelector('.spacebt');
  const radioInner = document.querySelector('.radio-inner');

  // Toggle the dark mode class on the body element
  body.classList.toggle('dark-mode');

  // Toggle the position of the radio button
  radioInner.style.transform = body.classList.contains('dark-mode')
    ? 'translateX(25px)'
    : '';

  // Optionally, you can change the text of the toggle button if needed
  // spacebt.innerText = body.classList.contains('dark-mode')
  //   ? 'Light Mode'
  //   : 'Dark Mode';
}

let subMenu = document.getElementById("subMenu");
        
function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}
