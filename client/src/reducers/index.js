import { combineReducers } from 'redux';

import alert from './alertReducer';
import auth from './authReducer';
import signup from './signupReducer';
import contact from './contactReducer';
import profile from './profileReducer';
import dashboard from './dashboardReducer';
import country from './countryReducer';
import post from './postReducer';
import weather from './weatherReducer';
import home from './homeReducer';
import category from './categoryReducer';
import search from './searchReducer';

export default combineReducers({    
    alert:alert,    
    auth:auth,
    signup:signup,
    contact:contact,
    profile:profile,
	dashboard:dashboard,
    country:country,
    post:post,
	weather:weather,
	home:home,
	category:category,
	search:search,
});

