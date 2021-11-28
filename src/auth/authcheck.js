/* 
    첫 방문 시 체크 
*/

if (userName) {
  welcomLoginUser(userName);
} else {
  welcomGuestUser();
}

loginForm.addEventListener("submit", getLogin);
logoutButton.addEventListener("click", getLogout);
