const API_KEY="d48720e512f2cc336320189954a85820"

function onGeoOk(position){
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}6&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data=>{
        const weather=document.querySelector("#weather span:last-child");
        const city=document.querySelector("#weather span:first-child");
        city.innerHTML=data.name+" :";
        weather.innerHTML=`${data.weather[0].main}/${data.main.temp}`});
}
function onGeoError(){
    alert("can't find you!!")
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)