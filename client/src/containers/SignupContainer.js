import React, { Component }  from 'react';

import Header from '../components/Header';
import SignupPage from '../components/SignupPage';
import Footer from '../components/Footer';

class SignupContainer extends Component {
	
    componentDidMount() {
        window.scrollTo(0, 0);
    }

	render() {
		return (
			<div id="main-wrapper">
				<Header />
				<SignupPage />
				<Footer />
			</div>
		)		
	}
}

export default SignupContainer;