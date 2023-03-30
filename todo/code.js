const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", () => {
  const todoText = todoInput.value;
  if (todoText === "") return;
  const todoItem = document.createElement("li");
  todoItem.className = "todoItem";
  const todoSpan = document.createElement("span");
  todoSpan.textContent = todoText;
  todoItem.appendChild(todoSpan);
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    todoList.removeChild(todoItem);
  });
  todoItem.appendChild(deleteBtn);
  todoList.appendChild(todoItem);
  todoInput.value = "";
});
clearAllBtn.addEventListener("click", () => {
    while (todoList.firstChild) {
      todoList.removeChild(todoList.firstChild);
    }
  });
  