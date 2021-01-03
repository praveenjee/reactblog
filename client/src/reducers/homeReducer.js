import { GET_POST_START, GET_POST_SUCCESS, GET_POST_FAIL } from '../actions/types';

const initialState = {
	posts: [], 
	loading: false,
	error: false,
	total:0
};

export default function postReducer(state = initialState, action) {
    const {type, payload } = action;

    switch (type) {
        
		case GET_POST_START: 
			return {
				...state,
				loading: true
			}
		
		case GET_POST_SUCCESS:
			return {
				...state,
				loading: false,
				posts: payload.items,
				total: payload.total,
			};

		case GET_POST_FAIL:
			return {
				...state,				
				loading: false,
				error: true,
				posts: payload.items,
			}; 
		
		default:
			return state;
    }
}