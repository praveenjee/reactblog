import { BASE_URL_NODE, GET_POST_START, GET_POST_SUCCESS, GET_POST_FAIL } from './types';

import { setAlert } from './alert'; 
import axios from 'axios';

const apiUrl = BASE_URL_NODE;
const getPostUrl = apiUrl +'getallposts'; 

/* FETCH ALL POSTS */
export const getPostStart = (keyword) => {
	return { 
		type: GET_POST_START,
		payload: keyword
	}
}; 

export const getPostFail = (error) => {
	return { 
		type: GET_POST_FAIL,
		payload: error		
	}
};

export const getPostSuccess = (data) => {
	return { 
		type: GET_POST_SUCCESS,
		payload: data		
	}
};

export const getAllPosts = (pageno=1) => {
	//console.log(pageno);
	return (dispatch) => {
		dispatch(getPostStart())
		return axios.get(`${getPostUrl}/${pageno}`)
		.then(response => { 
			//console.log(response.data)
			if(!response.data.error){
				dispatch(getPostSuccess(response.data))
			}
			else {
				dispatch(getPostFail(response.data))
			}
		})
		.catch(error => {
			throw(error);
		})
	} 
}