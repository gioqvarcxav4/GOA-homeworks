document.getElementById("add-button").addEventListener("click", function(){
    const input = document.getElementById("todo-input");
    const errorMessage = document.getElementById("errorMessage")
    const taskText = input.value.trim();

    if(taskText === ''){
        errorMessage.textContent = "Input field empty"
        return;
    }
    else {
        const li = document.createElement("li");
        document.getElementById("todo-list").appendChild(li);
        input.value = '';
        errorMessage.textContent = ""

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("click", function(){
            span.classList.toggle("completed");
        })

        const span = document.createElement("span");
        span.textContent = taskText;
        span.classList.add("todo-text");

        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("task-buttons");

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function(){
        li.remove();
        })

        const editBtn = document.createElement("button");
        editBtn.classList.add("edit");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", function() {
        const newText = prompt("Edit your task:", span.textContent);
        if (newText !== null) { 
        const trimmedText = newText.trim();
        if (trimmedText !== "") {
        span.textContent = trimmedText;
          } else {
            alert("Task cannot be empty!");
          }
         }
       });


        buttonsDiv.appendChild(editBtn);
        buttonsDiv.appendChild(deleteBtn);

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(buttonsDiv);
    }
})

document.getElementById("todo-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.getElementById("add-button").click();
    }
});