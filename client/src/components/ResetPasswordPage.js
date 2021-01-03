import React, { Component }  from 'react';
import { connect } from 'react-redux';

import Alert from '../layout/Alert'; 
import { resetPassword } from '../actions/signup';

class ResetPasswordPage extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			newpassword: '',
			confirmpassword: '',
			encdata : this.props.encdata ? this.props.encdata : '',		
			validationErrors: {}
		}	
	}
	
	newPasswordValid = (str) => {
		if(str === ''){
			return 'Password is blank';
		} 
		else if(str !== '' && str.length < 6){
			return 'Password should be min 6 chars';
		}
	}
	
	confirmPasswordValid = (str) => {
		if(str === ''){
			return 'Confirm password is blank';
		} 
		else if(str !== '' && str.length < 6){
			return 'Confirm password should be min 6 chars';
		}
		else if(str !== '' && str !== this.state.newpassword){
			return 'Confirm password and new password are not matched';
		}
	}
	
	validators = {
		newpassword: (str) => this.newPasswordValid(str),
		confirmpassword: (str) => this.confirmPasswordValid(str),
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
			newpassword: '',
			confirmpassword: '',			
			validationErrors: {}
		});
	}
		
	handleSubmit = (e) => {
		e.preventDefault();
		
		const isValid = Object.keys(this.validators).map(this.validate).every((err) => !err);
		if(isValid) {		  
			const newData = {
			  newpassword: this.state.newpassword,
			  confirmpassword: this.state.confirmpassword,
			  encdata : this.props.encdata
			}
			//console.log(newData);
			this.props.onResetPassword(newData);
			this.handleReset();
		}		
	}
	
	render() {
		const {error, item} = this.props;
		//console.log(this.props);
				
		return (
			<div className="container">
				<div className="row">
						<div className="col-md-3">&nbsp;</div>
				  <div className="col-md-6">
					<h1 className="my-4">Reset Password 
					  <small>&nbsp;</small>
					</h1>					
					<div className="card mb-12">
						<h5 className="card-header">Reset your password here</h5>
						<div className="card-body">
							<Alert msgdivid="resetpassword" />
							
							{(error === false) ? 
							<form name="frmChangePassword" onSubmit={this.handleSubmit}>
																
								<div className="row">
									<div className="col-md-12">									
										<div className="form-group">			
											<input type="password" className="form-control" name="newpassword" placeholder="New Password" tabIndex="2" value={this.state.newpassword} onChange={(e) => this.handleInput(e)} />
											<div className="errCls">{this.state.validationErrors.newpassword}</div>
										</div>
									
										<div className="form-group">		
											<input type="password" className="form-control" name="confirmpassword" placeholder="Confirm Password" tabIndex="3" value={this.state.confirmpassword} onChange={(e) => this.handleInput(e)} />
											<div className="errCls">{this.state.validationErrors.confirmpassword}</div>
										</div>
									</div>
									<div className="col-md-6">
										<button className="btn btn-primary btn-block" type="submit" tabIndex="4">Save Changes</button>
									</div>
								</div>
							</form> : ''} 
						</div>
					</div>
					
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


const mapStateToProps = state => {
	return {
		error: state.signup.error,
		item: state.signup.items
	};
}

const mapDispatchToProps = dispatch => {
	return {
		onResetPassword: userdata => { dispatch(resetPassword(userdata)) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordPage);