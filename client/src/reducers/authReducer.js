import { SET_CURRENT_USER, LOGIN_SUBMIT, LOGIN_SUCCESS, LOGOUT, LOGIN_FAIL} from '../actions/types';

const initialState = {
	loading: '',        
	isAuthenticated: false,
	user: {},
	token: localStorage.getItem('token'),
};

export default function authReducer(state = initialState, action) {
       const {type, payload } = action;

       switch (type) {
         
		case LOGIN_SUBMIT: 
			return {
				...state,
				loading: true
			}
		
		case LOGIN_SUCCESS:
			localStorage.setItem('token', payload.token);
			return {
				...state,
				...payload,
				isAuthenticated: true,
				loading: false
			};

		case SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: payload
			};

		case LOGIN_FAIL:
		case LOGOUT:
			localStorage.removeItem('token');
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				user:{}
			}; 
			
		default:
			return state;
    }
}