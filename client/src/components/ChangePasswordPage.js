import React, { Component }  from 'react';
import { connect } from 'react-redux';

import Alert from '../layout/Alert'; 
import SidebarAccount from '../components/SidebarAccount';
import { changePassword } from '../actions/profile';

class ChangePasswordPage extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			currentpassword: '',
			newpassword: '',
			confirmpassword: '',
			validationErrors: {}
		}	
	}
	
	newPasswordValid = (str) => {
		if(str === ''){
			return 'New password is blank';
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
		currentpassword: (str) => str === '' ? 'Current password is blank' : '',
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
			currentpassword: '',
			newpassword: '',
			confirmpassword: '',			
			validationErrors: {}
		});
	}
	
	handleSubmit = (e) => {
		e.preventDefault();
		
		const isValid = Object.keys(this.validators).map(this.validate).every((err) => !err);
		if(isValid) {
		  //console.log(this.state);
		  this.props.onChangePassword(this.state);
		  this.handleReset();
		}		
	}
	
	render() {
		const {loading} = this.props;
		
		return (
			<div className="container">
				<div className="row">				  
				  <div className="col-md-8">

					<h1 className="my-4">Change Password 
					  <small>&nbsp;</small>
					</h1>					
					<div className="card mb-12">
						<h5 className="card-header">Change your password here</h5>
						<div className="card-body">
							<Alert msgdivid="change" />
							
							<form name="frmChangePassword" onSubmit={this.handleSubmit}>
								 <div className="row">
									<div className="col-md-12">
										<div className="form-group">
											<input type="password" className="form-control" name="currentpassword" placeholder="Current Password" tabIndex="1" value={this.state.currentpassword} onChange={(e) => this.handleInput(e)} />
											<div className="errCls">{this.state.validationErrors.currentpassword}</div>
										</div>	
										
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
										<button className="btn btn-primary btn-block" type="submit" tabIndex="4">{loading ? 'Please wait...': 'Save Changes'}</button>
									</div>
								</div>
							</form>
						</div>
					</div>
					
					<div className="mb-4">&nbsp;</div>
				  </div>				  
				  <SidebarAccount />  				  

				</div> 
		  </div>
		)		
	}
}

const mapStateToProps = (state) => {
	return {
		loading: state.profile.loading
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onChangePassword: userdata => { dispatch(changePassword(userdata)) }
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordPage);