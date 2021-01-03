import React, { Component }  from 'react';
import {Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import Alert from '../layout/Alert'; 
import {loginPost} from '../actions/auth';


class LoginPage extends Component {
	constructor(props){
		super(props); 		
		this.state = {
			username: '',
			upassword: '',
			validationErrors: {}
		}
	}
	
	validators = {
		username: (str) => this.emailValid(str),
		upassword: (str) => str === '' ? 'Password is blank' : '',
	}
	
	emailValid = (str) => {
		const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
		if(str === ''){
			return 'Email address is blank';
		} 
		else if(str !== '' && !str.match(regEmail)){
			return 'Invalid email address';
		} 
	}
	
	validate = (name) => {
		const value = this.state[name];
		let error = this.validators.hasOwnProperty(name) ? this.validators[name](value) : '';
		this.setState(({validationErrors}) => ({validationErrors: {...validationErrors, [name]: error}}));
		return error;
	}
	
	handleInputChange = (e) => {
		const fieldName = e.currentTarget.name;
		this.setState(
		  { [fieldName]: e.currentTarget.value },
		  () => this.validate(fieldName)
		);
	}
		
	handleReset = () => {
		this.setState({
			username: '',
			upassword: '',	  
			validationErrors: {}
		});
	};
	
	handleSubmit = (e) => { 
		e.preventDefault();

		const isValid = Object.keys(this.validators).map(this.validate).every((err) => !err);
		if(isValid) {
		  //console.log(this.state);
		  this.props.onLoginPost(this.state);
		  this.handleReset();
		}
	}	
	
	render() {
		const {user, isAuthenticated, loading} = this.props;
		
		var refererurl = '';
		if(user && user.id === 1 && isAuthenticated){
			refererurl = '/dashboard';
			return <Redirect to={refererurl} />;
		} 
						
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-3">&nbsp;</div>	
					
					<div className="col-md-6">
						<h1 className="my-4">Log In 😄
							<small>&nbsp;</small>
						</h1>
						
						<div className="card mb-12">
							<h5 className="card-header">User Login</h5>	
						  <div className="card-body">
							<Alert msgdivid="logindiv" /> 
							<form name="frmUserLogin" onSubmit={this.handleSubmit}>
								<div className="form-group">
									<input type="text" className="form-control" name="username" placeholder="Email Address" value={this.state.username} onChange={ this.handleInputChange } />
									<div className="errCls">{this.state.validationErrors.username}</div>
								</div>
								<div className="form-group">
									<input type="password" className="form-control" name="upassword"  placeholder="Password" value={this.state.upassword} onChange={ this.handleInputChange } />
									<div className="errCls">{this.state.validationErrors.upassword}</div>
								</div>
								<button className="btn btn-primary btn-block" type="submit">{loading ? 'Please wait...':'Log In'}</button>
							</form>
							
							<div style={{textAlign:'center',marginTop:'10px'}}>
								<Link to="/forgot-password">Lost your password?</Link>
							</div>
						  </div>
						</div>
						<br /><br /><br />
						<br /><br />
					
						{/*<div className="mb-4">&nbsp;</div>*/}
					</div>				  
				  
					<div className="col-md-3">&nbsp;</div>
				</div> 
		  </div>
		)		
	}
}

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.auth.isAuthenticated,
		loading: state.auth.loading,
		user: state.auth.user 
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onLoginPost: userdata => { dispatch(loginPost(userdata)); }
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);