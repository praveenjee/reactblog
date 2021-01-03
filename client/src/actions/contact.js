import {BASE_URL_NODE, CONTACT_SUBMIT, CONTACT_SUCCESS, CONTACT_FAIL } from './types';

import { setAlert } from './alert';
import axios from 'axios';

//import jwtDecode from 'jwt-decode';
//import setAuthToken from '../utils/setAuthToken';

const apiUrl = BASE_URL_NODE;
const contactusUrl = apiUrl + 'contactus';  


export const contactSubmit = () => {
	return {type: CONTACT_SUBMIT}
}

export const contactSuccess = (data) => {
	return {type: CONTACT_SUCCESS, payload:data}
};

export const contactFail = (data) => {
	return {type: CONTACT_FAIL, payload:data}
}

export const contactusPost = (userdata) => {
	console.log(userdata);	
	return (dispatch) => {
		dispatch(contactSubmit());
		return axios.post(contactusUrl, userdata)
		.then(response => { 
			if(response.data.error){
				dispatch(contactFail(response.data));
				dispatch(setAlert(response.data.message, 'danger', 'logindiv'));
			}
			else {
				dispatch(contactSuccess(response.data));
				dispatch(setAlert(response.data.message, 'success', 'logindiv'));	
			}
		})
		.catch(error => {
			throw(error);
		});
	};
};



