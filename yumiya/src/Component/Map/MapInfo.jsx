import React, {Component} from 'react'
import ItemTitle from '../ItemTitle.jsx'
import './weather.js'

// const sample = 
// {
//     "lat": 33.44,
//     "lon": -94.04,
//     "timezone": "America/Chicago",
//     "timezone_offset": -18000,
//     "current": {
//     "dt": 1664593429,
//     "sunrise": 1664539780,
//     "sunset": 1664582546,
//     "temp": 289.07,
//     "feels_like": 288.31,
//     "pressure": 1015,
//     "humidity": 61,
//     "dew_point": 281.57,
//     "uvi": 0,
//     "clouds": 0,
//     "visibility": 10000,
//     "wind_speed": 2.57,
//     "wind_deg": 120,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01n"
//     }
//     ]
//     },
//     "hourly": [
//     {
//     "dt": 1664593200,
//     "temp": 289.07,
//     "feels_like": 288.31,
//     "pressure": 1015,
//     "humidity": 61,
//     "dew_point": 281.57,
//     "uvi": 0,
//     "clouds": 0,
//     "visibility": 10000,
//     "wind_speed": 2.4,
//     "wind_deg": 72,
//     "wind_gust": 2.55,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01n"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664596800,
//     "temp": 288.79,
//     "feels_like": 287.92,
//     "pressure": 1015,
//     "humidity": 58,
//     "dew_point": 280.56,
//     "uvi": 0,
//     "clouds": 0,
//     "visibility": 10000,
//     "wind_speed": 2.22,
//     "wind_deg": 72,
//     "wind_gust": 2.34,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01n"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664600400,
//     "temp": 288.21,
//     "feels_like": 287.21,
//     "pressure": 1016,
//     "humidity": 55,
//     "dew_point": 279.25,
//     "uvi": 0,
//     "clouds": 0,
//     "visibility": 10000,
//     "wind_speed": 2,
//     "wind_deg": 71,
//     "wind_gust": 2.13,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01n"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664604000,
//     "temp": 287.29,
//     "feels_like": 286.14,
//     "pressure": 1016,
//     "humidity": 53,
//     "dew_point": 277.86,
//     "uvi": 0,
//     "clouds": 0,
//     "visibility": 10000,
//     "wind_speed": 1.95,
//     "wind_deg": 63,
//     "wind_gust": 2.08,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01n"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664607600,
//     "temp": 286.21,
//     "feels_like": 284.93,
//     "pressure": 1017,
//     "humidity": 52,
//     "dew_point": 276.59,
//     "uvi": 0,
//     "clouds": 0,
//     "visibility": 10000,
//     "wind_speed": 2.25,
//     "wind_deg": 54,
//     "wind_gust": 2.35,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01n"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664611200,
//     "temp": 284.79,
//     "feels_like": 283.37,
//     "pressure": 1017,
//     "humidity": 52,
//     "dew_point": 275.38,
//     "uvi": 0,
//     "clouds": 0,
//     "visibility": 10000,
//     "wind_speed": 2.15,
//     "wind_deg": 49,
//     "wind_gust": 2.23,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01n"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664614800,
//     "temp": 284.31,
//     "feels_like": 282.87,
//     "pressure": 1017,
//     "humidity": 53,
//     "dew_point": 275.06,
//     "uvi": 0,
//     "clouds": 0,
//     "visibility": 10000,
//     "wind_speed": 2.22,
//     "wind_deg": 43,
//     "wind_gust": 2.28,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01n"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664618400,
//     "temp": 283.87,
//     "feels_like": 282.38,
//     "pressure": 1018,
//     "humidity": 53,
//     "dew_point": 274.82,
//     "uvi": 0,
//     "clouds": 0,
//     "visibility": 10000,
//     "wind_speed": 2.23,
//     "wind_deg": 38,
//     "wind_gust": 2.32,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01n"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664622000,
//     "temp": 283.42,
//     "feels_like": 281.91,
//     "pressure": 1018,
//     "humidity": 54,
//     "dew_point": 274.51,
//     "uvi": 0,
//     "clouds": 1,
//     "visibility": 10000,
//     "wind_speed": 2.12,
//     "wind_deg": 38,
//     "wind_gust": 2.23,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01n"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664625600,
//     "temp": 283.09,
//     "feels_like": 282.16,
//     "pressure": 1019,
//     "humidity": 54,
//     "dew_point": 274.28,
//     "uvi": 0,
//     "clouds": 1,
//     "visibility": 10000,
//     "wind_speed": 2.14,
//     "wind_deg": 38,
//     "wind_gust": 2.23,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01n"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664629200,
//     "temp": 284.66,
//     "feels_like": 283.17,
//     "pressure": 1019,
//     "humidity": 50,
//     "dew_point": 274.67,
//     "uvi": 0.14,
//     "clouds": 4,
//     "visibility": 10000,
//     "wind_speed": 2.43,
//     "wind_deg": 50,
//     "wind_gust": 3.96,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01d"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664632800,
//     "temp": 288.98,
//     "feels_like": 287.61,
//     "pressure": 1020,
//     "humidity": 38,
//     "dew_point": 274.76,
//     "uvi": 0.82,
//     "clouds": 4,
//     "visibility": 10000,
//     "wind_speed": 2.86,
//     "wind_deg": 58,
//     "wind_gust": 4.54,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01d"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664636400,
//     "temp": 292.7,
//     "feels_like": 291.49,
//     "pressure": 1020,
//     "humidity": 30,
//     "dew_point": 274.83,
//     "uvi": 2.25,
//     "clouds": 3,
//     "visibility": 10000,
//     "wind_speed": 2.85,
//     "wind_deg": 60,
//     "wind_gust": 4.23,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01d"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664640000,
//     "temp": 295.53,
//     "feels_like": 294.48,
//     "pressure": 1020,
//     "humidity": 25,
//     "dew_point": 274.86,
//     "uvi": 4.13,
//     "clouds": 2,
//     "visibility": 10000,
//     "wind_speed": 2.67,
//     "wind_deg": 55,
//     "wind_gust": 3.33,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01d"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664643600,
//     "temp": 297.66,
//     "feels_like": 296.74,
//     "pressure": 1019,
//     "humidity": 22,
//     "dew_point": 274.56,
//     "uvi": 5.92,
//     "clouds": 2,
//     "visibility": 10000,
//     "wind_speed": 2.92,
//     "wind_deg": 52,
//     "wind_gust": 3.43,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01d"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664647200,
//     "temp": 299.21,
//     "feels_like": 299.21,
//     "pressure": 1018,
//     "humidity": 19,
//     "dew_point": 274.19,
//     "uvi": 6.88,
//     "clouds": 1,
//     "visibility": 10000,
//     "wind_speed": 2.9,
//     "wind_deg": 52,
//     "wind_gust": 3.35,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01d"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664650800,
//     "temp": 300.32,
//     "feels_like": 299.29,
//     "pressure": 1017,
//     "humidity": 18,
//     "dew_point": 273.83,
//     "uvi": 6.68,
//     "clouds": 0,
//     "visibility": 10000,
//     "wind_speed": 2.76,
//     "wind_deg": 52,
//     "wind_gust": 3.18,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01d"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664654400,
//     "temp": 301.07,
//     "feels_like": 299.77,
//     "pressure": 1016,
//     "humidity": 17,
//     "dew_point": 273.69,
//     "uvi": 5.31,
//     "clouds": 0,
//     "visibility": 10000,
//     "wind_speed": 2.76,
//     "wind_deg": 52,
//     "wind_gust": 3.2,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01d"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664658000,
//     "temp": 301.26,
//     "feels_like": 299.89,
//     "pressure": 1016,
//     "humidity": 16,
//     "dew_point": 273.69,
//     "uvi": 3.37,
//     "clouds": 0,
//     "visibility": 10000,
//     "wind_speed": 2.83,
//     "wind_deg": 55,
//     "wind_gust": 3.3,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01d"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664661600,
//     "temp": 300.92,
//     "feels_like": 299.67,
//     "pressure": 1016,
//     "humidity": 17,
//     "dew_point": 274.08,
//     "uvi": 1.58,
//     "clouds": 0,
//     "visibility": 10000,
//     "wind_speed": 2.94,
//     "wind_deg": 59,
//     "wind_gust": 3.5,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01d"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664665200,
//     "temp": 299.33,
//     "feels_like": 299.33,
//     "pressure": 1016,
//     "humidity": 23,
//     "dew_point": 276.25,
//     "uvi": 0.46,
//     "clouds": 0,
//     "visibility": 10000,
//     "wind_speed": 2.56,
//     "wind_deg": 72,
//     "wind_gust": 3.74,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01d"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664668800,
//     "temp": 294.19,
//     "feels_like": 293.11,
//     "pressure": 1016,
//     "humidity": 29,
//     "dew_point": 275.75,
//     "uvi": 0,
//     "clouds": 0,
//     "visibility": 10000,
//     "wind_speed": 2.45,
//     "wind_deg": 92,
//     "wind_gust": 2.55,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01d"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664672400,
//     "temp": 292.07,
//     "feels_like": 290.91,
//     "pressure": 1017,
//     "humidity": 34,
//     "dew_point": 275.88,
//     "uvi": 0,
//     "clouds": 0,
//     "visibility": 10000,
//     "wind_speed": 2.47,
//     "wind_deg": 94,
//     "wind_gust": 2.5,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01n"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664676000,
//     "temp": 290.73,
//     "feels_like": 289.51,
//     "pressure": 1018,
//     "humidity": 37,
//     "dew_point": 276.15,
//     "uvi": 0,
//     "clouds": 0,
//     "visibility": 10000,
//     "wind_speed": 2.6,
//     "wind_deg": 83,
//     "wind_gust": 2.76,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01n"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664679600,
//     "temp": 289.57,
//     "feels_like": 288.34,
//     "pressure": 1018,
//     "humidity": 41,
//     "dew_point": 276.2,
//     "uvi": 0,
//     "clouds": 0,
//     "visibility": 10000,
//     "wind_speed": 2.54,
//     "wind_deg": 76,
//     "wind_gust": 2.71,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01n"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664683200,
//     "temp": 288.88,
//     "feels_like": 287.61,
//     "pressure": 1019,
//     "humidity": 42,
//     "dew_point": 276.07,
//     "uvi": 0,
//     "clouds": 0,
//     "visibility": 10000,
//     "wind_speed": 2.06,
//     "wind_deg": 71,
//     "wind_gust": 2.19,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01n"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664686800,
//     "temp": 288.3,
//     "feels_like": 286.99,
//     "pressure": 1019,
//     "humidity": 43,
//     "dew_point": 275.83,
//     "uvi": 0,
//     "clouds": 0,
//     "visibility": 10000,
//     "wind_speed": 1.77,
//     "wind_deg": 68,
//     "wind_gust": 1.81,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01n"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664690400,
//     "temp": 287.77,
//     "feels_like": 286.44,
//     "pressure": 1019,
//     "humidity": 44,
//     "dew_point": 275.57,
//     "uvi": 0,
//     "clouds": 0,
//     "visibility": 10000,
//     "wind_speed": 2.06,
//     "wind_deg": 62,
//     "wind_gust": 2.15,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01n"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664694000,
//     "temp": 287.01,
//     "feels_like": 285.63,
//     "pressure": 1019,
//     "humidity": 45,
//     "dew_point": 275.47,
//     "uvi": 0,
//     "clouds": 0,
//     "visibility": 10000,
//     "wind_speed": 2.25,
//     "wind_deg": 51,
//     "wind_gust": 2.29,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01n"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664697600,
//     "temp": 286.43,
//     "feels_like": 285.04,
//     "pressure": 1019,
//     "humidity": 47,
//     "dew_point": 275.37,
//     "uvi": 0,
//     "clouds": 0,
//     "visibility": 10000,
//     "wind_speed": 2.3,
//     "wind_deg": 47,
//     "wind_gust": 2.41,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01n"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664701200,
//     "temp": 285.75,
//     "feels_like": 284.32,
//     "pressure": 1020,
//     "humidity": 48,
//     "dew_point": 275.21,
//     "uvi": 0,
//     "clouds": 0,
//     "visibility": 10000,
//     "wind_speed": 2.22,
//     "wind_deg": 41,
//     "wind_gust": 2.33,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01n"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664704800,
//     "temp": 285.28,
//     "feels_like": 283.8,
//     "pressure": 1020,
//     "humidity": 48,
//     "dew_point": 274.79,
//     "uvi": 0,
//     "clouds": 0,
//     "visibility": 10000,
//     "wind_speed": 2.73,
//     "wind_deg": 44,
//     "wind_gust": 3.16,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01n"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664708400,
//     "temp": 284.68,
//     "feels_like": 283.17,
//     "pressure": 1021,
//     "humidity": 49,
//     "dew_point": 274.34,
//     "uvi": 0,
//     "clouds": 0,
//     "visibility": 10000,
//     "wind_speed": 2.52,
//     "wind_deg": 50,
//     "wind_gust": 2.91,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01n"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664712000,
//     "temp": 284.16,
//     "feels_like": 282.6,
//     "pressure": 1022,
//     "humidity": 49,
//     "dew_point": 273.91,
//     "uvi": 0,
//     "clouds": 0,
//     "visibility": 10000,
//     "wind_speed": 2.34,
//     "wind_deg": 53,
//     "wind_gust": 2.49,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01n"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664715600,
//     "temp": 285.5,
//     "feels_like": 283.99,
//     "pressure": 1022,
//     "humidity": 46,
//     "dew_point": 274.19,
//     "uvi": 0.14,
//     "clouds": 0,
//     "visibility": 10000,
//     "wind_speed": 2.36,
//     "wind_deg": 50,
//     "wind_gust": 4.38,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01d"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664719200,
//     "temp": 289.82,
//     "feels_like": 288.43,
//     "pressure": 1023,
//     "humidity": 34,
//     "dew_point": 274.11,
//     "uvi": 0.81,
//     "clouds": 0,
//     "visibility": 10000,
//     "wind_speed": 2.93,
//     "wind_deg": 58,
//     "wind_gust": 4.79,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01d"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664722800,
//     "temp": 293.59,
//     "feels_like": 292.39,
//     "pressure": 1023,
//     "humidity": 27,
//     "dew_point": 274.08,
//     "uvi": 2.22,
//     "clouds": 0,
//     "visibility": 10000,
//     "wind_speed": 3.23,
//     "wind_deg": 56,
//     "wind_gust": 4.79,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01d"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664726400,
//     "temp": 296.69,
//     "feels_like": 295.67,
//     "pressure": 1023,
//     "humidity": 22,
//     "dew_point": 274.15,
//     "uvi": 4.1,
//     "clouds": 0,
//     "visibility": 10000,
//     "wind_speed": 3.54,
//     "wind_deg": 55,
//     "wind_gust": 4.62,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01d"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664730000,
//     "temp": 298.91,
//     "feels_like": 298.06,
//     "pressure": 1022,
//     "humidity": 20,
//     "dew_point": 274.26,
//     "uvi": 5.89,
//     "clouds": 0,
//     "visibility": 10000,
//     "wind_speed": 3.64,
//     "wind_deg": 64,
//     "wind_gust": 4.33,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01d"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664733600,
//     "temp": 300.4,
//     "feels_like": 299.34,
//     "pressure": 1022,
//     "humidity": 18,
//     "dew_point": 274.33,
//     "uvi": 6.85,
//     "clouds": 4,
//     "visibility": 10000,
//     "wind_speed": 3.59,
//     "wind_deg": 68,
//     "wind_gust": 4.26,
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01d"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664737200,
//     "temp": 301.38,
//     "feels_like": 299.99,
//     "pressure": 1021,
//     "humidity": 17,
//     "dew_point": 274.56,
//     "uvi": 6.43,
//     "clouds": 30,
//     "visibility": 10000,
//     "wind_speed": 3.51,
//     "wind_deg": 71,
//     "wind_gust": 4.17,
//     "weather": [
//     {
//     "id": 802,
//     "main": "Clouds",
//     "description": "scattered clouds",
//     "icon": "03d"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664740800,
//     "temp": 301.99,
//     "feels_like": 300.43,
//     "pressure": 1020,
//     "humidity": 17,
//     "dew_point": 275.03,
//     "uvi": 5.1,
//     "clouds": 16,
//     "visibility": 10000,
//     "wind_speed": 3.57,
//     "wind_deg": 71,
//     "wind_gust": 4.25,
//     "weather": [
//     {
//     "id": 801,
//     "main": "Clouds",
//     "description": "few clouds",
//     "icon": "02d"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664744400,
//     "temp": 302.05,
//     "feels_like": 300.49,
//     "pressure": 1019,
//     "humidity": 18,
//     "dew_point": 275.58,
//     "uvi": 3.23,
//     "clouds": 17,
//     "visibility": 10000,
//     "wind_speed": 3.84,
//     "wind_deg": 74,
//     "wind_gust": 4.54,
//     "weather": [
//     {
//     "id": 801,
//     "main": "Clouds",
//     "description": "few clouds",
//     "icon": "02d"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664748000,
//     "temp": 301.58,
//     "feels_like": 300.19,
//     "pressure": 1019,
//     "humidity": 20,
//     "dew_point": 276.27,
//     "uvi": 1.51,
//     "clouds": 13,
//     "visibility": 10000,
//     "wind_speed": 3.81,
//     "wind_deg": 75,
//     "wind_gust": 4.52,
//     "weather": [
//     {
//     "id": 801,
//     "main": "Clouds",
//     "description": "few clouds",
//     "icon": "02d"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664751600,
//     "temp": 300,
//     "feels_like": 299.27,
//     "pressure": 1019,
//     "humidity": 24,
//     "dew_point": 277.99,
//     "uvi": 0.44,
//     "clouds": 15,
//     "visibility": 10000,
//     "wind_speed": 3.28,
//     "wind_deg": 75,
//     "wind_gust": 4.81,
//     "weather": [
//     {
//     "id": 801,
//     "main": "Clouds",
//     "description": "few clouds",
//     "icon": "02d"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664755200,
//     "temp": 295.22,
//     "feels_like": 294.32,
//     "pressure": 1020,
//     "humidity": 32,
//     "dew_point": 277.94,
//     "uvi": 0,
//     "clouds": 29,
//     "visibility": 10000,
//     "wind_speed": 2.66,
//     "wind_deg": 73,
//     "wind_gust": 2.81,
//     "weather": [
//     {
//     "id": 802,
//     "main": "Clouds",
//     "description": "scattered clouds",
//     "icon": "03n"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664758800,
//     "temp": 293.24,
//     "feels_like": 292.27,
//     "pressure": 1020,
//     "humidity": 37,
//     "dew_point": 278.33,
//     "uvi": 0,
//     "clouds": 62,
//     "visibility": 10000,
//     "wind_speed": 2.66,
//     "wind_deg": 68,
//     "wind_gust": 2.85,
//     "weather": [
//     {
//     "id": 803,
//     "main": "Clouds",
//     "description": "broken clouds",
//     "icon": "04n"
//     }
//     ],
//     "pop": 0
//     },
//     {
//     "dt": 1664762400,
//     "temp": 292,
//     "feels_like": 291.01,
//     "pressure": 1021,
//     "humidity": 41,
//     "dew_point": 278.6,
//     "uvi": 0,
//     "clouds": 43,
//     "visibility": 10000,
//     "wind_speed": 2.73,
//     "wind_deg": 61,
//     "wind_gust": 3,
//     "weather": [
//     {
//     "id": 802,
//     "main": "Clouds",
//     "description": "scattered clouds",
//     "icon": "03n"
//     }
//     ],
//     "pop": 0
//     }
//     ]
//     }

