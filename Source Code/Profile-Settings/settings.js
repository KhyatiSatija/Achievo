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


