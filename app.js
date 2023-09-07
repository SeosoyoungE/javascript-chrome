const h1=document.querySelector(".hello:first-child h1");

console.dir(h1)

function handleh1Click() {
    h1.style.color="green";
}

h1.onclick=handleh1Click;
h1.addEventListener("mouseenter", function(){
    h1.innerText="Mouse is here!"
})
h1.addEventListener("mouseleave", function(){
    h1.innerText="Mouse is gone!"
})

window.addEventListener("resize", function(){
    document.body.style.backgroundColor="tomato";
})
window.addEventListener("copy",function(){
    alert("copy!!!");
})
window.addEventListener("offline",function(){
    alert("SOS no WIFI");
})
window.addEventListener("online",function(){
    alert("all good")
})