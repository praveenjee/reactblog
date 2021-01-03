import { FETCH_OTHER_DATA, FETCH_OTHER_FAIL } from '../actions/types';

const initialState = {
	items: []
};

export default function dashboardReducer(state = initialState, action) {
    const {type, payload } = action;

    switch (type) {	
		
		case FETCH_OTHER_DATA:
			return {
				...state,
				items: payload.data			
			}
			
		case FETCH_OTHER_FAIL:
			return {
				...state,
				items: payload.data	
			}						
		default:
			return state;
    }
}