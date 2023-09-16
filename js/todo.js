const toDoFrom =document.querySelector("#todo-form");
const toDoInput = toDoFrom.querySelector("input");
const toDolist = document.querySelector("#todo-list");

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function showToDo(newTodo){
    const li = document.createElement("li");
    const span =document.createElement("span");
    span.innerHTML = newTodo;
    const button= document.createElement("button");
    button.innerHTML="X";
    li.appendChild(span);
    li.appendChild(button);
    toDolist.appendChild(li);
    button.addEventListener("click",deleteToDo);
}

function toDoSubmit(event){
    event.preventDefault();
    const newTodo= toDoInput.value;
    toDoInput.value="";
    showToDo(newTodo);
}


toDoFrom.addEventListener("submit",toDoSubmit);
