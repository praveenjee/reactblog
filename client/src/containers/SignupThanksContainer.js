import React, { Component }  from 'react';

import Header from '../components/Header';
import SignupThanksPage from '../components/SignupThanksPage';
import Footer from '../components/Footer';

class signupThanksContainer extends Component {
	
    componentDidMount() {
        window.scrollTo(0, 0);
    }

	render() {
		return (
			<div id="main-wrapper">
				<Header />
				<SignupThanksPage />
				<Footer />
			</div>
		)		
	}
}

export default signupThanksContainer;