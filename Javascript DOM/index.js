document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");

    addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText != "") {
            const listItem = document.createElement("li");
            const taskContent = document.createElement("span");
            taskContent.textContent = taskText;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Done";
            deleteButton.addEventListener("click", function () {
                listItem.remove();
            });
            listItem.appendChild(taskContent);
            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);

            taskInput.value = "";
        }
    });

    taskInput.addEventListener("keydown", function(event) {
        if (event.key === 'Enter') {
            addButton.click();
        }
    })
})