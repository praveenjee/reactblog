import {BASE_URL_NODE, SET_CURRENT_USER, LOGIN_SUCCESS, LOGIN_SUBMIT, LOGOUT, LOGIN_FAIL} from './types';
import { setAlert } from './alert';
import setAuthToken from '../utils/setAuthToken';

import axios from 'axios';
import jwtDecode from 'jwt-decode';


const apiUrl = BASE_URL_NODE;
const userloginUrl = apiUrl +'userlogin';  

export function setCurrentUser(data) {
  return {
    type: SET_CURRENT_USER,
    payload:data.data
  };
}

export const loginSuccess =  (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload:data
  }
};

export const loginSubmit = () => {
	return {type: LOGIN_SUBMIT }
}


/* 
//Another Syntax
export const logout = () => dispatch => {
	dispatch({ type: LOGOUT });
	setAuthToken(localStorage.token);
}; */

export const logout = () => {
	return (dispatch) => {
		dispatch({ type: LOGOUT });
		setAuthToken(localStorage.token);
	}
};

export const loginPost = (userdata) => {
	//console.log(userdata);	
	return (dispatch) => {
		dispatch(loginSubmit());
		return axios.post(userloginUrl, userdata)
		  .then(response => { 
			 if(response.data.error){
				dispatch({ type: LOGIN_FAIL });
				dispatch(setAlert(response.data.error, 'danger', 'logindiv'));
			 }
			 else {
				localStorage.setItem("token", response.data.token);
				if (localStorage.token) {
					setAuthToken(localStorage.token); 		

					dispatch(loginSuccess(response.data)) 
					dispatch(setCurrentUser(jwtDecode(localStorage.token)));
				}
			}
		})
		.catch(error => {
			throw(error);
		});
	};
};

