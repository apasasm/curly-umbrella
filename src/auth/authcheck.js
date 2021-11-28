const loginDiv = document.querySelector("#loginDiv");
const logoutDiv = document.querySelector("#logoutDiv");
const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginInput");
const logoutButton = document.querySelector("#logoutButton");
const welcomeUserMessage = document.querySelector("#welcomeUserMessage");

/* 
    첫 방문 시 체크 
*/
const userName = localStorage.getItem("userName");
if (userName) {
  welcomLoginUser();
} else {
  welcomGuestUser();
}

loginForm.addEventListener("submit", loginAction);
logoutButton.addEventListener("click", logoutAction);
