const h1=document.querySelector(".hello:first-child h1");



function handleh1Click() {
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor!=="blue"){
        newColor="blue";
    } else{
        newColor="tomato";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleh1Click);
