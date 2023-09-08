const h1=document.querySelector(".hello:first-child h1");

function handleh1Click() {
    h1.classList.toggle("clicked")
    // 토글함수로 아래내용 한줄로
    // const clickedClass = "clicked"
    // if(h1.classList.contains(clickedClass)){
    //     h1.classList.remove(clickedClass);
    // } else{
    //     h1.classList.add(clickedClass);
    // }
}

h1.addEventListener("click", handleh1Click);
