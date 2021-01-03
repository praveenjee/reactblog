import { FETCH_WEATHER_START, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAIL } from '../actions/types';

const initialState = {
	weatherinfo: [],
	loading: false,
	error: null,
};

export default function weatherReducer(state = initialState, action) {
       const {type, payload } = action;

       switch (type) {
         
		case FETCH_WEATHER_START: 
			return {
				...state,
				loading: true
			}
		
		case FETCH_WEATHER_SUCCESS:
			return {
				...state,
				loading: false,
				weatherinfo: payload
			};

		case FETCH_WEATHER_FAIL:
			return {
				...state,				
				loading: false,
				error: payload
			}; 
					
		default:
			return state;
    }
}