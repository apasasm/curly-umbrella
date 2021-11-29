/* 
    Logout 처리 전반 
*/
function welcomGuestUser() {
  loginDiv.classList.remove("hidden");
  logoutDiv.classList.add("hidden");
  todosDiv.classList.add("hidden");
}

function getLogout() {
  localStorage.removeItem("userName");
  welcomGuestUser();
}