class MapInfo extends Component{
    constructor(){
        super();

        this.state = {
            weatherData: "",
            currentWeatherData: "",
            desc: "",
            nodata: false,
            locationData: "No Event Selected",
        }

        console.log(this.state.weatherData)

        //Get Current Location via geolocation then display data,
        //Else display nothing
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((LatLon) => {
                
                let lat = LatLon.coords.latitude;
                let lon = LatLon.coords.longitude;
                let apiCall = "https://api.openweathermap.org/data/3.0/onecall?lat="+lat+"&lon="+lon+"&exclude=minutely,daily,alerts&appid=413c4ae08ad7457250848cc6fc7a7fe4"
                
                fetch(apiCall)
                .then(response => {
                // indicates whether the response is successful (status code 200-299) or not
                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`)
                }
                return response.json()
                })
                .then(data => {
                    this.setState({weatherData: data.hourly.slice(0, 24)});
                    this.setState({currentWeatherData: data.current});
                    this.setState({desc: data.current.weather[0].description});
                    console.log(this.state.desc);
                })
                .catch(error => console.log(error))
            });
        } else {
            this.setState({nodata: true})
            console.log("Geolocation is not supported by this browser.");
        }

    }
    styles={
        position: 'relative',
        width: "30%",
        height: "calc(100% - 30px)",
        alignSelf: "flex-end",
    }
    render(){
        return(
            <div style={this.styles}>
                <ItemTitle color={"#03d3fc"} text={'Map'} />
                <div style={{justifyContent:"center"}}>
                    <div style={{color:"white"}} className = "globalFont">
                        <p id="EventLocationName">No Event Selected</p>
                        <p id="EventLocation"></p>
                        <p id="EventDistance"></p>
                        <p id="EventETA"></p>

                    </div>
                        
                </div>
                <ItemTitle color={"#03d3fc"} text={'Weather'} />
                <div style={{justifyContent:"center"}}>
                    {this.state.nodata ?
                        <p style={{color:"white"}} className = "globalFont">{this.state.nodata}</p>

                    :   <div style={{color:"white"}} className = "globalFont">
                            <p>{this.temperatureString()}</p>
                            <p>{this.getWeatherDesc()}</p>
                        </div>
                    }
                </div>
                {/* <button style={{height: "50px", width: "100px", backgroundColor: "white"}} onClick={this.handleClick}>Button</button> */}
            </div>
        )
    }

    temperatureString(){
        let kelvin = this.state.currentWeatherData.temp;
        let cel = (kelvin - 273.15).toFixed(1);
        let far = (cel * 9/5 + 32).toFixed(1);
        let ret = `${cel} °C | ${far} °F`;
        return ret;
    }
    getWeatherDesc(){
        let desc = this.state.desc;
        return desc.charAt(0).toUpperCase() + desc.slice(1);
    }

    // handleClick = () => {
    //     console.log("hello");
    //     fetch("http://127.0.0.1:5000/")
    //         .then(response => { console.log(response)})
    // }

}

export default MapInfo