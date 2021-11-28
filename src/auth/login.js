/* 
    Login 처리 전반 
*/
function welcomLoginUser() {
  loginDiv.classList.add("hidden");
  logoutDiv.classList.remove("hidden");
  welcomeUserMessage.innerHTML = `Hello! ${userName}`;
}

function loginAction(event) {
  event.preventDefault();

  const userName = loginInput.value;
  loginInput.value = "";
  localStorage.setItem("userName", userName);
  welcomLoginUser();
}
