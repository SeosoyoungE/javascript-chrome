const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginSubmit(event) {
    info.preventDefault();
    console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit)