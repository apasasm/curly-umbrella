function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  todoList = todoList.filter((targetTodo) => targetTodo.id !== parseInt(li.id));
  localStorage.setItem(TODO_LIST, JSON.stringify(todoList));
}

function printTodoItem(todoItem) {
  const li = document.createElement("li");
  li.id = todoItem.id;

  const sapnDeleteButton = document.createElement("span");
  sapnDeleteButton.innerText = "❌";
  sapnDeleteButton.addEventListener("click", deleteToDo);
  li.appendChild(sapnDeleteButton);

  const span = document.createElement("span");
  span.innerText = todoItem.value;
  span.classList.add("span-right");
  li.appendChild(span);

  todoUl.appendChild(li);
}

function printTodoList(todoList) {
  todoList.forEach((todoItem) => printTodoItem(todoItem));
}

function loadTodoList() {
  let savedTodoList = localStorage.getItem(TODO_LIST);
  if (savedTodoList) {
    const parsedTodoList = JSON.parse(savedTodoList);
    return parsedTodoList;
  } else {
    savedTodoList = [];
  }
  return savedTodoList;
}

function updateTodoList(newTodo) {
  todoList.push(newTodo);

  const newTodoList = JSON.stringify(todoList);
  localStorage.setItem(TODO_LIST, newTodoList);

  return printTodoItem(newTodo);
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

  return updateTodoList(newTodo);
}

const TODO_LIST = "todoList";
let todoList = loadTodoList();
if (todoList !== []) {
  printTodoList(todoList);
}
todosForm.addEventListener("submit", createTodoItem);
