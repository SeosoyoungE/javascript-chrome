const toDoFrom =document.querySelector("#todo-form");
const toDoInput = toDoFrom.querySelector("input");
const toDolist = document.querySelector("#todo-list");

const TODOS_KRY="todos"

let toDos =[]

function filterToDo(todo){
}

function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function makeToDo(newTodo){
    const li = document.createElement("li");
    li.id=newTodo.id;
    const span =document.createElement("span");
    span.innerHTML = newTodo.text;
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
    const newTodoObj={
        text:newTodo,
        id:Date.now()
    }
    toDos.push(newTodoObj);
    makeToDo(newTodoObj);
    saveToDos();
}

toDoFrom.addEventListener("submit",toDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KRY);

if(savedToDos){
    const parsedTodos=JSON.parse(savedToDos);
    toDos=parsedTodos;
    parsedTodos.forEach(makeToDo);
}