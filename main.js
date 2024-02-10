let taskCount = 0;

function addTask() {
    let taskInput = document.getElementById("input-value");
    let taskText = taskInput.value;
    let tasks = document.createElement("h2");
    let taskCounter = document.createElement("h3");

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

document.getElementById("input-value").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
})
