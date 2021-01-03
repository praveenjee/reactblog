import React, { Component }  from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './containers/HomeContainer';
import About from './containers/AboutContainer';
import Services from './containers/ServicesContainer';
import Contactus from './containers/ContactusContainer';
import Login from './containers/LoginContainer';
import Signup from './containers/SignupContainer';
import Country from './containers/CountryContainer';
import SignupThanks from './containers/SignupThanksContainer';
import VerifyEmail from './containers/VerifyEmailContainer';
import MyProfile from './containers/MyProfileContainer';
import ChangePassword from './containers/ChangePasswordContainer';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './containers/DashboardContainer';
import ForgotPassword from './containers/ForgotPasswordContainer';
import ResetPassword from './containers/ResetPasswordContainer';

import Post from './containers/PostContainer';
import PostAdd from './containers/PostAddContainer';
import PostEdit from './containers/PostEditContainer';
import PostDetail from './containers/PostDetailContainer';
import CategoryPost from './containers/CategoryPostContainer';
import SearchResult from './containers/SearchResultContainer';

import NodataFound from './components/NodataFound';

class App extends Component { 

	render(){
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/about' component={About} />
					<Route exact path='/services' component={Services} />
					<Route exact path='/contactus' component={Contactus} />				  
					<Route exact path='/ulogin' component={Login} />				  
					<Route exact path='/usignup' component={Signup} />	
					<Route exact path='/forgot-password' component={ForgotPassword} />	
					<Route exact path='/reset-password/:data' component={ResetPassword} />	
							  
					<Route exact path='/signupthanks' component={SignupThanks} />				  
					<Route exact path='/verify-email/:signuptoken' component={VerifyEmail} />

					<PrivateRoute exact path='/dashboard' component={Dashboard} />
					<PrivateRoute exact path='/account-info' component={MyProfile} />
					<PrivateRoute exact path='/change-password' component={ChangePassword} />
					<PrivateRoute exact path='/countries' component={Country} />

					<Route exact path='/post/:slug' component={PostDetail} />
					<Route exact path='/category/:slug' component={CategoryPost} />
					<Route exact path='/search/:keyword' component={SearchResult} />
					
					<PrivateRoute exact path='/posts' component={Post} />					
					<PrivateRoute exact path='/postadd' component={PostAdd} />
					<PrivateRoute exact path='/postedit/:id' component={PostEdit} />
					
					<Route path="*" component={NodataFound} />
				</Switch>
			</BrowserRouter>		
		)
	}
}

export default App;
