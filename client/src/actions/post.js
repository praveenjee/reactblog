import {
	BASE_URL_NODE, FETCH_POST_START, FETCH_POST_SUCCESS, FETCH_POST_FAIL, 
	POST_SAVE_START, POST_SAVE_SUCCESS, POST_SAVE_FAIL, 
	POST_EDIT_START, POST_EDIT_SUCCESS, POST_EDIT_FAIL,
	POST_DETAIL_START, POST_DETAIL_SUCCESS, POST_DETAIL_FAIL, 
	POST_DETAIL_SLUG_START, POST_DETAIL_SLUG_SUCCESS, POST_DETAIL_SLUG_FAIL, 
	POST_DELETE_SUCCESS, POST_DELETE_FAIL,
} from './types';

import { setAlert } from './alert'; 
import axios from 'axios';

const apiUrl = BASE_URL_NODE;
const fetchPostUrl = apiUrl +'fetchposts'; 
const savePostUrl = apiUrl +'savepost'; 
const updatePostUrl = apiUrl +'updatepost'; 
const postDetailUrl = apiUrl +'getpostbyid'; 
const postDetailSlugUrl = apiUrl +'getpostbyslug'; 
const deletePostUrl = apiUrl +'deletepost'; 

/* FETCH ALL POSTS */
export const fetchPostStart = (keyword) => {
	return { 
		type: FETCH_POST_START,
		payload: keyword
	}
}; 

export const fetchPostFail = (error) => {
	return { 
		type: FETCH_POST_FAIL,
		payload: error		
	}
};

export const fetchPostSuccess = (data) => {
	return { 
		type: FETCH_POST_SUCCESS,
		payload: data		
	}
};

export const fetchPosts = (searchkey) => {
	//console.log(searchkey);
	return (dispatch) => {
		dispatch(fetchPostStart(searchkey))
		return axios.post(fetchPostUrl, {keyword: searchkey})
		.then(response => { 
			//console.log(response.data);
			if(!response.data.error){
				dispatch(fetchPostSuccess(response.data.data))
			}
			else {
				dispatch(fetchPostFail(response.data.data))
			}
		})
		.catch(error => {
			throw(error);
		})
	} 
}

/* SAVE POST IN ADMIN */
export const savePostStart = ()=> {
	return {
		type: POST_SAVE_START
	}
}

export const savePostFail = (error)=> {
	return {
		type: POST_SAVE_FAIL,
		payload: error
	}
}

export const savePostSuccess = (data)=> {
	return {
		type: POST_SAVE_SUCCESS,
		payload: data
	}
}

export const savePost = (postdata) => {
	//console.log(postdata);
	let formData  = new FormData();
	formData.set('title', postdata.title);
	formData.set('slug', postdata.slug);
	formData.set('category', postdata.category);	
	formData.set('short_description', postdata.short_description);
	formData.set('description', postdata.description);
	formData.set('profilename', postdata.profilename);
	formData.set('status', postdata.status);
	formData.set('meta_title', postdata.meta_title);
	formData.set('meta_keywords', postdata.meta_keywords);
	formData.set('meta_description', postdata.meta_description);
	
	if(postdata.featureimage && typeof postdata.featureimage === 'object'){
		formData.append('featureimage', postdata.featureimage, postdata.featureimage.name);	
	}
		
	return (dispatch) => {
		dispatch(savePostStart())
		
		let config = {
			method: 'POST',
			url: savePostUrl,
			data: formData ,
			headers: {'Content-Type': 'multipart/form-data' }
		};
		return axios(config)
		//return axios.post(savePostUrl, postdata, {'Content-Type': 'multipart/form-data' })		
		.then(response => { 			
			if(response.data.error){
				dispatch(savePostFail(response.data));
				dispatch(setAlert(response.data.message, 'danger', 'postadd'));
			}
			else {
				dispatch(savePostSuccess(response.data));
				dispatch(setAlert(response.data.message, 'success', 'postadd'));
			}
		})
		.catch(error => {
			throw(error);
		})
	} 
} 

/* GET POST DETAIL IN ADMIN FOR EDIT */
export const getPostDetailStart = () => {
	return {
		type: POST_DETAIL_START
	}
}

export const getPostDetailSuccess = (data) => {
	return {
		type: POST_DETAIL_SUCCESS,
		payload:data
	}
}

