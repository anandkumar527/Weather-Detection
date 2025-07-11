// const button = document.getElementById("search-button");
// const input = document.getElementById("city-input");

// const cityName = document.getElementById('city-name');
// const cityTime = document.getElementById('city-time');
// const cityTemp = document.getElementById('city-temp');

// async function getdata(cityName) {
//     const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=83e7a90e7c79400592915740251107&q=${cityName}&aqi=yes`);
//     return promise.json();
// };

// button.addEventListener("click", async () => {
//     const value = input.value;
//     const result = await getdata(value);
//     cityName.innerText = `${result.location.name},${result.location.region},${result.location.country}`
//     cityName.innerText = result.location.localtime;
//     cityName.innerText = result.location.temp_c;
// });

const button = document.getElementById("search-button");
const input = document.getElementById("city-input");

const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');

async function getdata(city) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=83e7a90e7c79400592915740251107&q=${city}&aqi=yes`);
    return promise.json();
}

button.addEventListener("click", async () => {
    const value = input.value;
    if (!value) return alert("Please enter a city name!");

    try {
        const result = await getdata(value);
        cityName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`;
        cityTime.innerText = `Local Time: ${result.location.localtime}`;
        cityTemp.innerText = `Temperature: ${result.current.temp_c} °C`;
    } catch (error) {
        alert("City not found or API error!");
        console.error(error);
    }
});
