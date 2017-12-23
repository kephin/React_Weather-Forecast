import axios from 'axios';

const API_KEY = 'cb8d463752f4b52ea7ae86c1f1b3a828';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

// Middleware has the ability to block, modify or just let pass through actions as they are created before they hit the reducers
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const request = axios.get(`${ROOT_URL}&q=${city},us`);
  
  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
