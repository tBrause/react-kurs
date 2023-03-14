// Koordinaten
const geometry = { type: "Point", coordinates: [13.457891, 52.510569, 45] };
const { coordinates } = geometry;
// console.log(coordinates);

const [lon, lat, height] = coordinates;
console.log(
	`Breite: ${lat}°${parseInt(lat) > 0 ? "(N)" : "S"}, Länge: ${lon}°${
		parseInt(lon) > 0 ? "(E)" : "(W)"
	}, Höhe: ${height}m`
);
console.log("#############");

// Daten
const forecast = [
	{
		time: "2023-03-14T10:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 990.8,
					air_temperature: 13.3,
					cloud_area_fraction: 75,
					relative_humidity: 62.8,
					wind_from_direction: 230.9,
					wind_speed: 8,
				},
			},
			next_12_hours: { summary: { symbol_code: "rainshowers_day" } },
			next_1_hours: {
				summary: { symbol_code: "partlycloudy_day" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "heavyrainshowers_day" },
				details: { precipitation_amount: 5.2 },
			},
		},
	},
	{
		time: "2023-03-14T11:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 990.7,
					air_temperature: 13.7,
					cloud_area_fraction: 83.6,
					relative_humidity: 61.6,
					wind_from_direction: 231.5,
					wind_speed: 7.7,
				},
			},
			next_12_hours: { summary: { symbol_code: "rainshowers_day" } },
			next_1_hours: {
				summary: { symbol_code: "partlycloudy_day" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "heavyrainshowers_day" },
				details: { precipitation_amount: 6.7 },
			},
		},
	},
	{
		time: "2023-03-14T12:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 990.5,
					air_temperature: 13.2,
					cloud_area_fraction: 28.9,
					relative_humidity: 62.7,
					wind_from_direction: 227.8,
					wind_speed: 7.5,
				},
			},
			next_12_hours: { summary: { symbol_code: "lightrainshowers_day" } },
			next_1_hours: {
				summary: { symbol_code: "fair_day" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "heavyrain" },
				details: { precipitation_amount: 7.6 },
			},
		},
	},
	{
		time: "2023-03-14T13:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 989.9,
					air_temperature: 14,
					cloud_area_fraction: 87.5,
					relative_humidity: 61.8,
					wind_from_direction: 222.7,
					wind_speed: 7.1,
				},
			},
			next_12_hours: { summary: { symbol_code: "lightrainshowers_day" } },
			next_1_hours: {
				summary: { symbol_code: "heavyrain" },
				details: { precipitation_amount: 2.6 },
			},
			next_6_hours: {
				summary: { symbol_code: "heavyrain" },
				details: { precipitation_amount: 7.7 },
			},
		},
	},
	{
		time: "2023-03-14T14:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 990.3,
					air_temperature: 12.4,
					cloud_area_fraction: 87.5,
					relative_humidity: 70.4,
					wind_from_direction: 245.8,
					wind_speed: 8.1,
				},
			},
			next_12_hours: { summary: { symbol_code: "lightrainshowers_day" } },
			next_1_hours: {
				summary: { symbol_code: "heavyrain" },
				details: { precipitation_amount: 1 },
			},
			next_6_hours: {
				summary: { symbol_code: "heavyrain" },
				details: { precipitation_amount: 5.1 },
			},
		},
	},
	{
		time: "2023-03-14T15:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 990.3,
					air_temperature: 11.6,
					cloud_area_fraction: 82.8,
					relative_humidity: 75.7,
					wind_from_direction: 246.8,
					wind_speed: 6.5,
				},
			},
			next_12_hours: { summary: { symbol_code: "lightrainshowers_day" } },
			next_1_hours: {
				summary: { symbol_code: "heavyrainshowers_day" },
				details: { precipitation_amount: 1.5 },
			},
			next_6_hours: {
				summary: { symbol_code: "rain" },
				details: { precipitation_amount: 4.1 },
			},
		},
	},
	{
		time: "2023-03-14T16:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 992.3,
					air_temperature: 8,
					cloud_area_fraction: 100,
					relative_humidity: 88,
					wind_from_direction: 311.4,
					wind_speed: 10.6,
				},
			},
			next_12_hours: { summary: { symbol_code: "lightrainshowers_night" } },
			next_1_hours: {
				summary: { symbol_code: "heavyrain" },
				details: { precipitation_amount: 1.6 },
			},
			next_6_hours: {
				summary: { symbol_code: "rainshowers_night" },
				details: { precipitation_amount: 2.6 },
			},
		},
	},
	{
		time: "2023-03-14T17:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 996.2,
					air_temperature: 2.5,
					cloud_area_fraction: 100,
					relative_humidity: 96.8,
					wind_from_direction: 315.1,
					wind_speed: 8.7,
				},
			},
			next_12_hours: { summary: { symbol_code: "lightrainshowers_night" } },
			next_1_hours: {
				summary: { symbol_code: "rain" },
				details: { precipitation_amount: 0.9 },
			},
			next_6_hours: {
				summary: { symbol_code: "rainshowers_night" },
				details: { precipitation_amount: 1 },
			},
		},
	},
	{
		time: "2023-03-14T18:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 998.7,
					air_temperature: 2.7,
					cloud_area_fraction: 100,
					relative_humidity: 95.6,
					wind_from_direction: 302.5,
					wind_speed: 6.3,
				},
			},
			next_12_hours: { summary: { symbol_code: "partlycloudy_night" } },
			next_1_hours: {
				summary: { symbol_code: "lightrain" },
				details: { precipitation_amount: 0.1 },
			},
			next_6_hours: {
				summary: { symbol_code: "partlycloudy_night" },
				details: { precipitation_amount: 0.1 },
			},
		},
	},
	{
		time: "2023-03-14T19:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1000.1,
					air_temperature: 3.6,
					cloud_area_fraction: 100,
					relative_humidity: 87.8,
					wind_from_direction: 289.7,
					wind_speed: 6,
				},
			},
			next_12_hours: { summary: { symbol_code: "fair_night" } },
			next_1_hours: {
				summary: { symbol_code: "cloudy" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "partlycloudy_night" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-14T20:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1001.9,
					air_temperature: 3.6,
					cloud_area_fraction: 100,
					relative_humidity: 75.2,
					wind_from_direction: 287.4,
					wind_speed: 6.4,
				},
			},
			next_12_hours: { summary: { symbol_code: "fair_night" } },
			next_1_hours: {
				summary: { symbol_code: "cloudy" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "fair_night" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-14T21:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1003.3,
					air_temperature: 3,
					cloud_area_fraction: 91.4,
					relative_humidity: 69.8,
					wind_from_direction: 285.8,
					wind_speed: 6,
				},
			},
			next_12_hours: { summary: { symbol_code: "fair_day" } },
			next_1_hours: {
				summary: { symbol_code: "cloudy" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "fair_night" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-14T22:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1004.5,
					air_temperature: 2.1,
					cloud_area_fraction: 0,
					relative_humidity: 66.7,
					wind_from_direction: 282.3,
					wind_speed: 5.7,
				},
			},
			next_12_hours: { summary: { symbol_code: "fair_day" } },
			next_1_hours: {
				summary: { symbol_code: "clearsky_night" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "fair_night" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-14T23:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1005.6,
					air_temperature: 1.6,
					cloud_area_fraction: 59.4,
					relative_humidity: 67.2,
					wind_from_direction: 274.1,
					wind_speed: 5.5,
				},
			},
			next_12_hours: { summary: { symbol_code: "fair_day" } },
			next_1_hours: {
				summary: { symbol_code: "partlycloudy_night" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "fair_night" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-15T00:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1006.3,
					air_temperature: 1.2,
					cloud_area_fraction: 19.5,
					relative_humidity: 68.7,
					wind_from_direction: 271.7,
					wind_speed: 5.2,
				},
			},
			next_12_hours: { summary: { symbol_code: "fair_day" } },
			next_1_hours: {
				summary: { symbol_code: "fair_night" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "fair_night" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-15T01:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1007.4,
					air_temperature: 0.9,
					cloud_area_fraction: 5.5,
					relative_humidity: 69.8,
					wind_from_direction: 268.4,
					wind_speed: 5.1,
				},
			},
			next_12_hours: { summary: { symbol_code: "fair_day" } },
			next_1_hours: {
				summary: { symbol_code: "clearsky_night" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "fair_night" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-15T02:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1008.1,
					air_temperature: 0.7,
					cloud_area_fraction: 0.8,
					relative_humidity: 71,
					wind_from_direction: 265.4,
					wind_speed: 5.1,
				},
			},
			next_12_hours: { summary: { symbol_code: "fair_day" } },
			next_1_hours: {
				summary: { symbol_code: "clearsky_night" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "fair_night" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-15T03:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1008.7,
					air_temperature: 0.5,
					cloud_area_fraction: 0.8,
					relative_humidity: 73.2,
					wind_from_direction: 261.4,
					wind_speed: 4.9,
				},
			},
			next_12_hours: { summary: { symbol_code: "fair_day" } },
			next_1_hours: {
				summary: { symbol_code: "clearsky_night" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "fair_day" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-15T04:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1009.4,
					air_temperature: 0.3,
					cloud_area_fraction: 49.2,
					relative_humidity: 75.5,
					wind_from_direction: 260.6,
					wind_speed: 4.8,
				},
			},
			next_12_hours: { summary: { symbol_code: "lightrainshowers_day" } },
			next_1_hours: {
				summary: { symbol_code: "partlycloudy_night" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "fair_day" },
				details: { precipitation_amount: 0.1 },
			},
		},
	},
	{
		time: "2023-03-15T05:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1010,
					air_temperature: 0,
					cloud_area_fraction: 26.6,
					relative_humidity: 78.6,
					wind_from_direction: 261.2,
					wind_speed: 4.3,
				},
			},
			next_12_hours: { summary: { symbol_code: "lightrainshowers_day" } },
			next_1_hours: {
				summary: { symbol_code: "fair_day" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "fair_day" },
				details: { precipitation_amount: 0.2 },
			},
		},
	},
	{
		time: "2023-03-15T06:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1010.5,
					air_temperature: 0,
					cloud_area_fraction: 19.5,
					relative_humidity: 81.4,
					wind_from_direction: 261.9,
					wind_speed: 3.9,
				},
			},
			next_12_hours: { summary: { symbol_code: "lightrainshowers_day" } },
			next_1_hours: {
				summary: { symbol_code: "fair_day" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "clearsky_day" },
				details: { precipitation_amount: 0.2 },
			},
		},
	},
	{
		time: "2023-03-15T07:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1011.5,
					air_temperature: 1.5,
					cloud_area_fraction: 4.7,
					relative_humidity: 76.8,
					wind_from_direction: 268.4,
					wind_speed: 4.5,
				},
			},
			next_12_hours: { summary: { symbol_code: "lightrainshowers_day" } },
			next_1_hours: {
				summary: { symbol_code: "clearsky_day" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "fair_day" },
				details: { precipitation_amount: 0.2 },
			},
		},
	},
	{
		time: "2023-03-15T08:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1012.4,
					air_temperature: 2.9,
					cloud_area_fraction: 3.9,
					relative_humidity: 70.8,
					wind_from_direction: 271.1,
					wind_speed: 4.8,
				},
			},
			next_12_hours: { summary: { symbol_code: "lightrainshowers_day" } },
			next_1_hours: {
				summary: { symbol_code: "clearsky_day" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "fair_day" },
				details: { precipitation_amount: 0.2 },
			},
		},
	},
	{
		time: "2023-03-15T09:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1012.8,
					air_temperature: 4.2,
					cloud_area_fraction: 15.6,
					relative_humidity: 67.8,
					wind_from_direction: 279.1,
					wind_speed: 4.3,
				},
			},
			next_12_hours: { summary: { symbol_code: "lightrainshowers_day" } },
			next_1_hours: {
				summary: { symbol_code: "fair_day" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "fair_day" },
				details: { precipitation_amount: 0.4 },
			},
		},
	},
	{
		time: "2023-03-15T10:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1013.1,
					air_temperature: 5.4,
					cloud_area_fraction: 17.2,
					relative_humidity: 59.2,
					wind_from_direction: 289.7,
					wind_speed: 4.3,
				},
			},
			next_12_hours: { summary: { symbol_code: "lightrainshowers_day" } },
			next_1_hours: {
				summary: { symbol_code: "fair_day" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "lightrainshowers_day" },
				details: { precipitation_amount: 0.6 },
			},
		},
	},
	{
		time: "2023-03-15T11:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1013.3,
					air_temperature: 6.3,
					cloud_area_fraction: 21.1,
					relative_humidity: 51.4,
					wind_from_direction: 286.3,
					wind_speed: 4.4,
				},
			},
			next_12_hours: { summary: { symbol_code: "lightrainshowers_day" } },
			next_1_hours: {
				summary: { symbol_code: "fair_day" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "lightrainshowers_day" },
				details: { precipitation_amount: 0.7 },
			},
		},
	},
	{
		time: "2023-03-15T12:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1013.3,
					air_temperature: 7,
					cloud_area_fraction: 9.4,
					relative_humidity: 46.6,
					wind_from_direction: 281.6,
					wind_speed: 4.6,
				},
			},
			next_12_hours: { summary: { symbol_code: "lightrainshowers_day" } },
			next_1_hours: {
				summary: { symbol_code: "clearsky_day" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "lightrainshowers_day" },
				details: { precipitation_amount: 0.7 },
			},
		},
	},
	{
		time: "2023-03-15T13:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1013.3,
					air_temperature: 7.3,
					cloud_area_fraction: 13.3,
					relative_humidity: 43.7,
					wind_from_direction: 280.8,
					wind_speed: 4.9,
				},
			},
			next_12_hours: { summary: { symbol_code: "lightrainshowers_day" } },
			next_1_hours: {
				summary: { symbol_code: "fair_day" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "lightrainshowers_day" },
				details: { precipitation_amount: 0.7 },
			},
		},
	},
	{
		time: "2023-03-15T14:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1013.5,
					air_temperature: 7.4,
					cloud_area_fraction: 66.4,
					relative_humidity: 41.2,
					wind_from_direction: 285.4,
					wind_speed: 5.6,
				},
			},
			next_12_hours: { summary: { symbol_code: "lightrainshowers_day" } },
			next_1_hours: {
				summary: { symbol_code: "lightrainshowers_day" },
				details: { precipitation_amount: 0.2 },
			},
			next_6_hours: {
				summary: { symbol_code: "lightrainshowers_day" },
				details: { precipitation_amount: 0.7 },
			},
		},
	},
	{
		time: "2023-03-15T15:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1014.1,
					air_temperature: 6.2,
					cloud_area_fraction: 75,
					relative_humidity: 46,
					wind_from_direction: 286,
					wind_speed: 5.3,
				},
			},
			next_12_hours: { summary: { symbol_code: "lightrainshowers_night" } },
			next_1_hours: {
				summary: { symbol_code: "rainshowers_day" },
				details: { precipitation_amount: 0.3 },
			},
			next_6_hours: {
				summary: { symbol_code: "lightrainshowers_night" },
				details: { precipitation_amount: 0.5 },
			},
		},
	},
	{
		time: "2023-03-15T16:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1015.2,
					air_temperature: 4.9,
					cloud_area_fraction: 100,
					relative_humidity: 54.8,
					wind_from_direction: 307.5,
					wind_speed: 6.1,
				},
			},
			next_12_hours: { summary: { symbol_code: "clearsky_night" } },
			next_1_hours: {
				summary: { symbol_code: "lightrain" },
				details: { precipitation_amount: 0.2 },
			},
			next_6_hours: {
				summary: { symbol_code: "fair_night" },
				details: { precipitation_amount: 0.2 },
			},
		},
	},
	{
		time: "2023-03-15T17:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1016,
					air_temperature: 3.1,
					cloud_area_fraction: 100,
					relative_humidity: 67.4,
					wind_from_direction: 297.7,
					wind_speed: 3.5,
				},
			},
			next_12_hours: { summary: { symbol_code: "clearsky_night" } },
			next_1_hours: {
				summary: { symbol_code: "cloudy" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "clearsky_night" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-15T18:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1016.7,
					air_temperature: 1.9,
					cloud_area_fraction: 12.5,
					relative_humidity: 71.6,
					wind_from_direction: 279,
					wind_speed: 2.7,
				},
			},
			next_12_hours: { summary: { symbol_code: "clearsky_night" } },
			next_1_hours: {
				summary: { symbol_code: "clearsky_night" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "clearsky_night" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-15T19:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1017.3,
					air_temperature: 0.5,
					cloud_area_fraction: 4.7,
					relative_humidity: 78.2,
					wind_from_direction: 273.3,
					wind_speed: 2.5,
				},
			},
			next_12_hours: { summary: { symbol_code: "fair_night" } },
			next_1_hours: {
				summary: { symbol_code: "clearsky_night" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "clearsky_night" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-15T20:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1017.8,
					air_temperature: 0.1,
					cloud_area_fraction: 0,
					relative_humidity: 81.8,
					wind_from_direction: 268.2,
					wind_speed: 2.6,
				},
			},
			next_12_hours: { summary: { symbol_code: "fair_night" } },
			next_1_hours: {
				summary: { symbol_code: "clearsky_night" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "clearsky_night" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-15T21:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1018.6,
					air_temperature: -0.3,
					cloud_area_fraction: 0,
					relative_humidity: 84.3,
					wind_from_direction: 266.6,
					wind_speed: 2.6,
				},
			},
			next_12_hours: { summary: { symbol_code: "fair_day" } },
			next_1_hours: {
				summary: { symbol_code: "clearsky_night" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "clearsky_night" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-15T22:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1018.9,
					air_temperature: -1,
					cloud_area_fraction: 0,
					relative_humidity: 86,
					wind_from_direction: 258.7,
					wind_speed: 2.4,
				},
			},
			next_12_hours: { summary: { symbol_code: "fair_day" } },
			next_1_hours: {
				summary: { symbol_code: "clearsky_night" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "clearsky_night" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-15T23:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1019.3,
					air_temperature: -1.4,
					cloud_area_fraction: 0,
					relative_humidity: 87,
					wind_from_direction: 246.9,
					wind_speed: 2.3,
				},
			},
			next_12_hours: { summary: { symbol_code: "fair_day" } },
			next_1_hours: {
				summary: { symbol_code: "clearsky_night" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "clearsky_night" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-16T00:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1019.6,
					air_temperature: -1.6,
					cloud_area_fraction: 0,
					relative_humidity: 87.4,
					wind_from_direction: 239.1,
					wind_speed: 2.6,
				},
			},
			next_12_hours: { summary: { symbol_code: "fair_day" } },
			next_1_hours: {
				summary: { symbol_code: "clearsky_night" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "fair_night" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-16T01:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1019.8,
					air_temperature: -1.6,
					cloud_area_fraction: 0,
					relative_humidity: 86.9,
					wind_from_direction: 236.9,
					wind_speed: 2.8,
				},
			},
			next_12_hours: { summary: { symbol_code: "fair_day" } },
			next_1_hours: {
				summary: { symbol_code: "clearsky_night" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "fair_night" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-16T02:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1019.8,
					air_temperature: -1.6,
					cloud_area_fraction: 0,
					relative_humidity: 85.9,
					wind_from_direction: 233.6,
					wind_speed: 2.9,
				},
			},
			next_12_hours: { summary: { symbol_code: "fair_day" } },
			next_1_hours: {
				summary: { symbol_code: "clearsky_night" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "partlycloudy_night" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-16T03:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1019.9,
					air_temperature: -1.8,
					cloud_area_fraction: 0,
					relative_humidity: 84.9,
					wind_from_direction: 232,
					wind_speed: 2.9,
				},
			},
			next_12_hours: { summary: { symbol_code: "partlycloudy_day" } },
			next_1_hours: {
				summary: { symbol_code: "clearsky_night" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "partlycloudy_day" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-16T04:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1020,
					air_temperature: -1.8,
					cloud_area_fraction: 0,
					relative_humidity: 83.7,
					wind_from_direction: 229.1,
					wind_speed: 3.1,
				},
			},
			next_12_hours: { summary: { symbol_code: "partlycloudy_day" } },
			next_1_hours: {
				summary: { symbol_code: "clearsky_night" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "partlycloudy_day" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-16T05:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1020.2,
					air_temperature: -1.9,
					cloud_area_fraction: 0,
					relative_humidity: 82.9,
					wind_from_direction: 227.5,
					wind_speed: 3,
				},
			},
			next_12_hours: { summary: { symbol_code: "partlycloudy_day" } },
			next_1_hours: {
				summary: { symbol_code: "clearsky_day" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "partlycloudy_day" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-16T06:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1020.6,
					air_temperature: -1.5,
					cloud_area_fraction: 82,
					relative_humidity: 81.8,
					wind_from_direction: 227.6,
					wind_speed: 3.1,
				},
			},
			next_12_hours: { summary: { symbol_code: "partlycloudy_day" } },
			next_1_hours: {
				summary: { symbol_code: "partlycloudy_day" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "fair_day" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-16T07:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1021,
					air_temperature: 0.4,
					cloud_area_fraction: 98.4,
					relative_humidity: 81.1,
					wind_from_direction: 216.3,
					wind_speed: 3.3,
				},
			},
			next_12_hours: { summary: { symbol_code: "partlycloudy_day" } },
			next_1_hours: {
				summary: { symbol_code: "partlycloudy_day" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "fair_day" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-16T08:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1021.3,
					air_temperature: 2.4,
					cloud_area_fraction: 49.2,
					relative_humidity: 74.1,
					wind_from_direction: 216.8,
					wind_speed: 2.6,
				},
			},
			next_12_hours: { summary: { symbol_code: "partlycloudy_day" } },
			next_1_hours: {
				summary: { symbol_code: "partlycloudy_day" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "fair_day" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-16T09:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1021.4,
					air_temperature: 4.8,
					cloud_area_fraction: 9.4,
					relative_humidity: 68.1,
					wind_from_direction: 215.6,
					wind_speed: 2.7,
				},
			},
			next_12_hours: { summary: { symbol_code: "partlycloudy_day" } },
			next_1_hours: {
				summary: { symbol_code: "clearsky_day" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "partlycloudy_day" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-16T10:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1021.3,
					air_temperature: 6.6,
					cloud_area_fraction: 9.4,
					relative_humidity: 56.4,
					wind_from_direction: 228.6,
					wind_speed: 3.5,
				},
			},
			next_12_hours: { summary: { symbol_code: "partlycloudy_day" } },
			next_1_hours: {
				summary: { symbol_code: "clearsky_day" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "partlycloudy_day" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-16T11:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1021.2,
					air_temperature: 7.7,
					cloud_area_fraction: 16.4,
					relative_humidity: 48.9,
					wind_from_direction: 227.4,
					wind_speed: 3.5,
				},
			},
			next_12_hours: { summary: { symbol_code: "cloudy" } },
			next_1_hours: {
				summary: { symbol_code: "fair_day" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "partlycloudy_day" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-16T12:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1020.8,
					air_temperature: 8.4,
					cloud_area_fraction: 28.9,
					relative_humidity: 43.9,
					wind_from_direction: 215.9,
					wind_speed: 3.3,
				},
			},
			next_12_hours: { summary: { symbol_code: "cloudy" } },
			next_1_hours: {
				summary: { symbol_code: "fair_day" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "cloudy" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-16T13:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1020.4,
					air_temperature: 8.9,
					cloud_area_fraction: 48.4,
					relative_humidity: 40.1,
					wind_from_direction: 207.4,
					wind_speed: 3.3,
				},
			},
			next_1_hours: {
				summary: { symbol_code: "partlycloudy_day" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "cloudy" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-16T14:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1020.1,
					air_temperature: 9,
					cloud_area_fraction: 86.7,
					relative_humidity: 37.9,
					wind_from_direction: 191.4,
					wind_speed: 3.2,
				},
			},
			next_1_hours: {
				summary: { symbol_code: "partlycloudy_day" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "cloudy" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-16T15:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1019.8,
					air_temperature: 8.8,
					cloud_area_fraction: 100,
					relative_humidity: 37.3,
					wind_from_direction: 177.6,
					wind_speed: 3.4,
				},
			},
			next_1_hours: {
				summary: { symbol_code: "partlycloudy_day" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "cloudy" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-16T16:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1019.3,
					air_temperature: 7.7,
					cloud_area_fraction: 100,
					relative_humidity: 46.9,
					wind_from_direction: 159.9,
					wind_speed: 2.7,
				},
			},
			next_1_hours: {
				summary: { symbol_code: "cloudy" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "cloudy" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-16T17:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1019.4,
					air_temperature: 5.8,
					cloud_area_fraction: 100,
					relative_humidity: 52.1,
					wind_from_direction: 145.6,
					wind_speed: 2.5,
				},
			},
			next_1_hours: {
				summary: { symbol_code: "cloudy" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "cloudy" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-16T18:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1019.5,
					air_temperature: 5.3,
					cloud_area_fraction: 100,
					relative_humidity: 49.8,
					wind_from_direction: 135.1,
					wind_speed: 3.3,
				},
			},
			next_12_hours: { summary: { symbol_code: "cloudy" } },
			next_1_hours: {
				summary: { symbol_code: "cloudy" },
				details: { precipitation_amount: 0 },
			},
			next_6_hours: {
				summary: { symbol_code: "cloudy" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-16T19:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1019.3,
					air_temperature: 5.1,
					cloud_area_fraction: 100,
					relative_humidity: 48.2,
					wind_from_direction: 128.5,
					wind_speed: 4.2,
				},
			},
			next_1_hours: {
				summary: { symbol_code: "cloudy" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-16T20:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1019.1,
					air_temperature: 5.3,
					cloud_area_fraction: 100,
					relative_humidity: 48.9,
					wind_from_direction: 140.6,
					wind_speed: 5.1,
				},
			},
			next_1_hours: {
				summary: { symbol_code: "cloudy" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-16T21:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1018.7,
					air_temperature: 5.3,
					cloud_area_fraction: 100,
					relative_humidity: 50.5,
					wind_from_direction: 148.2,
					wind_speed: 5.3,
				},
			},
			next_1_hours: {
				summary: { symbol_code: "cloudy" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-16T22:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1018.5,
					air_temperature: 4.9,
					cloud_area_fraction: 100,
					relative_humidity: 50.6,
					wind_from_direction: 150,
					wind_speed: 5.5,
				},
			},
			next_1_hours: {
				summary: { symbol_code: "cloudy" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-16T23:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1018.1,
					air_temperature: 4,
					cloud_area_fraction: 100,
					relative_humidity: 53.5,
					wind_from_direction: 150.1,
					wind_speed: 5.5,
				},
			},
			next_1_hours: {
				summary: { symbol_code: "cloudy" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-17T00:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1017.6,
					air_temperature: 3.5,
					cloud_area_fraction: 100,
					relative_humidity: 55.1,
					wind_from_direction: 148.6,
					wind_speed: 5.4,
				},
			},
			next_12_hours: { summary: { symbol_code: "cloudy" } },
			next_6_hours: {
				summary: { symbol_code: "cloudy" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-17T06:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1015.4,
					air_temperature: 3.7,
					cloud_area_fraction: 100,
					relative_humidity: 51.1,
					wind_from_direction: 153.4,
					wind_speed: 5.4,
				},
			},
			next_12_hours: { summary: { symbol_code: "cloudy" } },
			next_6_hours: {
				summary: { symbol_code: "cloudy" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-17T12:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1013.9,
					air_temperature: 12,
					cloud_area_fraction: 100,
					relative_humidity: 49.6,
					wind_from_direction: 168.6,
					wind_speed: 4.3,
				},
			},
			next_12_hours: { summary: { symbol_code: "cloudy" } },
			next_6_hours: {
				summary: { symbol_code: "cloudy" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-17T18:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1013.7,
					air_temperature: 9.9,
					cloud_area_fraction: 100,
					relative_humidity: 62.5,
					wind_from_direction: 158.9,
					wind_speed: 4,
				},
			},
			next_12_hours: { summary: { symbol_code: "cloudy" } },
			next_6_hours: {
				summary: { symbol_code: "cloudy" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-18T00:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1013.8,
					air_temperature: 6,
					cloud_area_fraction: 96.9,
					relative_humidity: 73.2,
					wind_from_direction: 171.8,
					wind_speed: 3.4,
				},
			},
			next_12_hours: { summary: { symbol_code: "cloudy" } },
			next_6_hours: {
				summary: { symbol_code: "cloudy" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-18T06:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1013.6,
					air_temperature: 5,
					cloud_area_fraction: 96.1,
					relative_humidity: 66.8,
					wind_from_direction: 163.8,
					wind_speed: 3.9,
				},
			},
			next_12_hours: { summary: { symbol_code: "partlycloudy_day" } },
			next_6_hours: {
				summary: { symbol_code: "cloudy" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-18T12:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1013.4,
					air_temperature: 15.3,
					cloud_area_fraction: 78.9,
					relative_humidity: 53,
					wind_from_direction: 183.7,
					wind_speed: 3.7,
				},
			},
			next_12_hours: { summary: { symbol_code: "partlycloudy_day" } },
			next_6_hours: {
				summary: { symbol_code: "partlycloudy_day" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-18T18:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1012.8,
					air_temperature: 11.2,
					cloud_area_fraction: 0,
					relative_humidity: 76.2,
					wind_from_direction: 163.9,
					wind_speed: 3.4,
				},
			},
			next_12_hours: { summary: { symbol_code: "partlycloudy_day" } },
			next_6_hours: {
				summary: { symbol_code: "clearsky_night" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-19T00:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1013.8,
					air_temperature: 9.6,
					cloud_area_fraction: 100,
					relative_humidity: 91.3,
					wind_from_direction: 232,
					wind_speed: 2.7,
				},
			},
			next_12_hours: { summary: { symbol_code: "partlycloudy_day" } },
			next_6_hours: {
				summary: { symbol_code: "cloudy" },
				details: { precipitation_amount: 0.1 },
			},
		},
	},
	{
		time: "2023-03-19T06:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1014.1,
					air_temperature: 8,
					cloud_area_fraction: 21.9,
					relative_humidity: 89.3,
					wind_from_direction: 221.6,
					wind_speed: 3.9,
				},
			},
			next_12_hours: { summary: { symbol_code: "partlycloudy_day" } },
			next_6_hours: {
				summary: { symbol_code: "fair_day" },
				details: { precipitation_amount: 0.1 },
			},
		},
	},
	{
		time: "2023-03-19T12:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1011.8,
					air_temperature: 16,
					cloud_area_fraction: 100,
					relative_humidity: 58.9,
					wind_from_direction: 233.7,
					wind_speed: 6.7,
				},
			},
			next_12_hours: { summary: { symbol_code: "cloudy" } },
			next_6_hours: {
				summary: { symbol_code: "cloudy" },
				details: { precipitation_amount: 0.5 },
			},
		},
	},
	{
		time: "2023-03-19T18:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1010.6,
					air_temperature: 12,
					cloud_area_fraction: 85.9,
					relative_humidity: 67.1,
					wind_from_direction: 228,
					wind_speed: 5.6,
				},
			},
			next_12_hours: { summary: { symbol_code: "cloudy" } },
			next_6_hours: {
				summary: { symbol_code: "partlycloudy_night" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-20T00:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1010,
					air_temperature: 10.8,
					cloud_area_fraction: 100,
					relative_humidity: 75.6,
					wind_from_direction: 230.9,
					wind_speed: 5,
				},
			},
			next_12_hours: { summary: { symbol_code: "cloudy" } },
			next_6_hours: {
				summary: { symbol_code: "cloudy" },
				details: { precipitation_amount: 0.1 },
			},
		},
	},
	{
		time: "2023-03-20T06:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1009,
					air_temperature: 9.1,
					cloud_area_fraction: 100,
					relative_humidity: 91.5,
					wind_from_direction: 270.7,
					wind_speed: 0.5,
				},
			},
			next_12_hours: { summary: { symbol_code: "lightrain" } },
			next_6_hours: {
				summary: { symbol_code: "cloudy" },
				details: { precipitation_amount: 0.2 },
			},
		},
	},
	{
		time: "2023-03-20T12:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1008.5,
					air_temperature: 12.5,
					cloud_area_fraction: 100,
					relative_humidity: 76.7,
					wind_from_direction: 265.2,
					wind_speed: 5.3,
				},
			},
			next_12_hours: { summary: { symbol_code: "lightrain" } },
			next_6_hours: {
				summary: { symbol_code: "lightrain" },
				details: { precipitation_amount: 0.8 },
			},
		},
	},
	{
		time: "2023-03-20T18:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1005.4,
					air_temperature: 12.6,
					cloud_area_fraction: 100,
					relative_humidity: 84.9,
					wind_from_direction: 220.9,
					wind_speed: 5.2,
				},
			},
			next_12_hours: { summary: { symbol_code: "lightrain" } },
			next_6_hours: {
				summary: { symbol_code: "rain" },
				details: { precipitation_amount: 2.6 },
			},
		},
	},
	{
		time: "2023-03-21T00:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1003.8,
					air_temperature: 11.7,
					cloud_area_fraction: 100,
					relative_humidity: 87.9,
					wind_from_direction: 232.9,
					wind_speed: 5.8,
				},
			},
			next_12_hours: { summary: { symbol_code: "cloudy" } },
			next_6_hours: {
				summary: { symbol_code: "cloudy" },
				details: { precipitation_amount: 0.4 },
			},
		},
	},
	{
		time: "2023-03-21T06:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1003.6,
					air_temperature: 10.7,
					cloud_area_fraction: 92.2,
					relative_humidity: 87.2,
					wind_from_direction: 243.7,
					wind_speed: 6.1,
				},
			},
			next_12_hours: { summary: { symbol_code: "partlycloudy_day" } },
			next_6_hours: {
				summary: { symbol_code: "cloudy" },
				details: { precipitation_amount: 0.1 },
			},
		},
	},
	{
		time: "2023-03-21T12:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1003.7,
					air_temperature: 15.4,
					cloud_area_fraction: 93,
					relative_humidity: 52.4,
					wind_from_direction: 256.3,
					wind_speed: 8.6,
				},
			},
			next_12_hours: { summary: { symbol_code: "partlycloudy_day" } },
			next_6_hours: {
				summary: { symbol_code: "cloudy" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-21T18:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1005.4,
					air_temperature: 11.3,
					cloud_area_fraction: 51.6,
					relative_humidity: 63.8,
					wind_from_direction: 287.7,
					wind_speed: 4.7,
				},
			},
			next_12_hours: { summary: { symbol_code: "partlycloudy_night" } },
			next_6_hours: {
				summary: { symbol_code: "partlycloudy_night" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-22T00:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1007.2,
					air_temperature: 5.6,
					cloud_area_fraction: 61.7,
					relative_humidity: 91.9,
					wind_from_direction: 306.2,
					wind_speed: 2.4,
				},
			},
			next_12_hours: { summary: { symbol_code: "lightrain" } },
			next_6_hours: {
				summary: { symbol_code: "partlycloudy_night" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-22T06:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1007.4,
					air_temperature: 3,
					cloud_area_fraction: 100,
					relative_humidity: 94.9,
					wind_from_direction: 326.5,
					wind_speed: 1.6,
				},
			},
			next_12_hours: { summary: { symbol_code: "rain" } },
			next_6_hours: {
				summary: { symbol_code: "rain" },
				details: { precipitation_amount: 1.3 },
			},
		},
	},
	{
		time: "2023-03-22T12:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1005.1,
					air_temperature: 6.8,
					cloud_area_fraction: 100,
					relative_humidity: 81.4,
					wind_from_direction: 63.6,
					wind_speed: 2.7,
				},
			},
			next_12_hours: { summary: { symbol_code: "rain" } },
			next_6_hours: {
				summary: { symbol_code: "rain" },
				details: { precipitation_amount: 4.4 },
			},
		},
	},
	{
		time: "2023-03-22T18:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1001.9,
					air_temperature: 4.9,
					cloud_area_fraction: 100,
					relative_humidity: 92.6,
					wind_from_direction: 34.8,
					wind_speed: 4.4,
				},
			},
			next_12_hours: { summary: { symbol_code: "lightrain" } },
			next_6_hours: {
				summary: { symbol_code: "heavyrain" },
				details: { precipitation_amount: 5.8 },
			},
		},
	},
	{
		time: "2023-03-23T00:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1003.7,
					air_temperature: 2,
					cloud_area_fraction: 100,
					relative_humidity: 98.4,
					wind_from_direction: 21.3,
					wind_speed: 4.4,
				},
			},
			next_12_hours: { summary: { symbol_code: "cloudy" } },
			next_6_hours: {
				summary: { symbol_code: "cloudy" },
				details: { precipitation_amount: 0.4 },
			},
		},
	},
	{
		time: "2023-03-23T06:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1008.7,
					air_temperature: 2.1,
					cloud_area_fraction: 100,
					relative_humidity: 88,
					wind_from_direction: 344.8,
					wind_speed: 1.4,
				},
			},
			next_6_hours: {
				summary: { symbol_code: "cloudy" },
				details: { precipitation_amount: 0 },
			},
		},
	},
	{
		time: "2023-03-23T12:00:00Z",
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: 1011.1,
					air_temperature: 6.9,
					cloud_area_fraction: 100,
					relative_humidity: 55.9,
					wind_from_direction: 104.5,
					wind_speed: 3.7,
				},
			},
		},
	},
];

