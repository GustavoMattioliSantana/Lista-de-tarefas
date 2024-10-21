"use strict";
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
addTaskButton.addEventListener("click", () => {
    const task = taskInput.value;
    if (task) {
        const li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
        taskInput.value = ""; // Limpa o campo de entrada
    }
});
