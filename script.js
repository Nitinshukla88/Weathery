let button = document.getElementsByTagName("button");
let form = document.getElementsByTagName("input");

let city = function x() {
button[0].addEventListener("click", function(){
    return form[0].value;
});
}

console.log(city());

console.log(city);

const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Shimla%20India';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd669bc9c79mshb9ef3109ab02809p17c2bcjsn80263c2d2104',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};

async function get(){
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

get();

