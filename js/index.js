
const APP_ID = 'b840ced4bd2f60007d5477784783e917';
const DEFAULT_VALUE ='--';
const searchinput = document.querySelector('#search-input');
const cityName = document.querySelector('.cityname')
const weatherState = document.querySelector('.weather-state')
const weatherIcon = document.querySelector('.weather-icon')
const temperature = document.querySelector('.temperature')

const sunrise = document.querySelector('.sunrise')
const sunset = document.querySelector('.sunset')
const humidity = document.querySelector('.humidity');
const winSpeed = document.querySelector('.wind-speed')

searchinput.addEventListener('change', (e) =>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&units=metric&lang=vi`)
    .then(async res => {
        const data = await res.json();
        console.log('[Search Input]',data);
        cityName.innerHTML = data.name || DEFAULT_VALUE
        weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE
        weatherIcon.setAttribute('src',`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        temperature.innerHTML =Math.round(data.main.temp)  || DEFAULT_VALUE
        sunrise.innerHTML = moment.unix(data.sys.sunrise).format('H:mm') || DEFAULT_VALUE
        sunset.innerHTML = moment.unix(data.sys.sunset).format('H:mm') || DEFAULT_VALUE
        humidity.innerHTML = data.main.humidityformat('H:mm') || DEFAULT_VALUE
        winSpeed.innerHTML = (data.wind.speed*3.6).toFixed(2)|| DEFAULT_VALUE 
        // Vì ở trên bảng điều khiển nó để tóc độ của gió là đơn vị m/s nên trong code phải *3.6 để ra được km/h
        // toFix(2) là nó lấy giữ 2 số thập phân
    });

});
// fetch: web api cua mot trinh duyet
// sử dụng method the() khi có data openmap trả v