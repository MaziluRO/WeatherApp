const cityName = document.querySelector('.result__city-weather--name');
const searchBtn = document.querySelector('.header__search--btn');
const result = document.querySelector('.result');

const apiKey = '35f18a2dae02fbda5474bd7322479961';

const loadSpinner = function () {
	const markup = `<div class="spinner">
	<svg>
		<use href="img/icons.svg#icon-loader"></use>
	</svg>
</div>`;
	result.innerHTML = markup;
};

const displayWeather = function (weatherData) {
	const cityName = weatherData.location.name;
	const cityCountry = weatherData.location.country;
	const temperature = weatherData.current.temperature;
	const status = weatherData.current.weather_descriptions[0];

	const humidity = weatherData.current.humidity;
	const precipitation = weatherData.current.precip;
	const windDegree = weatherData.current.wind_degree;
	const windDirection = weatherData.current.wind_dir;
	const windSpeed = weatherData.current.wind_speed;
	const visibility = weatherData.current.visibility;

	const markup = `<div class="result__city-weather">
	<h2 class="result__city-weather--name">${cityName}, ${cityCountry}</h2>
	<div class="result__city-weather--container">
		<div class="result__city-weather--container__temperature-info">
			<p
				class="result__city-weather--container__temperature-info--temperature"
			>
				${temperature}&deg;C
			</p>
			<p
				class="result__city-weather--container__temperature-info--status"
			>
				${status}
			</p>
		</div>

		<div class="result__city-weather--container__description">
			<p class="result__city-weather--container__description--humidity">
				Humidity: ${humidity}
			</p>
			<p
				class="result__city-weather--container__description--precipitation"
			>
				Precipitation: ${precipitation}
			</p>

			<p
				class="result__city-weather--container__description--wind-direction"
			>
				Wind direction: ${windDirection}
			</p>

			<p class="result__city-weather--container__description--wind">
				Wind degree: ${windDegree}
			</p>

			
			<p
				class="result__city-weather--container__description--wind-speed"
			>
				Wind speed: ${windSpeed}
			</p>

			<p
				class="result__city-weather--container__description--visibility"
			>
				Visibility: ${visibility}
			</p>
		</div>
	</div>
</div>`;

	result.innerHTML = markup;
};

const getWeather = async function (city) {
	const weatherResponse = await fetch(
		`https://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`
	)
		.then((response) => response.json())
		.then((data) => data);
	console.log(weatherResponse);
	displayWeather(weatherResponse);
};

searchBtn.addEventListener('click', function (e) {
	e.preventDefault();

	const location = document.querySelector('input').value;
	loadSpinner();
	document.querySelector('input').value = '';
	console.log(location)
	getWeather(location);
});


