import { SEARCH_POST_SUBMIT, SEARCH_POST_SUCCESS, SEARCH_POST_FAIL } from '../actions/types';

const initialState = {
	items: [],
	loading: false,
	total:0,
	searchkey:""
};

export default function searchReducer(state = initialState, action) {
    const {type, payload } = action;

    switch (type) {	
		
		case SEARCH_POST_SUBMIT:
			return {
				...state,
				loading: true 
			}
			
		case SEARCH_POST_SUCCESS:
			return {
				...state,
				items: payload.data,
				total: payload.total,				
				searchkey: payload.searchkey,				
			}
			
		case SEARCH_POST_FAIL:
			return {
				...state,
				items: payload,
				total: payload.total,
				searchkey: payload.searchkey,
			}						
		default:
			return state;
    }
}