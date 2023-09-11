const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const link = document.querySelector("a");
function onLoginSubmit(event) {
    info.preventDefault();
    console.log(event);
}
//이벤트 리스너를 사용하면 object결과를 얻을 수 있다. 그 변수가 event
function linkClick(event){
    event.preventDefault();
    console.log(event)
}

loginForm.addEventListener("submit", onLoginSubmit)
link.addEventListener("click",linkClick);