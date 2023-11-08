const toDoFrom =document.querySelector("#todo-form");
const toDoInput = toDoFrom.querySelector("input");
const toDolist = document.querySelector("#todo-list");

const TODOS_KRY="todos"

let toDos =[]

function saveToDos(){ //localStorage에 변경사항을 저장
    localStorage.setItem("todos",JSON.stringify(toDos));
}

function deleteToDo(event){ //todolist삭제
    const li = event.target.parentElement;
    li.remove();
    toDos=toDos.filter(toDo=> toDo.id!==parseInt(li.id));
    saveToDos()
}

function makeToDo(newTodo){ //todolist html요소 만들기
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

function toDoSubmit(event){ //todo추가(submit)
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

if(savedToDos){//저장된 todo불러오기
    const parsedTodos=JSON.parse(savedToDos);
    toDos=parsedTodos;
    parsedTodos.forEach(makeToDo);
}
//아무내용 없을때 hidden
if(localStorage.getItem("todos")){
    toDolist.classList.add("hidden")
}else{
    toDolist.classList.remove("hidden")
}
