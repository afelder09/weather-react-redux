import axios from 'axios';

import { FETCH_WEATHER } from "./types";

const API_KEY = '784dd98b3d708ac4d83a3f342a77ae6d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const fetchWeather = (city) => {
    const url = `${ROOT_URL}&q=${city},us`;

    const request = axios.get(url);

    console.log('Request: ', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}