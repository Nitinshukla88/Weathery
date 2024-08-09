let button = document.getElementsByTagName("button");
let form = document.getElementsByTagName("input");
let pushed = false;

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "d669bc9c79mshb9ef3109ab02809p17c2bcjsn80263c2d2104",
    "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
  },
};

button[0].addEventListener("click", function () {
  if(pushed == true){
    document.querySelector(".weatherdetails").remove();
  }
  let city = form[0].value;
  let parentdiv = document.querySelector(".maincontainer");
  parentdiv.style.alignItems = "center";
  let loadingdiv = document.createElement("div");
  let status = document.createElement("div");
  status.innerHTML = "Processing...";
  status.classList.add("processing");
  loadingdiv.classList.add("loading");
  parentdiv.appendChild(status);
  parentdiv.appendChild(loadingdiv);

  setTimeout(() => {
    status.remove();
    loadingdiv.remove();
    parentdiv.style.alignItems = "";
    let weather_holder = document.createElement("div");
    weather_holder.classList.add("weatherdetails");
    parentdiv.appendChild(weather_holder);
    pushed = true;


    let weatherBox = document.querySelector(".weatherdetails");
    let weatherCity = document.createElement("div");
    weatherCity.classList.add("city");
    weatherBox.appendChild(weatherCity);
    let City = city.charAt(0).toUpperCase() + city.slice(1);
    document.querySelector(".city").innerHTML = `${City} Weather Details`;
    document.querySelector(".city").style.color = "purple";

    for (i = 0; i < 9; i++) {
      let ele = document.createElement("div");
      ele.classList.add("detailsBoxes");
      weatherBox.appendChild(ele);
    }
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}%20`;
    get(url);
  }, 2500);
});

async function get(url) {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    const data = JSON.parse(result);
    let weatherElements = document.querySelectorAll(".detailsBoxes");
    weatherElements[0].innerHTML = `Weather Condition: ${data.current.condition.text}`;
    setTimeout(() => {
      weatherElements[1].innerHTML = `DewPoint: ${data.current.dewpoint_c}`;
      weatherElements[2].innerHTML = `Gust(miles per hour): ${data.current.gust_mph}`;
    }, 1000);
    setTimeout(() => {
    weatherElements[3].innerHTML = `HeatIndex(in celcius): ${data.current.heatindex_c}`;
    }, 1500);
    setTimeout(() => {
      weatherElements[4].innerHTML = `Humidity: ${data.current.humidity}`;
      weatherElements[5].innerHTML = `Temperature(in celcius): ${data.current.temp_c}`;
    }, 1800);
    setTimeout(() => {
      weatherElements[6].innerHTML = `Precipitation(in mm): ${data.current.precip_mm}`;
      weatherElements[7].innerHTML = `Cloud(in atros): ${data.current.cloud}`;
      weatherElements[8].innerHTML = `Wind Speed(miles per hour): ${data.current.wind_mph}`;
    }, 2500);
  } catch (error) {
    console.error(error);
  }
}
