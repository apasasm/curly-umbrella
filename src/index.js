const loginDiv = document.querySelector("#loginDiv");
const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginInput");
const userName = localStorage.getItem("userName");
//
const logoutDiv = document.querySelector("#logoutDiv");
const logoutButton = document.querySelector("#logoutButton");
//
const welcomeUserMessage = document.querySelector("#welcomeUserMessage");
//
const todosDiv = document.querySelector("#todosDiv");
const todosForm = document.querySelector("#todosForm");
const todoUl = document.querySelector("#todoUl");
//
const OPENWEATHERMAP_API_KEY = "ef2a4cdc342dec8010108c89c130b596";
const MESSAGE_GEOERROR = "Cant't fidn you. No Weather for you.";
const weatherCity = document.querySelector("#weatherCity");
const weatherName = document.querySelector("#weatherName");
