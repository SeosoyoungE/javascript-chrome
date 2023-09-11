const loginForm= document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function loginBtnClick(){
    console.log("hello ",loginInput.value)
}
loginButton.addEventListener("click",loginBtnClick)