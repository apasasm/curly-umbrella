/* 
    첫 방문 시 체크 
*/

if (userName) {
  welcomLoginUser();
} else {
  welcomGuestUser();
}

loginForm.addEventListener("submit", loginAction);
logoutButton.addEventListener("click", logoutAction);
