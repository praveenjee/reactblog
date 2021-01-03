import React, { Component }  from 'react';
import Alert from '../layout/Alert'; 
import SidebarAccount from '../components/SidebarAccount';
import { connect } from 'react-redux';

import { updateProfile } from '../actions/profile';
	
class MyProfilePage extends Component {

	constructor(props) {
		super(props); 
		//console.log(props);
		
		this.state = {
			firstname: this.firstnameInput ? this.retailerInput.value : null,
			lastname: this.lastnameInput ? this.retailerInput.value : null,
			emailadd: this.emailInput ? this.emailInput.value : null,
			phone: this.phoneInput ? this.phoneInput.value : null,
			address: this.addressInput ? this.addressInput.value : null,
			city: this.cityInput ? this.cityInput.value : null,
			state: this.stateInput ? this.stateInput.value : null,
			pincode: this.pincodeInput ? this.pincodeInput.value : null,			
			biography: this.biographyInput ? this.biographyInput.value : null,
				
			gender: this.props.userinfo ? this.props.userinfo.gender : null,
		
			whatsapp_preference:this.props.userinfo ? this.props.userinfo.whatsapp_preference : false,
			sms_preference:this.props.userinfo ? this.props.userinfo.sms_preference : false,
			email_preference:this.props.userinfo ? this.props.userinfo.email_preference : false,
			
			validationErrors: {} 
		}  		
	} 
	
	emailValid = () => {
		const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
		const str = this.emailInput.value;	
		
		if(str === null){
			return 'Email is blank';
		} 
		else if(str !== '' && !str.match(regEmail)){
			return 'Invalid email address';
		} 
	}
	
	phoneValid = () => {
		const regDigit = new RegExp(/^\d*(\.\d+)?$/);
		const str = this.phoneInput.value;	
		
		if(str === null){
			return 'Phone is blank';
		} 
		else if(str !== null && !str.match(regDigit)){
			return 'Put 10 digits phone number';
		} 
		else if(str.match(regDigit) && ((str.length < 10) || (str.length > 10)) ){
			return 'Invalid phone number';
		}
	}
	
	pincodeValid = () => {
		const regDigit = new RegExp(/^\d*(\.\d+)?$/);	
		const str = this.pincodeInput.value;
		
		if(str === null){
			return 'Pincode is blank';
		} 
		else if(str !== null && !str.match(regDigit)){
			return 'Put 6 digits Pincode';
		} 
		else if(str.match(regDigit) && ((str.length < 6) || (str.length > 6)) ){
			return 'Invalid Pincode';
		}
	}
	
	preferenceValid = () => {		
		if((this.state.whatsapp_preference === false && this.state.email_preference === false && this.state.sms_preference === false) || (this.state.whatsapp_preference === "0" && this.state.email_preference === "0" && this.state.sms_preference === "0")){
			return 'Please select at least one preference';
		}
	}
	
	validators = {
		firstname: (str) => str === '' ? 'First Name is blank' : '',
		//lastname: (str) => str === '' ? 'Last Name is blank' : '',
		//emailadd: () => this.emailValid(),
		phone: () => this.phoneValid(),
		address: (str) => str === '' ? 'Address is blank' : '',
		city: (str) => str === '' ? 'City is blank' : '',
		//state: (str) => str === '' ? 'State is blank' : '',
		pincode: () => this.pincodeValid(),
		gender: (str) => str === '' ? 'Gender is blank' : '',
		//biography: (str) => str === '' ? 'Biography is blank' : '',
		preference: () => this.preferenceValid()
	}
	
	validate = (name) => {
		const value = this.state[name];
		let error = this.validators.hasOwnProperty(name) ? this.validators[name](value) : '';
		this.setState(({validationErrors}) => ({validationErrors: {...validationErrors, [name]: error}}));
		return error;
	}
	
