import React, { Component }  from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Alert from '../layout/Alert'; 
import { signupPost } from '../actions/signup';

class SignupPage extends Component {
	constructor(props){
		super(props); 		
		this.state = {
			useremail: '',
			userphone: '',
			userpassword: '',
			usercpassword: '',
			validationErrors: {}
		}
	}
	
	emailValid = (str) => {
		const regEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'i');
		if(str === '' || str === null){
			return 'Email address is blank';
		} 
		else if(str !== '' && !str.match(regEmail)){
			return 'Invalid email address';
		} 
	}
	
	phoneValid = (str) => {
		const regDigit = new RegExp(/^\d*(\.\d+)?$/);		
		if(str === '' || str === null){
			return 'Phone number is blank';
		} 
		else if(str !== '' && !str.match(regDigit)){
			return 'Put 10 digits phone number';
		} 
		else if(str.match(regDigit) && ((str.length < 10) || (str.length > 10)) ){
			return 'Invalid phone number';
		}
	}
	
	passwordValid = (str) => {
		if(str === '' || str === null){
			return 'Password is blank';
		} 
		else if(str !== '' && str.length < 6){
			return 'Password should be min 6 chars';
		}
	}
	
	cpasswordValid = (str) => {
		if(str === '' || str === null){
			return 'Confirm password is blank';
		} 
		else if(str !== '' && str.length < 6){
			return 'Confirm password should be min 6 chars';
		}
		else if(str !== '' && str !== this.state.userpassword){
			return 'Confirm password and password are not matched';
		}
	}
	
	validators = {
		useremail: (str) => this.emailValid(str),
		userphone: (str) => this.phoneValid(str),
		userpassword: (str) => this.passwordValid(str),
		usercpassword: (str) => this.cpasswordValid(str),
	}
	
	validate = (name) => {
		const value = this.state[name];
		let error = this.validators.hasOwnProperty(name) ? this.validators[name](value) : '';
		this.setState(({validationErrors}) => ({validationErrors: {...validationErrors, [name]: error}}));
		return error;
	}
	
	handleInput = (e) => {
		const fieldValue = e.currentTarget.value;
		const fieldName = e.currentTarget.name;
		this.setState(
		  { [fieldName]: fieldValue },
		  () => this.validate(fieldName)
		);
	}
	
	handleReset = (e) => {
		this.setState({
			useremail: '',
			userphone: '',
			userpassword: '',
			usercpassword: '',
			validationErrors: {}
		});
	}
	
	handleSubmit = (e) => {
		e.preventDefault();
		
		const isValid = Object.keys(this.validators).map(this.validate).every((err) => !err);
		if(isValid) {
		  //console.log(this.state);
		  this.props.onSignupPost(this.state);
		  this.handleReset();
		}
	}
	
	render() {
		const { loading, items } =  this.props;
		const spiner = {
			textAlign:'center',
			marginTop:'100px',
			marginBottom:'100px',
			marginLeft:'50%'
		}
		
		var refererurl = '';
		if(items && items.data){
			refererurl = '/signupthanks';
			return <Redirect to={refererurl} />;
		}
		
		if(loading){
			return (
				<div id="main-wrapper">
					<div className="container">
						<div className="row" style={spiner}>
							<div className="spinner-border text-dark" role="status">
								<span className="sr-only">Loading...</span>
							</div>
						</div>
					</div>
				</div>
			)
		} 

		const x = "😸 😍";
		
		return (
			<div className="container">	
				
				<div className="row">
					<div className="col-md-3">&nbsp;</div>	
					
					<div className="col-md-6">
						<h1 className="my-4">Sign Up
						  <small>{x}</small>
						</h1>
						
						<div className="card mb-12">
							<h5 className="card-header">User Registration</h5>	
						  <div className="card-body">
							<Alert msgdivid="logindiv" /> 
							
							<form id="frmUserLogin" name="frmUserLogin" onSubmit={this.handleSubmit}>
								<div className="form-group">
									{/*<label htmlFor="useremail">Email Address</label>*/}
									<input type="text" className="form-control" name="useremail" placeholder="Email Address" value={this.state.useremail} onChange={(e) => this.handleInput(e)} />
									<div className="errCls">{this.state.validationErrors.useremail}</div>
								</div>
								<div className="form-group">
									{/*<label htmlFor="userphone">Phone</label>*/}
									<input type="text" className="form-control" name="userphone" placeholder="Phone" value={this.state.userphone} onChange={(e) => this.handleInput(e)} />
									<div className="errCls">{this.state.validationErrors.userphone}</div>
								</div>
								<div className="form-group">
									{/*<label htmlFor="userpassword">Password</label>*/}
									<input type="password" className="form-control" name="userpassword" placeholder="Password" value={this.state.userpassword} onChange={(e) => this.handleInput(e)} />
									<div className="errCls">{this.state.validationErrors.userpassword}</div>
								</div>
								<div className="form-group">
									{/*<label htmlFor="usercpassword">Confirm Password</label>*/}
									<input type="password" className="form-control" name="usercpassword" placeholder="Confirm Password" value={this.state.usercpassword} onChange={(e) => this.handleInput(e)} />
									<div className="errCls">{this.state.validationErrors.usercpassword}</div>
								</div>
								<button className="btn btn-primary btn-block" type="submit">Sign Up</button>
							</form>
							<div style={{textAlign:'center',marginTop:'10px'}}>
								<Link to="/ulogin">Already have an account? Log In</Link>
							</div>
						  </div>
						</div><br /><br />
					
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
		loading: state.signup.loading,
		error: state.signup.error,
		items: state.signup.items
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSignupPost: userdata => { dispatch(signupPost(userdata)); }
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);