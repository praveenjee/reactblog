import { SIGNUP_SUBMIT, SIGNUP_SUCCESS, SIGNUP_FAIL, VERIFY_EMAIL_START, VERIFY_EMAIL_SUCCESS, VERIFY_EMAIL_FAIL, FORGOT_PASSWORD_SUBMIT, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAIL, VERIFY_RESET_LINK_SUCCESS, VERIFY_RESET_LINK_FAIL, RESET_SUBMIT, RESET_SUCCESS, RESET_FAIL} from '../actions/types';

const initialState = {
	items: [],
	loading: false,
	error: null,
	
	verifyEmailMsg: '',
	verifyEmailErr: false
};

export default function signupReducer(state = initialState, action) {
       const {type, payload } = action;

       switch (type) {
         
		case SIGNUP_SUBMIT: 
			return {
				...state,
				loading: true
			}
		
		case SIGNUP_SUCCESS:
			return {
				...state,
				loading: false,
				items: payload
			};

		case SIGNUP_FAIL:
			return {
				...state,				
				loading: false,
				error: payload
			}; 
			
		case VERIFY_EMAIL_START:
			return {
				...state,
				loading: true
			}
			
		case VERIFY_EMAIL_SUCCESS:
			return {
				...state,
				verifyEmailMsg: payload.message,
				verifyEmailErr: false,
				loading: false
			}
			
		case VERIFY_EMAIL_FAIL:
			return {
				...state,
				verifyEmailMsg: payload.message,
				verifyEmailErr: true,
				loading: false
			}
			
		case FORGOT_PASSWORD_SUBMIT:
			return {
				...state,
				loading: true,
			}
			
		case FORGOT_PASSWORD_SUCCESS:
			return {
				...state,
				loading: false,
				items: payload
			}
			
		case FORGOT_PASSWORD_FAIL:
			return {
				...state,
				loading: false,
				error:payload
			}
			
		case VERIFY_RESET_LINK_SUCCESS:
			return {
				...state,
				loading:false,
				items:payload,
				error:false
			}
		
		case VERIFY_RESET_LINK_FAIL:
			return {
				...state,
				loading:false,
				error:payload
			}
			
		case RESET_SUBMIT:
			return {
				...state,
				loading: true,
			}
			
		case RESET_SUCCESS:
			return {
				...state,
				loading: false,
				items: payload
			}
			
		case RESET_FAIL:
			return {
				...state,
				loading: false,
				error:payload
			}	
			
		default:
			return state;
    }
}