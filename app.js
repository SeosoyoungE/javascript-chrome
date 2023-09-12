const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden"

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.toggle(HIDDEN_CLASSNAME);
    const name=loginInput.value;
    localStorage.setItem("name",name);
    greeting.innerHTML=`Hello ${name}`;
    greeting.classList.toggle(HIDDEN_CLASSNAME)
}

loginForm.addEventListener("submit", onLoginSubmit)
