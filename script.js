// alert ("hi")
async function fetchWeatherData(cityName){
	-let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=36e2398266aa66bb46a180c1e17cef3e`
	const response=await fetch(url)
	const data=await response.json();
	console.log(data.name)
}
// demo()
function fetchCity(){
	let cityName=document.getElementById("city_name");
	if (cityName.value==="") {
		alert("Enter your city name")
	} 
	else{
		fetchWeatherData(cityName.value);
		cityName.value="";
	}
	}
