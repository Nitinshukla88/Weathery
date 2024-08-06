let button = document.getElementsByTagName("button");
let form = document.getElementsByTagName("input");
let weatherElements = document.querySelectorAll(".detailsBoxes");

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "d669bc9c79mshb9ef3109ab02809p17c2bcjsn80263c2d2104",
    "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
  },
};

button[0].addEventListener("click", function () {
    let city = form[0].value;
    const url =
    `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}%20`;
    get(url);
    let parentdiv = document.querySelector(".maincontainer");
    let newdiv = document.createElement("div");
    newdiv.classList.add("weatherdetails");
    // let parentddiv = document.querySelector(".weatherdetails");
    let weatherCity = document.querySelector(".city");
    let City = city.charAt(0).toUpperCase() + city.slice(1);
    weatherCity.innerHTML = `${City} Weather Details`;
    let loadingdiv = document.createElement("div");
    let status = document.createElement("div");
    status.innerHTML = "Processing...";
    status.classList.add("processing");
    // parentdiv.style.flexDirection = "row";
    // parentdiv.appendChild(status)
    // loadingdiv.classList.add("loading");
    // parentdiv.appendChild(loadingdiv);
  });

async function get(url) {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    const data = JSON.parse(result);
    console.log(data);
    weatherElements[0].innerHTML = `Weather Condition: ${data.current.condition.text}`;
    weatherElements[1].innerHTML = `DewPoint: ${data.current.dewpoint_c}`;
    weatherElements[2].innerHTML = `Gust(miles per hour): ${data.current.gust_mph}`;
    weatherElements[3].innerHTML = `HeatIndex(in celcius): ${data.current.heatindex_c}`;
    weatherElements[4].innerHTML = `Humidity: ${data.current.humidity}`;
    weatherElements[5].innerHTML = `Temperature(in celcius): ${data.current.temp_c}`;   
    weatherElements[6].innerHTML = `Precipitation(in mm): ${data.current.precip_mm}`;
    weatherElements[7].innerHTML = `Cloud(in atros): ${data.current.cloud}`;
    weatherElements[8].innerHTML = `Wind Speed(miles per hour): ${data.current.wind_mph}`;
  } catch (error) {
    console.error(error);
  }
}




