function addTask() {
    var taskInput = document.getElementById("task");
    var taskList = document.getElementById("taskList");
    
    if (taskInput.value !== "") {
        var li = document.createElement("li");
        li.innerHTML = taskInput.value + '<button onclick="removeTask(this)">Remove</button>';
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function removeTask(item) {
    var taskList = document.getElementById("taskList");
    taskList.removeChild(item.parentNode);
}