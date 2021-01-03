import { CONTACT_SUBMIT, CONTACT_SUCCESS, CONTACT_FAIL } from '../actions/types';

const initialState = {
	items: [],
	loading: false,
	error: null,
};

export default function contactReducer(state = initialState, action) {
       const {type, payload } = action;

       switch (type) {
         
		case CONTACT_SUBMIT: 
			return {
				...state,
				loading: true
			}
		
		case CONTACT_SUCCESS:
			return {
				...state,
				loading: false,
				items: payload
			};

		case CONTACT_FAIL:
			return {
				...state,				
				loading: false,
				error: payload
			}; 
					
		default:
			return state;
    }
}