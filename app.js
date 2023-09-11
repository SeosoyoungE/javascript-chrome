const loginForm= document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function loginBtnClick(){
    const name = loginInput.value
    
        console.log("hello ",name)
   
}
loginButton.addEventListener("click",loginBtnClick)