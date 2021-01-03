import {BASE_URL_NODE, SIGNUP_SUBMIT, SIGNUP_SUCCESS, SIGNUP_FAIL, VERIFY_EMAIL_START, VERIFY_EMAIL_SUCCESS, VERIFY_EMAIL_FAIL, FORGOT_PASSWORD_SUBMIT, FORGOT_PASSWORD_FAIL, FORGOT_PASSWORD_SUCCESS, VERIFY_RESET_LINK_SUCCESS, VERIFY_RESET_LINK_FAIL, RESET_SUBMIT, RESET_SUCCESS, RESET_FAIL } from './types';

import { setAlert } from './alert';
//import setAuthToken from '../utils/setAuthToken';

import axios from 'axios';
//import jwtDecode from 'jwt-decode';


const apiUrl = BASE_URL_NODE;
const userSignupUrl = apiUrl +'usersignup';  
const verifyEmailUrl = apiUrl +'verifyemail';  
const forgotPasswordUrl = apiUrl +'sendresetpasswordlink';  
const verifyResetPasswordUrl = apiUrl +'verifyresetpasswordlink';  
const resetPasswordUrl = apiUrl +'resetpassword'; 

/**USER SIGNUP**/
export const signupSubmit = () => {
	return {type: SIGNUP_SUBMIT }
}

export const signupSuccess = (data) => {
  return {
    type: SIGNUP_SUCCESS,
    payload:data
  }
};

export const signupFail = () => {
	return {type: SIGNUP_FAIL }
}

export const signupPost = (userdata) => {
	//console.log(userdata);	
	return (dispatch) => {
		dispatch(signupSubmit());
		return axios.post(userSignupUrl, userdata)
		.then(response => { 
			if(response.data.error){
				dispatch(signupFail());
				dispatch(setAlert(response.data.message, 'danger', 'logindiv'));
			}
			else {
				dispatch(signupSuccess(response.data));
				dispatch(setAlert(response.data.message, 'success', 'logindiv'));	
			}
		})
		.catch(error => {
			throw(error);
		});
	};
};

/**VERIFY EMAILS**/
export const verifyEmailStart = (data) => {
	return { type: VERIFY_EMAIL_START }
};

export const verifyEmailSuccess = (data) => {
	return { 
		type: VERIFY_EMAIL_SUCCESS,
		payload: data		
	}
};

export const verifyEmailFail = (data) => {
	return { 
		type: VERIFY_EMAIL_FAIL,
		payload: data		
	}
};

export const verifyEmail = (userdata) => {
	return (dispatch) => {
		dispatch(verifyEmailStart());
		return axios.post(verifyEmailUrl, {stoken:userdata})
		.then(response => {
			if(response.data.error){
				dispatch(verifyEmailFail(response.data));
			}
			else {
				dispatch(verifyEmailSuccess(response.data));
			}
		})
		.catch(error => {
			throw(error);
		});
	}
}

/**FORGOT PASSWORD**/
const forgotPasswordSubmited = () => {
	return {
		type: FORGOT_PASSWORD_SUBMIT
	}
}

const forgotPasswordFail = (error) => {
	return {
		type: FORGOT_PASSWORD_FAIL,
		payload: error
	}
}

const forgotPasswordSuccess = (data) => {
	return {
		type: FORGOT_PASSWORD_SUCCESS,
		payload: data
	}
}

export const forgotPassword = (useremail) => {
	return (dispatch) => {
		dispatch(forgotPasswordSubmited());
		return axios.post(forgotPasswordUrl, {uemail:useremail})
		.then(response => {
			if(response.data.error){
				dispatch(forgotPasswordFail(response.data));
				dispatch(setAlert(response.data.message, 'danger', 'forgotdiv'));
			}
			else {
				dispatch(forgotPasswordSuccess(response.data));
				dispatch(setAlert(response.data.message, 'success', 'forgotdiv'));
			}
		})
		.catch(error => {
			//console.log(error);
			throw(error);
		})
	}
}

/**VERIFY RESET PASSWORD LINK**/
export const verifyResetFail = (error) => {
	return {
		type: VERIFY_RESET_LINK_FAIL,
		payload: error
	}
}

export const verifyResetSuccess = (error) => {
	return {
		type: VERIFY_RESET_LINK_SUCCESS,
		payload: error
	}
}

export const verifyResetPassword = (encodedata) => {
	return (dispatch) => {
		return axios.post(verifyResetPasswordUrl, {encdata: encodedata})
		.then(response => {
			if(response.data.error){
				dispatch(verifyResetFail(response.data));
				dispatch(setAlert(response.data.message, 'danger', 'resetpassword'));
			}
			else {
				dispatch(verifyResetSuccess(response.data));
				//dispatch(setAlert(response.data.message, 'success', 'resetpassword'));
			}
		})
		.catch(error => {
			//console.log(error);
			throw(error);
		})
	}
}

/**RESET PASSWORD LINK**/
const resetSubmit = () => {
	return {
		type: RESET_SUBMIT
	}
}

const resetFail = (error) => {
	return {
		type: RESET_FAIL,
		payload: error
	}
}

const resetSuccess = (data) => {
	return {
		type: RESET_SUCCESS,
		payload: data
	}
}
export const resetPassword = (userdata) => {
	return (dispatch) => {
		dispatch(resetSubmit());
		return axios.post(resetPasswordUrl, userdata)
		.then(response => {
			if(response.data.error){
				dispatch(resetFail());
				dispatch(setAlert('Password not updated.', 'danger', 'resetpassword'));
			}
			else {
				console.log(response.data);
				dispatch(resetSuccess(response.data));
				dispatch(setAlert('Password has been updated successfully.', 'success', 'resetpassword'));
			}
		})
		.catch(error => {
			throw(error);
		});
	};
}
