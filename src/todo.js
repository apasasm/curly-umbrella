function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  todoList = todoList.filter((targetTodo) => targetTodo.id !== parseInt(li.id));
  localStorage.setItem(TODO_LIST, todoList);
}

function createTodoElement(todoItem) {
  const li = document.createElement("li");
  li.id = todoItem.id;

  const span = document.createElement("span");
  span.innerText = todoItem.value;

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "❌";
  deleteButton.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(deleteButton);
  todoUl.appendChild(li);
}

function printTodoList(todoList) {
  todoList.forEach((todoItem) => createTodoElement(todoItem));
}

function loadTodoList() {
  let savedTodoList = localStorage.getItem(TODO_LIST);
  if (savedTodoList) {
    savedTodoList = JSON.parse(savedTodoList);
  } else {
    savedTodoList = [];
  }
  return savedTodoList;
}

function updateTodoList(newTodo) {
  //   todoList = loadTodoList();
  todoList.push(newTodo);

  const newTodoList = JSON.stringify(todoList);
  localStorage.setItem(TODO_LIST, newTodoList);
  printTodoList(newTodoList);
}

function createTodoItem(event) {
  event.preventDefault();
  const todoValue = todosInput.value;
  const todoDate = new Date().getTime();
  const newTodo = {
    id: todoDate,
    username: userName,
    value: todoValue,
  };

  todosInput.value = "";
  updateTodoList(newTodo);
  return;
}

let todoList = loadTodoList();
if (todoList !== []) {
  printTodoList(todoList);
}
// printTodoList();
todosDiv.addEventListener("submit", createTodoItem);
