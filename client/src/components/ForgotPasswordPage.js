import React, { Component }  from 'react';
import { connect } from 'react-redux';

import Alert from '../layout/Alert'; 
import { forgotPassword } from '../actions/signup';

class ForgotPasswordPage extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			useremail: '',
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
	
	validators = {
		useremail: (str) => this.emailValid(str)
	} 
	
	validate = (name) => {
		const value = this.state[name];
		let error = this.validators.hasOwnProperty(name) ? this.validators[name](value) : '';
		this.setState(({validationErrors}) => ({validationErrors: {...validationErrors, [name]: error}}));
		return error;
	}
	
	handleInput = (e) => {		
		const fieldName = e.currentTarget.name;
		const fieldValue = e.currentTarget.value;
		this.setState(
		  { [fieldName]: fieldValue },
		  () => this.validate(fieldName)
		);
	}
	
	handleReset = (e) => {
		this.setState({
			useremail: '',
			validationErrors: {}
		});
	}
	
	handleSubmit = (e) => {
		e.preventDefault();
		
		const isValid = Object.keys(this.validators).map(this.validate).every((err) => !err);
		if(isValid) {
		  //console.log(this.state);
		  this.props.onForgotPassword(this.state.useremail);
		  this.handleReset();
		}		
	}
	
	render() {
		const { loading } = this.props;
		
		return (
			<div className="container">
				<div className="row">
						<div className="col-md-3">&nbsp;</div>
				  <div className="col-md-6">

					<h1 className="my-4">Forgot Password 
					  <small>&nbsp;</small>
					</h1>					
					<div className="card mb-12">
						<h5 className="card-header">Enter your registered email id</h5>
						<div className="card-body">
							<Alert msgdivid="forgotdiv" />
							
							<form name="frmForgotPassword" onSubmit={this.handleSubmit}>
								 <div className="row">
									<div className="col-md-12">
										<div className="form-group">
											<input type="text" className="form-control" name="useremail" placeholder="Email Address" tabIndex="1" value={this.state.useremail} onChange={(e) => this.handleInput(e)} />
											<div className="errCls">{this.state.validationErrors.useremail}</div>
										</div>
									</div>
									<div className="col-md-6">
										<button className="btn btn-primary btn-block" type="submit" tabIndex="4">{loading ? 'Please wait...': 'Submit'}</button>
									</div>
								</div>
							</form>
						</div>
					</div>
					
					<div className="mb-4">&nbsp;</div>
					<div className="mb-4">&nbsp;</div>
					<div className="mb-4">&nbsp;</div>
					<div className="mb-4">&nbsp;</div>
				  </div>
				  
					<div className="col-md-3">&nbsp;</div>
				</div> 
		  </div>
		)		
	}
}

const mapStateToProps = (state) => {
	return {
		loading: state.signup.loading
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onForgotPassword: userdata => { dispatch(forgotPassword(userdata)) }
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordPage);