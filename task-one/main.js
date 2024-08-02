const taskInput = document.getElementById('taskInput');
const tasklist = document.getElementById('taskList');

function addTask(){
    const tasktext = taskInput.value; 
    if (tasktext.trim() === ""){
        alert("Please Enter Task")
        return;
    }

  
    const listitem = document.createElement('li');
    listitem.textContent = tasktext;
    listitem.style.cursor = "Pointer";
    listitem.addEventListener("click" , function(){
       this.classList.toggle("completed");
    });

     // Add delete button to the list item
     const deleteButton = document.createElement('button');
     deleteButton.textContent = '❌';
     deleteButton.addEventListener('click', function(event) {
         event.stopPropagation(); // Prevent li click event from firing
         tasklist.removeChild(listitem);
     });
     listitem.appendChild(deleteButton);

    tasklist.appendChild(listitem)
    taskInput.value = "";
    
}