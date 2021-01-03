import React, { Component }  from 'react';

import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import Footer from '../components/Footer';

class LoginContainer extends Component {
	
    componentDidMount() {
        window.scrollTo(0, 0);
    }

	render() {
		return (
			<div id="main-wrapper">
				<Header />
				<LoginPage />
				<Footer />
			</div>
		)		
	}
}

export default LoginContainer;