const button = document.getElementById("search-button");
const input = document.getElementById("city-input");

const cityName = document.getElementById("city-name");
const citytime = document.getElementById("city-time");
const citytemp = document.getElementById("city-temp");

async function getData(cityName){
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=e89d5614c6db4d9a857150745240712&q=${cityName}&aqi=yes`
    );
    return await promise.json();
}

button.addEventListener("click", async () =>{
    const value = input.value;
    const result = await getData(value);
    cityName.innerText = `${result.location.name}, ${result.location.region},${result.location.country}`;
    citytime.innerText = result.current.last_updated;
    citytemp.innerText = result.current.temp_c;

});