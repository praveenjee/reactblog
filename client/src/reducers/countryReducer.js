import { FETCH_COUNTRY_START, FETCH_COUNTRY_SUCCESS, FETCH_COUNTRY_FAIL } from '../actions/types';

const initialState = {
	items: [],
	loading: false,
	error: null,
	searchkey:'',
};

export default function countryReducer(state = initialState, action) {
       const {type, payload } = action;

       switch (type) {
         
		case FETCH_COUNTRY_START: 
			return {
				...state,
				loading: true,
				searchkey: payload
			}
		
		case FETCH_COUNTRY_SUCCESS:
			return {
				...state,
				loading: false,
				items: payload,
				searchkey: payload.keyword
			};

		case FETCH_COUNTRY_FAIL:
			return {
				...state,				
				loading: false,
				error: true,
				items: payload,
				searchkey: payload.keyword
			}; 
			
		default:
			return state;
    }
}