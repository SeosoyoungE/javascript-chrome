const toDoFrom =document.querySelector("#todo-form");
const toDoInput = toDoFrom.querySelector("input");
const toDolist = document.querySelector("#todo-list");

function showToDo(newTodo){
    const li = document.createElement("li");
    const span =document.createElement("span");
    li.appendChild(span);
    span.innerHTML = newTodo;
    toDolist.appendChild(li);
}

function toDoSubmit(event){
    event.preventDefault();
    const newTodo= toDoInput.value;
    toDoInput.value="";
    showToDo(newTodo);
}

toDoFrom.addEventListener("submit",toDoSubmit);