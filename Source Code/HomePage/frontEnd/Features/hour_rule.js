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

// ----------------------------------------------------------

const hourBlocks = document.querySelectorAll('.hour-block');

hourBlocks.forEach(hourBlock => {
  hourBlock.addEventListener('click', handleHourBlockClick);
});

function handleHourBlockClick(event) {
  const hourBlock = event.target;
  const hour = hourBlock.getAttribute('data-hour');

  showColorPicker(hour);
}


function showColorPicker(hour) {
  const colorPicker = document.querySelector('.color-picker');
  const applyBtn = document.getElementById('apply-btn');


  applyBtn.removeEventListener('click', applyColor);
  applyBtn.addEventListener('click', function() {
    applyColor(hour);
  });


  colorPicker.style.display = 'flex';
}
function applyColor(hour) {
  const colorInput = document.getElementById('color');
  const tagInput = document.getElementById('tag');
  const selectedColor = colorInput.value;
  const selectedTag = tagInput.value;


  const hourBlock = document.querySelector(`[data-hour="${hour}"]`);
  hourBlock.style.backgroundColor = selectedColor;
  hourBlock.textContent = selectedTag;


  const colorPicker = document.querySelector('.color-picker');
  colorPicker.style.display = 'none';

  colorInput.value = '';
  tagInput.value = '';
}function applyColor(hour) {
  const colorInput = document.getElementById('color');
  const tagInput = document.getElementById('tag');
  const selectedColor = colorInput.value;
  const selectedTag = tagInput.value;


  const hourBlock = document.querySelector(`[data-hour="${hour}"]`);
  hourBlock.style.backgroundColor = selectedColor;
  hourBlock.textContent = selectedTag;


  const colorPicker = document.querySelector('.color-picker');
  colorPicker.style.display = 'none';

  colorInput.value = '';
  tagInput.value = '';
}
