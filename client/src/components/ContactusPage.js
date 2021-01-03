import React, { Component }  from 'react';
import { connect } from 'react-redux';
import Alert from '../layout/Alert';
import { contactusPost } from '../actions/contact';

class ContactusPage extends Component {
	
	constructor(props){
		super(props); 		
		this.state = {
			firstname: '',
			lastname: '',
			emailadd: '',
			subject: '',
			messagetxt: '',
			validationErrors: {}
		}
	}
	
	emailValid = (str) => {
		const regEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'i');
		if(str === ''){
			return 'Email address is blank';
		} 
		else if(str !== '' && !str.match(regEmail)){
			return 'Invalid email address';
		} 
	}
	
	validators = {
		firstname: (str) => str === '' ? 'First Name is blank' : '',
		lastname: (str) => str === '' ? 'Last Name is blank' : '',
		emailadd: (str) => this.emailValid(str),
		subject: (str) => str === '' ? 'Subject is blank' : '',
		messagetxt: (str) => str === '' ? 'Message is blank' : '',
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
			firstname: '',
			lastname: '',
			emailadd: '',
			subject: '',
			messagetxt: '',
			validationErrors: {}
		});
	}
	
	handleSubmit = (e) => {
		e.preventDefault();
		
		const isValid = Object.keys(this.validators).map(this.validate).every((err) => !err);
		if(isValid) {
		  //console.log(this.state);
		  this.props.onContactPost(this.state);
		  this.handleReset();
		}
	}
	
	render() {
		const {loading} = this.props;
		
		return (
			<div className="container">
				<div className="row">
					
					<div className="col-md-8">
						<h1 className="my-4">Contact Us 😄
						  <small>&nbsp;</small>
						</h1>					
						<div className="card mb-12">
							<h5 className="card-header">Drop us a line</h5>	
						  <div className="card-body">
							<Alert msgdivid="logindiv" /> 
							
							<form id="frmUserLogin" name="frmUserLogin" onSubmit={this.handleSubmit}>
							 <div className="row">
								<div className="col-md-6">
									<div className="form-group">			
										<input type="text" className="form-control" name="firstname"  placeholder="First Name" value={this.state.firstname} onChange={(e) => this.handleInput(e)} tabIndex="1" />
										<div className="errCls">{this.state.validationErrors.firstname}</div>
									</div>									
									<div className="form-group">			
										<input type="text" className="form-control" name="emailadd"  placeholder="Email" value={this.state.emailadd} onChange={(e) => this.handleInput(e)} tabIndex="3" />
										<div className="errCls">{this.state.validationErrors.emailadd}</div>
									</div>
								</div>
								
								<div className="col-md-6">
									<div className="form-group">
										<input type="text" className="form-control" name="lastname"  placeholder="Last Name" value={this.state.lastname} onChange={(e) => this.handleInput(e)} tabIndex="2" />
										<div className="errCls">{this.state.validationErrors.lastname}</div>
									</div>
									
									<div className="form-group">		
										<input type="text" className="form-control" name="subject"  placeholder="Subject" value={this.state.subject} onChange={(e) => this.handleInput(e)} tabIndex="4" />
										<div className="errCls">{this.state.validationErrors.subject}</div>
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">		
										<textarea name="messagetxt" className="form-control" placeholder="Type your message here.." rows="5" onChange={(e) => this.handleInput(e)} value={this.state.messagetxt} tabIndex="5"></textarea>
										<div className="errCls">{this.state.validationErrors.messagetxt}</div>
									</div>									
								</div>
								<div className="col-md-6">
									<button className="btn btn-primary btn-block" type="submit" tabIndex="6">{loading ? 'Please wait...': 'Send Message'}</button>
								</div>
							</div>
							</form>
						  </div>
						</div>

						<div className="mb-4">&nbsp;</div>
					</div>
					
					<div className="col-md-4">
						<div className="card my-4">
						  <h5 className="card-header">Address</h5>
						  <div className="card-body">
							<ul><li><span className="icon"><i className="pe-7s-map"></i></span><span className="text"><span>MIG-2 (UG), Ganga Appartment, <br />Plat No. 37,38,39, Unione Residency <br />Behrampur, NH-24, Ghaziabad <br /> Uttar Pradesh - 201009</span></span></li><li><span className="icon"><i className="pe-7s-call"></i></span><span className="text">Mobile: 9999-253-895</span></li><li><span className="icon"><i className="pe-7s-mail-open"></i></span><span className="text">Email: info@myblog.com</span></li></ul>
						  </div>
						</div>
						
						<div className="card my-4">
						  <h5 className="card-header">Map</h5>
						  <div className="card-body">
							<iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d112163.06064358536!2d77.1997482325937!3d28.536844733363285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d28.617378199999997!2d77.277701!4m5!1s0x390ce75cda155571%3A0xf4b37ad141781c2!2sclovity!3m2!1d28.458841!2d77.306147!5e0!3m2!1sen!2sin!4v1587701954831!5m2!1sen!2sin" height="275" frameBorder="0" style={{border:0,width:'100%'}} allowFullScreen="" aria-hidden="false" tabIndex="0" title="Google map"></iframe>
						  </div>
						</div>
					</div>
					<div className="mb-4">&nbsp;</div>
					
				</div> 
		  </div>
		)		
	}
}

const mapStateToProps = (state) => {
	return {
		loading: state.contact.loading,
		error: state.contact.error
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onContactPost: userdata => { dispatch(contactusPost(userdata)); }
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactusPage);