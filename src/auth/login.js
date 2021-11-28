/* 
    Login 처리 전반 
*/
function welcomLoginUser(userName) {
  loginDiv.classList.add("hidden");
  logoutDiv.classList.remove("hidden");
  todosDiv.classList.remove("hidden");

  welcomeUserMessage.innerHTML = `Hello! ${userName}`;
}

function getLogin(event) {
  event.preventDefault();

  const userName = loginInput.value;
  loginInput.value = "";
  localStorage.setItem("userName", userName);
  welcomLoginUser(userName);
}