	handleInputChange = (event) => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		//alert(name, value);
		this.setState({ [name]: value }, 
		  () => this.validate(name)
		);
	};
	
	handleReset = () => {
		this.setState({
			firstname:'',
			lastname:'',
			emailadd:'',
			phone:'',
			address:'',
			city:'',
			state:'',
			pincode:'',
			biography:'',
			validationErrors: {}
		});
	}; 
	
	handleSubmit = (e) => { 
		e.preventDefault();
		
		const isValid = Object.keys(this.validators).map(this.validate).every((err) => !err);
		if(isValid) { 
		
			const firstname = this.state.firstname ? this.state.firstname : this.props.userinfo.firstname;
			const lastname = this.state.lastname ? this.state.lastname : this.props.userinfo.lastname;
			const emailadd = this.state.emailadd ? this.state.emailadd : this.props.userinfo.email;
			const phone = this.state.phone ? this.state.phone : this.props.userinfo.phone;
			const address = this.state.address ? this.state.address : this.props.userinfo.address;
			const city = this.state.city ? this.state.city : this.props.userinfo.city;
			const state = this.state.state ? this.state.state : this.props.userinfo.state;
			const pincode = this.state.pincode ? this.state.pincode : this.props.userinfo.pincode;
			const gender = this.state.gender ? this.state.gender : this.props.userinfo.gender;
			const biography = this.state.biography ? this.state.biography : this.props.userinfo.biography;
						
			const emailprefer = this.state.email_preference === false?'0':'1';
			const smsprefer = this.state.sms_preference === false?'0':'1';
			const whatsprefer= this.state.whatsapp_preference === false?'0':'1';
			    
			const whatsapp_preference = whatsprefer ? whatsprefer: this.props.userinfo.whatsapp_preference;
			const sms_preference = smsprefer ? smsprefer: this.props.userinfo.sms_preference;
			const email_preference = emailprefer ? emailprefer : this.props.userinfo.email_preference;
						
			const updatedProfile = {firstname: firstname, lastname: lastname, email: emailadd, phone: phone, address: address, city: city, state: state, pincode: pincode, gender: gender, biography: biography, email_preference: email_preference, sms_preference: sms_preference, whatsapp_preference: whatsapp_preference };
		  
			this.props.onUpdateProfile(updatedProfile);
			this.handleReset(); 
		}
		window.scrollTo(0, 0);
	}
	
	render() {
		const { userinfo, loading } = this.props;
				
		const updated_at = new Date(userinfo.updated_at);
		var year = updated_at.getFullYear();
		var month = updated_at.getMonth()+1;
		var date = updated_at.getDate();
		var updated_date = '';
		if (date < 10) date = '0' + date;
		if (month < 10) month = '0' + month;
		updated_date = date + '-' + month + '-' + year;
			
		return (
			<div className="container">
				<div className="row">				  
				  <div className="col-md-8">
					<h1 className="my-4">My Information 
					  <small>&nbsp;</small>
					</h1>					
					<div className="card mb-12">
						<h5 className="card-header">Update your profile Information
							<small style={{float:'right'}}>{'Last updated on: ' + updated_date }</small>
						</h5>
						<div className="card-body">
							<Alert msgdivid="logindiv" />
							
							<form name="frmUserProfile" onSubmit={this.handleSubmit}>
								 <div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<input type="text" className="form-control" name="firstname"  placeholder="First Name" tabIndex="1" defaultValue={userinfo.firstname} onChange={ this.handleInputChange } ref={element => this.firstnameInput = element} />
											<div className="errCls">{this.state.validationErrors.firstname}</div>
										</div>											
										<div className="form-group">			
											<input type="text" className="form-control" name="emailadd"  placeholder="Email" tabIndex="3" defaultValue={userinfo.email} onChange={ this.handleInputChange } ref={element => this.emailInput = element} readOnly={true} />
											<div className="errCls">{this.state.validationErrors.emailadd}</div>
										</div>
										<div className="form-group">			
											<input type="text" className="form-control" name="address"  placeholder="Address" tabIndex="5" defaultValue={userinfo.address} onChange={ this.handleInputChange } ref={element => this.addressInput = element}  />
											<div className="errCls">{this.state.validationErrors.address}</div>
										</div>
										<div className="form-group">			
											<input type="text" className="form-control" name="state"  placeholder="State" tabIndex="7" defaultValue={userinfo.state} onChange={ this.handleInputChange } ref={element => this.stateInput = element}  />
											<div className="errCls">{this.state.validationErrors.state}</div>
										</div> 
										
										<div className="form-group">			
											<label htmlFor="gender">Gender </label>&nbsp;&nbsp;
											<label className="radio-inline"><input type="radio" name="gender" tabIndex="9" defaultValue="Male" defaultChecked={userinfo.gender === 'Male'} onChange={ this.handleInputChange } /> Male</label>&nbsp; 
											
											<label className="radio-inline"><input type="radio" name="gender" tabIndex="10" defaultValue="Female" defaultChecked={userinfo.gender === 'Female'} onChange={ this.handleInputChange } /> Female</label> 
											<div className="errCls">{this.state.validationErrors.gender}</div>
										</div> 																
									</div>
									<div className="col-md-6">
										<div className="form-group">		
											<input type="text" className="form-control" name="lastname"  placeholder="Last Name" tabIndex="2" defaultValue={userinfo.lastname} onChange={ this.handleInputChange } ref={element => this.lastnameInput = element} />
											<div className="errCls">{this.state.validationErrors.lastname}</div>
										</div>
										<div className="form-group">			
											<input type="text" className="form-control" name="phone"  placeholder="Phone" tabIndex="4" defaultValue={userinfo.phone} onChange={ this.handleInputChange } ref={element => this.phoneInput = element} />
											<div className="errCls">{this.state.validationErrors.phone}</div>
										</div>
										<div className="form-group">			
											<input type="text" className="form-control" name="city"  placeholder="City" tabIndex="6" defaultValue={userinfo.city} onChange={ this.handleInputChange } ref={element => this.cityInput = element} />
											<div className="errCls">{this.state.validationErrors.city}</div>
										</div>
										<div className="form-group">			
											<input type="text" className="form-control" name="pincode"  placeholder="Pincode" tabIndex="8" defaultValue={userinfo.pincode} onChange={ this.handleInputChange } ref={element => this.pincodeInput = element} />
											<div className="errCls">{this.state.validationErrors.pincode}</div>
										</div>
										<div className="form-group">			
											<textarea name="biography" className="form-control" placeholder="Type your bio here.." rows="2" tabIndex="10" defaultValue={userinfo.biography} onChange={ this.handleInputChange } ref={element => this.biographyInput = element}></textarea>
											<div className="errCls">{this.state.validationErrors.biography}</div>
										</div>
									</div>
									<div className="col-md-12">
										<small>
											I'd like to receive exclusive subscription and news from The My Blog by: <br />
											
											<label className="checkbox-inline"><input type="checkbox" name="email_preference" id="email_preference" defaultChecked={userinfo.email_preference === "1"} onChange={ this.handleInputChange } /> Email</label>&nbsp;&nbsp;
											
											<label className="checkbox-inline"><input type="checkbox" name="sms_preference" id="sms_preference" defaultChecked={userinfo.sms_preference === "1"} onChange={ this.handleInputChange } /> SMS</label>&nbsp;&nbsp;
											
											<label className="checkbox-inline"><input type="checkbox" name="whatsapp_preference" id="whatsapp_preference"  defaultChecked={userinfo.whatsapp_preference === "1"} onChange={ this.handleInputChange } /> Whatsapp</label>
											
										</small>
										<div className="errCls"> {this.state.validationErrors.preference}</div><br /> 
																				
									</div>  
																										
									<div className="col-md-6">
										<button className="btn btn-primary btn-block" type="submit" tabIndex="14">{loading ? 'Please wait...':'Save Changes'}</button>
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

const mapStateToProps = state => {
    return {
        loading: state.profile.loading,
    };
};

const mapDispatchToProps = dispatch => {
	return {
		onUpdateProfile: userdata => { dispatch(updateProfile(userdata)) }
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProfilePage);