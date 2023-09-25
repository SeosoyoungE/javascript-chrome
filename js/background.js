const images =[
    "1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg" 
]
const chosenImg = images[Math.floor(Math.random()*images.length)];
const bgImg=document.createElement("img");

bgImg.src=`img/${chosenImg}`
bgImg.classList.add("bgImg");

document.body.prepend(bgImg);