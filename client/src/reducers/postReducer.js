import { 
	FETCH_POST_START, FETCH_POST_SUCCESS, FETCH_POST_FAIL, 
	POST_SAVE_START, POST_SAVE_SUCCESS, POST_SAVE_FAIL, 
	POST_DETAIL_START, POST_DETAIL_SUCCESS, POST_DETAIL_FAIL, 
	POST_EDIT_START, POST_EDIT_SUCCESS, POST_EDIT_FAIL,
	POST_DETAIL_SLUG_START, POST_DETAIL_SLUG_SUCCESS, POST_DETAIL_SLUG_FAIL,
	POST_DELETE_SUCCESS, POST_DELETE_FAIL,	
} from '../actions/types';

const initialState = {
	items: [], //For post listing
	loading: false,
	error: null,
	searchkey:'',
	postinfo:[], //For post edit detail
	postdetail:[], //For post detail
};

export default function postReducer(state = initialState, action) {
       const {type, payload } = action;

       switch (type) {
        //POST LIST 
		case FETCH_POST_START: 
			return {
				...state,
				loading: true,
				searchkey: payload
			}
		
		case FETCH_POST_SUCCESS:
			return {
				...state,
				loading: false,
				items: payload,
				searchkey: payload.keyword
			};

		case FETCH_POST_FAIL:
			return {
				...state,				
				loading: false,
				error: true,
				items: payload,
				searchkey: payload.keyword
			}; 
		//POST ADD 
		case POST_SAVE_START: 
			return {
				...state,
				loading: true,
			}	
		
		case POST_SAVE_SUCCESS: 
			return {
				...state,
				loading: false,
				error: false,
				items: payload
			}
			
		case POST_SAVE_FAIL: 
			return {
				...state,
				loading: false,
				error: true,
				items: payload
			}
		
		//POST DETAIL FOR EDIT
		case POST_DETAIL_START: 
			return {
				...state,
				loading: true,
				postinfo: [],
			}	
		
		case POST_DETAIL_SUCCESS: 
			return {
				...state,
				loading: false,
				error: false,
				postinfo: payload
			}
			
		case POST_DETAIL_FAIL: 
			return {
				...state,
				loading: false,
				error: true,
				postinfo: payload
			}
		
		//POST EDIT	
		case POST_EDIT_START: 
			return {
				...state,
				loading: true,
			}	
		
		case POST_EDIT_SUCCESS: 
			return {
				...state,
				loading: false,
				error: false,
				items: payload
			}
			
		case POST_EDIT_FAIL: 
			return {
				...state,
				loading: false,
				error: true,
				items: payload
			} 
			
		//POST DETAIL PAGE
		case POST_DETAIL_SLUG_START:
			return {
				...state,
				loading: true,
			}	

		case POST_DETAIL_SLUG_SUCCESS:
			return {
				...state,
				loading: false,
				error: false,
				postdetail: payload
			}
			
		case POST_DETAIL_SLUG_FAIL:
			return {
				...state,
				loading: false,
				error: true,
				postdetail: payload
			}
					
		//POST DELETE
		case POST_DELETE_SUCCESS:
			return {
				...state,
				loading: false,
				error: false,
				items: payload,
			}
			
		case POST_DELETE_FAIL:
			return {
				...state,				
				loading: false,
				error: true,
				items: payload,
			}
		
		default:
			return state;
    }
}