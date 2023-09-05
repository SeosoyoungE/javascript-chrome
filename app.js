const title=document.querySelector(".hello:first-child h1");

function handleTitleClick() {
    title.style.color="green";
}

title.addEventListener("click", handleTitleClick)