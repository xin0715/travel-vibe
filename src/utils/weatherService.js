const mockWeatherData = {
	"Tokyo": {
		location: "Tokyo",
		country: "Japan",
		temperature: 24,
		feelsLike: 26,
		condition: "Partly cloudy",
		conditionIcon: "https://cdn.weatherapi.com/weather/64x64/day/116.png",
		humidity: 65,
		windSpeed: 12,
		precipitation: 0,
		forecast: [
			{
				date: "Tomorrow",
				maxTemp: 26,
				minTemp: 19,
				condition: "Sunny",
				conditionIcon: "https://cdn.weatherapi.com/weather/64x64/day/113.png",
				chanceOfRain: 0
			},
			{
				date: "Day after tomorrow",
				maxTemp: 28,
				minTemp: 20,
				condition: "Partly cloudy",
				conditionIcon: "https://cdn.weatherapi.com/weather/64x64/day/116.png",
				chanceOfRain: 10
			},
			{
				date: "In 3 days",
				maxTemp: 25,
				minTemp: 18,
				condition: "Light rain",
				conditionIcon: "https://cdn.weatherapi.com/weather/64x64/day/296.png",
				chanceOfRain: 70
			}
		]
	},
	"New York": {
		location: "New York",
		country: "United States",
		temperature: 18,
		feelsLike: 16,
		condition: "Clear",
		conditionIcon: "https://cdn.weatherapi.com/weather/64x64/day/113.png",
		humidity: 45,
		windSpeed: 15,
		precipitation: 0,
		forecast: [
			{
				date: "Tomorrow",
				maxTemp: 20,
				minTemp: 12,
				condition: "Sunny",
				conditionIcon: "https://cdn.weatherapi.com/weather/64x64/day/113.png",
				chanceOfRain: 0
			},
			{
				date: "Day after tomorrow",
				maxTemp: 22,
				minTemp: 14,
				condition: "Partly cloudy",
				conditionIcon: "https://cdn.weatherapi.com/weather/64x64/day/116.png",
				chanceOfRain: 20
			},
			{
				date: "In 3 days",
				maxTemp: 17,
				minTemp: 10,
				condition: "Rain",
				conditionIcon: "https://cdn.weatherapi.com/weather/64x64/day/308.png",
				chanceOfRain: 80
			}
		]
	},
	"Paris": {
		location: "Paris",
		country: "France",
		temperature: 16,
		feelsLike: 14,
		condition: "Light rain",
		conditionIcon: "https://cdn.weatherapi.com/weather/64x64/day/296.png",
		humidity: 75,
		windSpeed: 8,
		precipitation: 0.5,
		forecast: [
			{
				date: "Tomorrow",
				maxTemp: 18,
				minTemp: 11,
				condition: "Partly cloudy",
				conditionIcon: "https://cdn.weatherapi.com/weather/64x64/day/116.png",
				chanceOfRain: 20
			},
			{
				date: "Day after tomorrow",
				maxTemp: 19,
				minTemp: 12,
				condition: "Sunny",
				conditionIcon: "https://cdn.weatherapi.com/weather/64x64/day/113.png",
				chanceOfRain: 0
			},
			{
				date: "In 3 days",
				maxTemp: 17,
				minTemp: 10,
				condition: "Cloudy",
				conditionIcon: "https://cdn.weatherapi.com/weather/64x64/day/119.png",
				chanceOfRain: 30
			}
		]
	},
	"Sydney": {
		location: "Sydney",
		country: "Australia",
		temperature: 22,
		feelsLike: 24,
		condition: "Sunny",
		conditionIcon: "https://cdn.weatherapi.com/weather/64x64/day/113.png",
		humidity: 50,
		windSpeed: 18,
		precipitation: 0,
		forecast: [
			{
				date: "Tomorrow",
				maxTemp: 24,
				minTemp: 16,
				condition: "Sunny",
				conditionIcon: "https://cdn.weatherapi.com/weather/64x64/day/113.png",
				chanceOfRain: 0
			},
			{
				date: "Day after tomorrow",
				maxTemp: 26,
				minTemp: 18,
				condition: "Sunny",
				conditionIcon: "https://cdn.weatherapi.com/weather/64x64/day/113.png",
				chanceOfRain: 0
			},
			{
				date: "In 3 days",
				maxTemp: 23,
				minTemp: 17,
				condition: "Partly cloudy",
				conditionIcon: "https://cdn.weatherapi.com/weather/64x64/day/116.png",
				chanceOfRain: 10
			}
		]
	},
	"Bangkok": {
		location: "Bangkok",
		country: "Thailand",
		temperature: 32,
		feelsLike: 36,
		condition: "Partly cloudy",
		conditionIcon: "https://cdn.weatherapi.com/weather/64x64/day/116.png",
		humidity: 80,
		windSpeed: 6,
		precipitation: 0,
		forecast: [
			{
				date: "Tomorrow",
				maxTemp: 33,
				minTemp: 26,
				condition: "Thunderstorm",
				conditionIcon: "https://cdn.weatherapi.com/weather/64x64/day/200.png",
				chanceOfRain: 80
			},
			{
				date: "Day after tomorrow",
				maxTemp: 31,
				minTemp: 25,
				condition: "Rain",
				conditionIcon: "https://cdn.weatherapi.com/weather/64x64/day/308.png",
				chanceOfRain: 70
			},
			{
				date: "In 3 days",
				maxTemp: 32,
				minTemp: 26,
				condition: "Partly cloudy",
				conditionIcon: "https://cdn.weatherapi.com/weather/64x64/day/116.png",
				chanceOfRain: 30
			}
		]
	}
	// ... 其他城市資料 (New York, Paris, Sydney, Bangkok)
};

const defaultWeatherData = {
	location: "London",
	country: "United Kingdom",
	temperature: 14,
	feelsLike: 12,
	condition: "Cloudy",
	conditionIcon: "https://cdn.weatherapi.com/weather/64x64/day/119.png",
	humidity: 70,
	windSpeed: 14,
	precipitation: 0.2,
	forecast: [
		{
			date: "Tomorrow",
			maxTemp: 16,
			minTemp: 10,
			condition: "Light rain",
			conditionIcon: "https://cdn.weatherapi.com/weather/64x64/day/296.png",
			chanceOfRain: 60
		},
		{
			date: "Day after tomorrow",
			maxTemp: 15,
			minTemp: 9,
			condition: "Partly cloudy",
			conditionIcon: "https://cdn.weatherapi.com/weather/64x64/day/116.png",
			chanceOfRain: 20
		},
		{
			date: "In 3 days",
			maxTemp: 17,
			minTemp: 11,
			condition: "Sunny",
			conditionIcon: "https://cdn.weatherapi.com/weather/64x64/day/113.png",
			chanceOfRain: 0
		}
	]
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getWeatherData = async (location) => {
	await delay(500);

	const cityKey = Object.keys(mockWeatherData).find(
		city => city.toLowerCase() === location.toLowerCase()
	);

	if (cityKey) {
		return mockWeatherData[cityKey];
	}

	return {
		...defaultWeatherData,
		location: location || defaultWeatherData.location
	};
};

export const getPopularDestinations = () => {
	return Object.keys(mockWeatherData);
};
