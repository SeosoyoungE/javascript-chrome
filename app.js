const title=document.querySelector(".hello:first-child h1");

console.dir(title)

function handleTitleClick() {
    title.style.color="green";
}

title.addEventListener("click", handleTitleClick)
title.addEventListener("mouseenter", function(){
    title.innerText="Mouse is here!"
})
title.addEventListener("mouseleave", function(){
    title.innerText="Mouse is gone!"
})