let button = document.getElementsByTagName("button");
let form = document.getElementsByTagName("input");
let msg = document.querySelector(".processing");


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
    loadingdiv.classList.add("loading");
    parentdiv.appendChild(loadingdiv);
    msg.style.color = "white";
  });

async function get(url) {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    const data = JSON.parse(result);
    console.log(data);
    console.log(data.current.temp_c);
  } catch (error) {
    console.error(error);
  }
}




