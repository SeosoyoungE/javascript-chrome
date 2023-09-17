const toDoFrom =document.querySelector("#todo-form");
const toDoInput = toDoFrom.querySelector("input");
const toDolist = document.querySelector("#todo-list");

const TODOS_KRY="todos"

let toDos =[]

function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
}

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
    toDos.push(newTodo);
    showToDo(newTodo);
    saveToDos();
}

toDoFrom.addEventListener("submit",toDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KRY);

if(savedToDos){
    const parsedTodos=JSON.parse(savedToDos);
    toDos=parsedTodos;
    parsedTodos.forEach(showToDo);
}