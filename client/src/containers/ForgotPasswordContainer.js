import React, { Component }  from 'react';

import Header from '../components/Header';
import ForgotPasswordPage from '../components/ForgotPasswordPage';
import Footer from '../components/Footer';

class ForgotPasswordContainer extends Component {
	
    componentDidMount() {
        window.scrollTo(0, 0);
    }

	render() {
		//console.log(this.props);
		
		return (
			<div id="main-wrapper">
				<Header />
				<ForgotPasswordPage />
				<Footer />
			</div>
		)		
	}
}

export default ForgotPasswordContainer;