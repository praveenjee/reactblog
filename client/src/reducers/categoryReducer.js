import { GET_CATEGORY_POST_START, GET_CATEGORY_POST_SUCCESS, GET_CATEGORY_POST_FAIL } from '../actions/types';

const initialState = {
	posts: [], 
	loading: false,
	error: false,
	total:0,
	catname:"",
};

export default function categoryReducer(state = initialState, action) {
    const {type, payload } = action;

    switch (type) {
        
		case GET_CATEGORY_POST_START: 
			return {
				...state,
				loading: true
			}
		
		case GET_CATEGORY_POST_SUCCESS:
			return {
				...state,
				posts: payload.items,
				total: payload.total,
				catname: payload.catname
			};

		case GET_CATEGORY_POST_FAIL:
			return {
				...state,	
				error: true,
				posts: payload.items,
				catname: payload.catname
			}; 
		
		default:
			return state;
    }
}