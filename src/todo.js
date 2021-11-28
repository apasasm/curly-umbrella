// function todoDelete(event) {
//     event.preventDefault();
//     console.log("todoDelete");
// }

// function createTodoElement(todo) {
//     console.log("createTodoElement");
//     const li = document.createElement("li");
//     li.innerText = todo
// }
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  todoList = todoList.filter((todo) => todo.id !== parseInt(li.id));
  localStorage.setItem(TODO_LIST, todoList);
}

function createTodoElement(todo) {
  const li = document.createElement("li");
  li.id = todo.id;

  const span = document.createElement("span");
  span.innerText = todo.text;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  todoUl.appendChild(li);
}

function printTodoList(todoList) {
  console.log("printTodos");
  todoList = loadTodoList();
  todoList.forEach((element) => createTodoElement(element));
}

function loadTodoList() {
  console.log("loadTodoList");
  let savedTodoList = localStorage.getItem(TODO_LIST);
  if (savedTodoList) {
    savedTodoList = JSON.parse(savedTodoList);
  } else {
    savedTodoList = [];
  }
  return savedTodoList;
}

function updateTodoList(todo) {
  todoList = loadTodoList();
  console.log("updateTodoList : ", todoList);
  console.log(typeof todoList);

  todoList.push(todo);
  console.log("todoList : ", todoList);

  const newTodoList = JSON.stringify(todoList);
  localStorage.setItem(TODO_LIST, newTodoList);
  printTodoList();
}

function createTodoItem(event) {
  event.preventDefault();
  const todoValue = todosInput.value;
  const todoDate = new Date().getTime();
  const todo = {
    id: todoDate,
    username: userName,
    value: todoValue,
  };

  todosInput.value = "";
  return updateTodoList(todo);
}

let todoList = [];
printTodoList();
todosDiv.addEventListener("submit", createTodoItem);
