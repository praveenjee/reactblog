import React, { Component }  from 'react';
import { connect }  from 'react-redux';

import Header from '../components/Header';
import ResetPasswordPage from '../components/ResetPasswordPage';
import Footer from '../components/Footer';

import { verifyResetPassword } from '../actions/signup';

class ResetPasswordContainer extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			encdata : ''
		}	
	}
	
    componentDidMount() {
        window.scrollTo(0, 0);
		let path = window.location.pathname;
		let encodedata = path.split('/')[2]; 
		this.setState({
			encdata: encodedata
		})			
		this.props.verifyResetPassword(encodedata);
    }

	render() {						
		return (
			<div id="main-wrapper">
				<Header />
				<ResetPasswordPage encdata={this.state.encdata} />
				<Footer />
			</div>
		)		
	}
}

const mapDispatchToProps = dispatch => {
	return {
		verifyResetPassword: userdata => { dispatch(verifyResetPassword(userdata)) }
	}
}

export default connect(null, mapDispatchToProps)(ResetPasswordContainer);