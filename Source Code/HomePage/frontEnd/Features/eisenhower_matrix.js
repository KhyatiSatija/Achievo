let showInputBox = false;

function adjustMatrixContainerHeight() {
    let quadrants = document.querySelectorAll(".quadrant");
    let matrixContainer = document.querySelector(".matrix-container");

    let totalHeight = 0;
    quadrants.forEach(quadrant => {
       totalHeight += quadrant.offsetHeight; // Use offsetHeight to consider padding and borders
        const tasks = quadrant.querySelectorAll(".task");
        tasks.forEach(task => {
            totalHeight += task.offsetHeight; // Include the height of each task
        });
    });

}


// Object to store showInputBox for each quadrant
const showInputBoxes = {};

function addTask(quadrantId) {
    const list = document.getElementById(quadrantId);
    const showInputBox = showInputBoxes[quadrantId];

    if (!showInputBox) {
        const newTaskInput = document.createElement("input");
        newTaskInput.type = "text";
        newTaskInput.className = "task-input";
        newTaskInput.placeholder = "Enter new task";
        const headerElement = list.querySelector(".add-task-btn");
        list.insertBefore(newTaskInput, headerElement.nextSibling);

        // Add focus to the input box so that the cursor starts blinking
        newTaskInput.focus();

        newTaskInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                const taskText = newTaskInput.value.trim();

                // Check if the task is unfilled or empty
                if (!taskText) {
                    alert("Please fill in the task before adding it.");
                    return; // Exit the function without adding the task
                }

                const newTask = document.createElement("div");
                newTask.className = "task"; 
                newTask.innerHTML = `
                    <input type="checkbox" class="task-checkbox" id="task${list.children.length}" name="task${list.children.length}">
                    <label for="task${list.children.length}">${taskText}</label>
                `;
                const dateInput = document.createElement("input");
                dateInput.type = "date";
                dateInput.className = "task-input";
           
             
            
                
                // Add delete button
                addDeleteButton(newTask);

                newTask.style.marginTop = "3px";
                list.insertBefore(newTask, headerElement.nextSibling); // Insert new task below the header
                list.removeChild(newTaskInput); // Remove the input box
                showInputBoxes[quadrantId] = false; // Update showInputBox for the quadrant
                adjustMatrixContainerHeight();

                const label = newTask.querySelector("label");

label.addEventListener("click", function (event) {
event.preventDefault();

// Set the label's content to be editable
label.contentEditable = "true";

// Set the focus on the label's text for editing
label.focus();
});

label.addEventListener("keydown", function (event) {
// Check if the Enter key is pressed
if (event.keyCode === 13) {
    event.preventDefault();
    // Save the new text
    const newText = label.innerText.trim();
    // Make the label non-editable again
    label.contentEditable = "false";
    // You can perform any saving logic here, for example, update your database or store the data elsewhere.
    // For this example, I'll just log the new text to the console.
    console.log("New text:", newText);
}
});

                // Add event listener to the new checkbox
                const checkbox = newTask.querySelector(".task-checkbox");
                checkbox.addEventListener("change", function () {
                    const label = this.nextElementSibling;
                    if (this.checked) {
                        label.style.textDecoration = "line-through";
                    } else {
                        label.style.textDecoration = "none";
                    }
                });
            }
        });

        showInputBoxes[quadrantId] = true; // Set showInputBox to true for the quadrant
    }
}


function addDeleteButton(task) {
const deleteButton = document.createElement("button");
deleteButton.className = "delete-button";
deleteButton.innerHTML = "x";
task.appendChild(deleteButton);
deleteButton.addEventListener("click", function () {
    task.parentNode.removeChild(task);
    adjustMatrixContainerHeight();
});
}
// Function to ask for confirmation and reset the quadrant
function confirmReset(quadrantId) {
const isConfirmed = confirm("Are you sure you want to reset this quadrant? All tasks will be removed.");

if (isConfirmed) {
const list = document.getElementById(quadrantId);
const tasks = list.querySelectorAll(".task");
tasks.forEach(task => list.removeChild(task)); // Remove all tasks from the quadrant
adjustMatrixContainerHeight(); // Reset the quadrant size

// Also, reset showInputBoxes to false to enable adding new tasks
showInputBoxes[quadrantId] = false;
}
}



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
        
function toggleMenu(){
    subMenu.classList.toggle("open-menu");
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
  }