export const getPostDetailFail = (error) => {
	return {
		type: POST_DETAIL_FAIL,
		payload:error
	}
}

export const getPostDetail = (postid) => {
	return (dispatch) => {
		dispatch(getPostDetailStart())
		return axios.get(postDetailUrl + '/' + postid)
		.then(response => { 
			//console.log(response.data);
			if(!response.data.error){
				dispatch(getPostDetailSuccess(response.data.data))
			}
			else {
				dispatch(getPostDetailFail(response.data.data));
				dispatch(setAlert(response.data.message, 'danger', 'postedit'));
			}
		})
		.catch(error => {
			throw(error);
		})
	} 
}

/* GET POST DETAIL (slug based)*/
export const getPostDetailBySlugStart = () => {
	return {
		type: POST_DETAIL_SLUG_START
	}
}

export const getPostDetailBySlugSuccess = (data) => {
	return {
		type: POST_DETAIL_SLUG_SUCCESS,
		payload:data
	}
}

export const getPostDetailBySlugFail = (error) => {
	return {
		type: POST_DETAIL_SLUG_FAIL,
		payload:error
	}
}

export const postDetailBySlug = (postslug) => {
	return (dispatch) => {
		dispatch(getPostDetailBySlugStart())
		return axios.get(postDetailSlugUrl + '/' + postslug)
		.then(response => { 
			//console.log(response.data);
			if(!response.data.error){
				dispatch(getPostDetailBySlugSuccess(response.data.data))
			}
			else {
				dispatch(getPostDetailBySlugFail(response.data.data));
				dispatch(setAlert(response.data.message, 'danger', 'postedit'));
			}
		})
		.catch(error => {
			throw(error);
		})
	} 
}

/* UPDATE POST IN ADMIN */
export const updatePostStart = ()=> {
	return {
		type: POST_EDIT_START
	}
}

export const updatePostFail = (error)=> {
	return {
		type: POST_EDIT_FAIL,
		payload: error
	}
}

export const updatePostSuccess = (data)=> {
	return {
		type: POST_EDIT_SUCCESS,
		payload: data
	}
}

export const updatePost = (postdata) => {
	//console.log(postdata);
	let formData  = new FormData();
	formData.set('id', postdata.id);
	formData.set('title', postdata.title);
	formData.set('slug', postdata.slug);
	formData.set('category', postdata.category);	
	formData.set('short_description', postdata.short_description);
	formData.set('description', postdata.description);
	formData.set('profilename', postdata.profilename);	
	formData.set('status', postdata.status);
	formData.set('meta_title', postdata.meta_title);
	formData.set('meta_keywords', postdata.meta_keywords);
	formData.set('meta_description', postdata.meta_description);
		
	if(postdata.featureimage && typeof postdata.featureimage === 'object'){
		formData.append('featureimage', postdata.featureimage, postdata.featureimage.name);	
	}
	
	return (dispatch) => {
		dispatch(updatePostStart()) 
		
		let config = {
			method: 'POST',
			url: updatePostUrl,
			data: formData ,
			headers: {'Content-Type': 'multipart/form-data' }
		};
		return axios(config)		
		//return axios.post(updatePostUrl, postdata)
		.then(response => { 
			//console.log(response.data);
			if(response.data.error){
				dispatch(updatePostFail(response.data));
				dispatch(setAlert(response.data.message, 'danger', 'postedit'));
			}
			else {
				dispatch(updatePostSuccess(response.data));
				dispatch(setAlert(response.data.message, 'success', 'postedit'));
			}
		})
		.catch(error => {
			throw(error);
		})
	}
}

/* DELETE POST IN ADMIN */
export const deletePostFail = (error)=> {
	return {
		type: POST_DELETE_FAIL,
		payload: error
	}
}

export const deletePostSuccess = (data)=> {
	return {
		type: POST_DELETE_SUCCESS,
		payload: data
	}
}

export const deletePost = (postid) => {
	return (dispatch) => {
		return axios.post(deletePostUrl, {postid: postid})
		.then(response => { 
			//console.log(response.data);
			if(response.data.error){
				dispatch(deletePostFail(response.data));
				dispatch(setAlert(response.data.message, 'danger', 'postlist'));
			}
			else {
				dispatch(deletePostSuccess(response.data.data));
				dispatch(setAlert(response.data.message, 'success', 'postlist'));
			}
		})
		.catch(error => {
			throw(error);
		})
	}
}