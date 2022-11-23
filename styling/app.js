const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
const weather = document.querySelector('#weather');
const form = document.querySelector('#form');
const search = document.querySelector('#search');
// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
// const IMG_URl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const getWeather = async(city) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    return showWeather(data);

}

const showWeather = (data) =>{
    console.log(data);
    weather.innerHTML = 
        `
        
        <div>
            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp} °C</h2>
            <h4>${data.weather[0].main}</h4>
        </div>

        `
}

form.addEventListener(
    "submit",
    (e) => {
        getWeather(search.value);
        e.preventDefault();
    }
)
