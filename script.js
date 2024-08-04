let button = document.getElementsByTagName("button");
let form = document.getElementsByTagName("input");


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
    let parentdiv = document.querySelector(".weatherdetails");
    let loadingdiv = document.createElement("div");
    let status = document.createElement("div");
    status.innerHTML = "Processing...";
    status.classList.add("processing");
    parentdiv.appendChild(status)
    loadingdiv.classList.add("loading");
    parentdiv.appendChild(loadingdiv);
  });

async function get(url) {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    const data = JSON.parse(result);
    console.log(data);
    console.log(data.current.cloud);    
    console.log(data.current.condition.text);    
    console.log(data.current.dewpoint_c);    
    console.log(data.current.gust_mph);    
    console.log(data.current.heatindex_c);    
    console.log(data.current.humidity);    
    console.log(data.current.temp_c);    
    console.log(data.current.precip_mm);    
    console.log(data.current.wind_mph);    
  } catch (error) {
    console.error(error);
  }
}




