import {BASE_URL_NODE, FETCH_OTHER_DATA, FETCH_OTHER_FAIL } from './types';

import { setAlert } from './alert'; 
import axios from 'axios';

const apiUrl = BASE_URL_NODE;
const fetchOtherInfoUrl = apiUrl +'fetchotherinfo'; 

export const fetchOtherInfoSuccess = (data) => {
	return { 
		type: FETCH_OTHER_DATA,
		payload: data		
	}
};

export const fetchOtherInfoFail = (error) => {
	return { 
		type: FETCH_OTHER_FAIL,
		payload: error		
	}
};

export const fetchOtherInfo = () => {
	return (dispatch) => {
		return axios.post(fetchOtherInfoUrl)
		.then(response => { 
			//console.log(response.data);
			if(!response.data.error){
				dispatch(fetchOtherInfoSuccess(response.data))
			} 
			else {
				dispatch(fetchOtherInfoFail(response.data))
			}
		})
		.catch(error => {
			throw(error);
		})
	} 
}
