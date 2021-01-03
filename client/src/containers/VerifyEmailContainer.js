import React, { Component }  from 'react';

import Header from '../components/Header';
import VerifyEmailPage from '../components/VerifyEmailPage';
import Footer from '../components/Footer';

class VerifyEmailContainer extends Component {
	
    componentDidMount() {
        window.scrollTo(0, 0);
    }

	render() {
		return (
			<div id="main-wrapper">
				<Header />
				<VerifyEmailPage />
				<Footer />
			</div>
		)		
	}
}

export default VerifyEmailContainer;