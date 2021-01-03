import {BASE_URL_NODE, FETCH_COUNTRY_START, FETCH_COUNTRY_SUCCESS, FETCH_COUNTRY_FAIL} from './types';

import axios from 'axios';

const apiUrl = BASE_URL_NODE;
const fetchCountryUrl = apiUrl +'fetchcountries';

/* FETCH COUNTRY */
export const fetchCountryStart = (keyword) => {
	return { 
		type: FETCH_COUNTRY_START,
		payload: keyword
	}
}; 

export const fetchCountryFail = (error) => {
	return { 
		type: FETCH_COUNTRY_FAIL,
		payload: error		
	}
};

export const fetchCountrySuccess = (data) => {
	return { 
		type: FETCH_COUNTRY_SUCCESS,
		payload: data		
	}
};

export const fetchCountries = (searchkey) => {
	//console.log(searchkey);
	return (dispatch) => {
		dispatch(fetchCountryStart(searchkey))
		return axios.post(fetchCountryUrl, {keyword: searchkey})
		.then(response => { 
			//console.log(response.data);
			if(!response.data.error){
				dispatch(fetchCountrySuccess(response.data.data))
			}
			else {
				dispatch(fetchCountryFail(response.data.data))
			}
		})
		.catch(error => {
			throw(error);
		})
	} 
}