console.log(forecast);

function viewForecast(forecast) {
	for (const {
		// Zeit (UTC)
		time,
		// Details
		data: {
			instant: {
				details: {
					air_pressure_at_sea_level: pressure_out,
					air_temperature: temperature_out,
					cloud_area_fraction: sky_out,
					relative_humidity: humidity_out,
					wind_from_direction: direction_out,
					wind_speed: speed_out,
				},
			},
		},
		// next_*_hours
		data: { next_1_hours: next_1_hours_out },
		data: { next_6_hours: next_6_hours_out },
		data: { next_12_hours: next_12_hours_out },
	} of forecast) {
		// Zeit
		console.log(time);

		// Icons
		// next_1_hours
		console.log(
			`next_1_hours: ${
				next_1_hours_out?.summary?.symbol_code
					? `${next_1_hours_out.summary.symbol_code} ${next_1_hours_out.details.precipitation_amount}mm`
					: "Kein Wert"
			}`
		);

		// next_6_hours
		console.log(
			`next_6_hours: ${
				next_6_hours_out?.summary?.symbol_code
					? `${next_6_hours_out.summary.symbol_code} ${next_6_hours_out.details.precipitation_amount}mm`
					: "Kein Wert"
			}`
		);

		// next_12_hours
		console.log(
			`next_12_hours: ${next_12_hours_out?.summary?.symbol_code ?? "Kein Wert"}`
		);

		// Details
		console.log(
			`${temperature_out}°C, ${humidity_out}%, ${
				next_1_hours_out?.summary?.symbol_code ?? "Kein Wert"
			}, ${sky_out}%, ${pressure_out}hPa`
		);

		// Wind
		console.log(`${speed_out}m/s from ${direction_out}°`);
		console.log("----");
	}
}

viewForecast(forecast);
