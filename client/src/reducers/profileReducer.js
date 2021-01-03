import { 
	PROFILE_INFO_SUBMIT, PROFILE_INFO_UPDATE, PROFILE_UPDATE_FAIL, 
	FETCH_ACCOUNT_INFO, FETCH_ACCOUNT_FAIL,
	CHANGE_PASSWORD_SUBMIT, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAIL 
} from '../actions/types';

const initialState = {
	userinfo: [],
	item: [],
	loading: false,
	error: null, 
};

export default function profileReducer(state = initialState, action) {
       const {type, payload } = action;

       switch (type) {
        /* For profile page update */ 
		case PROFILE_INFO_SUBMIT: 
			return {
				...state,
				loading: true
			}
		
		case PROFILE_INFO_UPDATE:
			return {
				...state,
				loading: false,
				userinfo: payload.data
			};

		case PROFILE_UPDATE_FAIL:
			return {
				...state,				
				loading: false,
				error: payload
			}; 
			
		/*Fetch account detail for profile page*/	
		case FETCH_ACCOUNT_INFO:
			return {
				...state,
				error: false,
				userinfo: payload
			}
		
		case FETCH_ACCOUNT_FAIL:
			return {
				...state,
				error: true,
				item: payload
			}
		
		//Password Change 	
		case CHANGE_PASSWORD_SUBMIT: 
			return {
				...state,
				loading: true
			}
		
		case CHANGE_PASSWORD_SUCCESS:
			return {
				...state,
				loading: false,
				item: payload
			};

		case CHANGE_PASSWORD_FAIL:
			return {
				...state,				
				loading: false,
				error: payload
			};	
				
		default:
			return state;
    }
}