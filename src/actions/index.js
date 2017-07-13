import axios from 'axios';

const API_KEY = '7422a40fcd920a358c61c282f5867464';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// Do this to keep action types consistent between action creaters and action reducers
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    // console.log('Request', request);
    
    return {
        type: FETCH_WEATHER,
        payload: request,
    }
}