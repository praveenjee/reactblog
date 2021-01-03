import { BASE_URL_NODE, GET_CATEGORY_POST_START, GET_CATEGORY_POST_SUCCESS, GET_CATEGORY_POST_FAIL } from './types';

import { setAlert } from './alert'; 
import axios from 'axios';

const apiUrl = BASE_URL_NODE;
const getCategoryPostUrl = apiUrl +'getallcategoryposts'; 

/* FETCH ALL POSTS */
export const getCategoryPostStart = (keyword) => {
	return { 
		type: GET_CATEGORY_POST_START,
		payload: keyword
	}
}; 

export const getCategoryPostFail = (error) => {
	return { 
		type: GET_CATEGORY_POST_FAIL,
		payload: error		
	}
};

export const getCategoryPostSuccess = (data) => {
	return { 
		type: GET_CATEGORY_POST_SUCCESS,
		payload: data		
	}
};

export const getAllCategoryPosts = (category, pageno=1) => {
	//console.log(category, pageno);
	return (dispatch) => {
		dispatch(getCategoryPostStart())
		return axios.get(`${getCategoryPostUrl}/${category}/${pageno}`)
		.then(response => { 
			//console.log(response.data)
			if(!response.data.error){
				dispatch(getCategoryPostSuccess(response.data))
			}
			else {
				dispatch(getCategoryPostFail(response.data))
			}
		})
		.catch(error => {
			throw(error);
		})
	} 
}