let taskCount = 0;

function addTask() {
    let taskInput = document.getElementById("input-value");
    let taskValue = taskInput.value;
    
    if (taskValue.trim() === "") {
        return;
    }
    taskCount++;
    
    let taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");
    
    let textContainer = document.createElement("div");
    textContainer.classList.add("text-container");
    
    let taskCounter = document.createElement("span");
    taskCounter.classList.add("task-counter");
    taskCounter.textContent = taskCount;
    
    let tasks = document.createElement("span");
    tasks.classList.add("task-text");
    tasks.textContent = taskValue;
    
    taskContainer.appendChild(taskCounter);
    taskContainer.appendChild(textContainer);
    textContainer.appendChild(tasks);

    document.querySelector("#new-task").appendChild(taskContainer);
    taskInput.value = "";
}

document.getElementById("input-value").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
})

