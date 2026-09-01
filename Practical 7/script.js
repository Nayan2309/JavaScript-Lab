let taskInput = document.getElementById("taskInput");

let addBtn = document.getElementById("addBtn");

let taskList = document.getElementById("taskList");

let emptyMessage = document.getElementById("emptyMessage");

let taskCount = document.getElementById("taskCount");



/* ADD TASK */

addBtn.addEventListener("click", addTask);


taskInput.addEventListener("keydown", function(event){

    if(event.key === "Enter"){

        addTask();

    }

});



function addTask(){

    let text = taskInput.value.trim();


    if(text === ""){

        alert("Please enter a task.");

        return;

    }


    // Create new list item using DOM

    let li = document.createElement("li");

    li.className = "task";


    // Create task text

    let taskText = document.createElement("span");

    taskText.className = "task-text";

    taskText.innerText = text;


    // Create action buttons

    let actions = document.createElement("div");

    actions.className = "actions";


    let editButton = document.createElement("button");

    editButton.className = "edit-btn";

    editButton.innerText = "✏️ Edit";


    let deleteButton = document.createElement("button");

    deleteButton.className = "delete-btn";

    deleteButton.innerText = "🗑️ Delete";


    // Add buttons inside actions

    actions.appendChild(editButton);

    actions.appendChild(deleteButton);


    // Add task text and actions inside li

    li.appendChild(taskText);

    li.appendChild(actions);


    // Add li to task list

    taskList.appendChild(li);


    // Clear input

    taskInput.value = "";

    taskInput.focus();


    updateTaskCount();


    updateEmptyMessage();



    /* EDIT */

    editButton.addEventListener("click", function(){

        let currentText =
            li.children[0].innerText;


        let newText =
            prompt("Edit your task:", currentText);


        if(newText === null){

            return;

        }


        newText = newText.trim();


        if(newText === ""){

            alert("Task cannot be empty.");

            return;

        }


        // DOM update

        li.children[0].innerText = newText;

    });



    /* DELETE */

    deleteButton.addEventListener("click", function(){

        let confirmDelete =
            confirm("Do you want to delete this task?");


        if(confirmDelete){

            // DOM traversal:
            // parentElement gives the <li>

            let taskItem =
                deleteButton.parentElement.parentElement;


            // Remove task from DOM

            taskList.removeChild(taskItem);


            updateTaskCount();

            updateEmptyMessage();

        }

    });

}



/* UPDATE TASK COUNT */

function updateTaskCount(){

    let totalTasks =
        taskList.children.length;


    taskCount.innerText =
        totalTasks +
        (totalTasks === 1 ? " Task" : " Tasks");

}



/* UPDATE EMPTY MESSAGE */

function updateEmptyMessage(){

    if(taskList.children.length === 0){

        emptyMessage.style.display = "block";

    }

    else{

        emptyMessage.style.display = "none";

    }

}