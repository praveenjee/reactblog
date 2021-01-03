import {BASE_URL_NODE, PROFILE_INFO_SUBMIT, PROFILE_INFO_UPDATE, PROFILE_UPDATE_FAIL, FETCH_ACCOUNT_INFO, LOGOUT, CHANGE_PASSWORD_SUBMIT, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAIL } from './types';

import { setAlert } from './alert'; 
import axios from 'axios';

const apiUrl = BASE_URL_NODE;
const updateProfileUrl = apiUrl +'updateprofile'; 
const fetchAccountInfoUrl = apiUrl +'fetchaccountinfo'; 
const changePasswordUrl = apiUrl +'changepassword'; 

export const profileUpdateStart = (data) => {
	return { type: PROFILE_INFO_SUBMIT }
};

export const profileUpdateSuccess = (data) => {
	return { 
		type: PROFILE_INFO_UPDATE,
		payload: data		
	}
};

export const profileUpdateFail = (data) => {
	return { 
		type: PROFILE_UPDATE_FAIL,
		payload: data		
	}
};

export const fetchInfoSuccess = (data) => {
	return { 
		type: FETCH_ACCOUNT_INFO,
		payload: data		
	}
};

export const fetchAccountInfo = () => {
	return (dispatch) => {
		return axios.get(fetchAccountInfoUrl)
		.then(response => { 
			//console.log(response.data);
			if(!response.data.error){
				dispatch(fetchInfoSuccess(response.data.data))
			}
			else {
				dispatch({ type: LOGOUT });
			}
		})
		.catch(error => {
			if(error.response.status === 401){
				dispatch({ type: LOGOUT });
			}	
			throw(error);
		})
	} 
}

export const updateProfile = (userdata) => {
	return (dispatch) => {
		dispatch(profileUpdateStart());
		return axios.post(updateProfileUrl, userdata)
		.then(response => {
			if(response.data.error){
				dispatch(profileUpdateFail(response.data));
				dispatch(setAlert(response.data.message, 'danger', 'logindiv'));
			}
			else {
				dispatch(profileUpdateSuccess(response.data));
				dispatch(setAlert(response.data.message, 'success', 'logindiv'));
			}
		})
		.catch(error => {
			if(error.response.status === 401){
				dispatch({ type: LOGOUT });
			}
			throw(error);
		});
	}
}

//Change Password
export const changePassword = (userdata) => {
	return (dispatch) => {
		dispatch(changeSubmit());
		return axios.post(changePasswordUrl, userdata)
		.then(response => {
			if(response.data.error){
				dispatch(changeFailed());
				dispatch(setAlert('Please enter correct Old Password', 'danger', 'change'));
			}
			else {
				dispatch(changeSuccess(response.data));
				dispatch(setAlert('Password has been updated successfully.', 'success', 'change'));
			}
		})
		.catch(error => {			
			if(error.response.status === 401){
				dispatch({ type: LOGOUT });
			}
			throw(error);
		});
	};
}

function changeSubmit() {
    return {
        type: CHANGE_PASSWORD_SUBMIT
    }
}

export const changeSuccess =  (data) => {
	return {
		type: CHANGE_PASSWORD_SUCCESS,
		payload: { 
			new_password: data.new_password,
			password: data.password,
		}
	}
};


function changeFailed() {
    return {
        type: CHANGE_PASSWORD_FAIL
    }
}



