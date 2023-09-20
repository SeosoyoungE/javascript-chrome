const images =[
    "1.jpg","2.jpg","3.jpg"
]
const chosenImg = images[Math.floor(Math.random()*images.length)];
const bgImg=document.createElement("img");

bgImg.src=`img/${chosenImg}`
bgImg.classList.add("bgImg");

document.body.prepend(bgImg);