import { FETCH_WEATHER_START, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAIL } from './types';

import axios from 'axios';

const fetchWeatherUrl = 'https://api.openweathermap.org/data/2.5/'; 
const apiKeys = {
	Default: '9a98eb9b59aff0e62faf9461ccadd53a',
	MyBlog: '5cf5783b4a830eed499a6518460d55f6',
};

//NO NEED OF THIS DATA IN API CALL
const apiCredentials = {
	username: 'email:pkumar5330@gmail.com',
	password: 'praveen@2710'
};

export const fetchWeatherStart = (keyword) => {
	return { 
		type: FETCH_WEATHER_START,
		payload: keyword
	}
}; 

export const fetchWeatherFail = (error) => {
	return { 
		type: FETCH_WEATHER_FAIL,
		payload: error		
	}
};

export const fetchWeatherSuccess = (data) => {
	return { 
		type: FETCH_WEATHER_SUCCESS,
		payload: data		
	}
};

export const fetchWeatherData = (location) => {
	return (dispatch) => {
		dispatch(fetchWeatherStart(location));
		
		fetch(`${fetchWeatherUrl}weather?q=${location}&appid=${apiKeys.Default}`)
		.then(res => res.json())
		.then(res2 => {
			if(res2 !== undefined && res2 !== null){
				dispatch(fetchWeatherSuccess(res2))
			}
			else {
				dispatch(fetchWeatherFail(res2))
			}
		})
		.catch(error => {
			throw(error);
		})		
	}
}