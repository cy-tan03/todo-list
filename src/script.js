const taskList = document.querySelector(".task-list");
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const prioritySelect = document.getElementById("priority");
const addTaskBtn = document.getElementById("add-task");


addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    const priority = prioritySelect.value;

    if (title === "") {
        alert("Title is required.");
        return;
    }
    if (description === "") {
        alert("Description is required.");
        return;
    }

    const task = document.createElement("div");
    task.className = "task";
    task.innerHTML = `
        <div class="subtitle">
            <span class="t">${title}</span>
            <span class="prt">Priority: ${priority}</span>
            <span class='material-symbols-rounded add-icon' style='font-size:40px;'>add</span>
        </div>
        <div class="desc">
            <span class="d">${description}</span>
            
            <button class="complete-btn">Complete</button>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    taskList.appendChild(task);

    titleInput.value = "";
    descriptionInput.value = "";

    const completeBtn = task.querySelector(".complete-btn");
    completeBtn.addEventListener("click", toggleComplete);

    const editBtn = task.querySelector(".edit-btn");
    editBtn.addEventListener("click", editTask);

    const deleteBtn = task.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteTask);
///////
    const addIcon = task.querySelector(".add-icon");
    addIcon.addEventListener("click", addicon);

    const desc = task.querySelector(".desc");


}

function addicon(){
    const addIcon = this;
    const subtilte = addIcon.parentElement;
    const desc = subtilte.nextElementSibling;
   

    if(addIcon.innerHTML=="remove"){
        addIcon.innerHTML="add";
        addIcon.style.color="white";
        subtilte.style.color="white";
    }else{
        addIcon.innerHTML="remove";
        addIcon.style.color="#38FFFC";
        subtilte.style.color="#38FFFC";
    }


    if (desc.style.display === "none" || desc.style.display === "") {
        desc.style.display = "block";
    } else {
        desc.style.display = "none"; 
    }
}

function toggleComplete() {

    this.parentElement.parentElement.classList.toggle("completed");
}

function editTask() {
    const task = this.parentElement.parentElement;
    const t=task.querySelector(".t");
    const d=task.querySelector(".d");
    

    const title = t.textContent;
    const description = d.textContent;

    titleInput.value = title;
    descriptionInput.value = description;

    taskList.removeChild(task);
}

function deleteTask() {
    this.parentElement.parentElement.remove();
}




