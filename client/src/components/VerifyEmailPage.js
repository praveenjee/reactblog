import React, { Component }  from 'react';
import { Link }  from 'react-router-dom';
import { connect } from 'react-redux';
import { verifyEmail } from '../actions/signup';


class VerifyEmailPage extends Component {
	constructor(props){
		super(props); 		
		this.state = {
			verifyEmailMsg: '',
			verifyEmailErr: false
		}
	} 
	
	componentDidMount(){
		let path = window.location.pathname;
		let stoken = path.split('/')[2]; 
		this.props.verifyEmail(stoken);
	}
	
	render() {
		const {verifyMsg, verifyErr, loading} = this.props;
		const spiner = {
			textAlign:'center',
			marginTop:'100px',
			marginBottom:'100px',
			marginLeft:'50%'
		}
		
		if(loading && verifyErr === ''){
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
		
		return (
			<div className="container">
				<div className="row">				  
				  <div className="col-md-12">

					<h1 className="my-4">Verify Email.  
					  <small>&nbsp;</small>
					</h1>					
					<div className="card mb-12">					  
					  <div className="card-body">
						<h2>{verifyMsg}</h2>
						<p className="card-text">
							<br /><br />
							<Link to="/ulogin">Login here</Link> <br />
						</p>
					  </div>
					</div>
					
					<div className="mb-4">&nbsp;</div>
					<div className="mb-4">&nbsp;</div>
					<div className="mb-4">&nbsp;</div>
					<div className="mb-4">&nbsp;</div>
				  </div>				  
				  
				</div> 
		  </div>
		)		
	}
}

const mapStateToProps = (state) => {
	return {
		verifyMsg: state.signup.verifyEmailMsg,
		verifyErr: state.signup.verifyEmailErr,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		verifyEmail: signuptoken => { dispatch(verifyEmail(signuptoken)); }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmailPage);