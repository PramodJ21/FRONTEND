document.addEventListener("DOMContentLoaded", function() {
    const addTaskButton = document.getElementById("add-task");
    const taskInput = document.getElementById("new-task");
    const taskList = document.getElementById("task-list");
    const saveTasksButton = document.getElementById("save-tasks");

    addTaskButton.addEventListener("click", addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const taskItem = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "task-checkbox";

        const taskTextNode = document.createElement("span");
        taskTextNode.className = "task-text";
        taskTextNode.textContent = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-task";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            taskList.removeChild(taskItem);
        });

        const taskActions = document.createElement("div");
        taskActions.className = "task-actions";
        taskActions.appendChild(checkbox);
        taskActions.appendChild(deleteButton);

        taskItem.appendChild(taskTextNode);
        taskItem.appendChild(taskActions);

        taskList.appendChild(taskItem);

        taskInput.value = ""; // Clear the input field
    }

    saveTasksButton.addEventListener("click", function() {
        const tasks = [];
        taskList.querySelectorAll("li").forEach(function(taskItem) {
            const taskText = taskItem.querySelector(".task-text").textContent;
            const isCompleted = taskItem.querySelector(".task-checkbox").checked;
            tasks.push({ text: taskText, completed: isCompleted });
        });
        console.log("Tasks to save:", tasks);
        // You can save the tasks to a database or local storage here.
    });
});
