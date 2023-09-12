const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden"
const USERNAME_KEY="name"

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const name=loginInput.value;
    localStorage.setItem(USERNAME_KEY,name);
    paintGreeting(name);
}
function paintGreeting(name){
    greeting.innerHTML=`Hello ${name}`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const saveUserName=localStorage.getItem(USERNAME_KEY)

if(saveUserName===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
}else{
    paintGreeting(saveUserName);
}