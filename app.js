//console.log("Hello this is my testing");



const apikey ="";
const apiUrl = "";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector("weather-icon");

async function checkWeather(city){
  const response = await fetch(apiUrl  + city + `&appid=${apikey}`);
  var data = await response.json();


console.log(data);
   document.querySelector(".city").innerHTML = data.name;
   document.querySelector(".temp").innerHTML = Math.round()  + ".c";
   document.querySelector(".humadity").innerHTML = data.main.humidity + "%";
   document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

   if(data.weather[0].main == "Clouds"){
       weatherIcon.src = "images/clouds.png"
   }
   else if(data.weather[0].main == "Clear"){
   }
   else if(data.weather[0].main == "Clear"){
   } 
   else if(data.weather[0].main == "Clear"){
   } 
   else if(data.weather[0].main == "Clear"){
   }


   document.querySelector(".weather").style.display="block";

  searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
  })


} 