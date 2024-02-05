let taskCount = 0;

function addTask() {
    let taskInput = document.getElementById("task-input");
    let taskText = taskInput.value;
    let tasks = document.createElement("p");
    let taskCounter = document.createElement("h2");

    if (taskText.trim() === "") {
        return;
    }
    taskCount++;
    tasks.textContent = taskText;
    taskCounter.textContent = taskCount;
    document.querySelector(".task-list").appendChild(tasks);
    document.querySelector(".task-counter").appendChild(taskCounter);
    taskInput.value = "";
}

document.getElementById("task-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
})
