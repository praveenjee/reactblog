import {BASE_URL_NODE, SEARCH_POST_SUBMIT, SEARCH_POST_SUCCESS, SEARCH_POST_FAIL} from './types';

import { setAlert } from './alert'; 
import axios from 'axios';

const apiUrl = BASE_URL_NODE;
const searchPostUrl = apiUrl +'searchpost'; 

export const searchPostStart = (data) => {
	return { type: SEARCH_POST_SUBMIT }
};

export const searchPostSuccess = (data) => {
	return { 
		type: SEARCH_POST_SUCCESS,
		payload: data		
	}
};

export const searchPostFail = (error) => {
	return { 
		type: SEARCH_POST_FAIL,
		payload: error		
	}
};

export const searchPost = (search_keyword, page=1) => {
	return (dispatch) => {
		dispatch(searchPostStart());
		return axios.get(`${searchPostUrl}/${search_keyword}/${page}`) 
		.then(response => {
			console.log(response.data);
			
			if(response.data.error){
				dispatch(searchPostFail(response.data));
				//dispatch(setAlert(response.data.message, 'danger', 'searchdiv'));
			}
			else {
				dispatch(searchPostSuccess(response.data));
				//dispatch(setAlert(response.data.message, 'success', 'searchdiv'));
			}
		})
		.catch(error => {
			throw(error);
		});
	}
}
