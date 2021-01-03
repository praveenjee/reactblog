import React, { Component }  from 'react';

import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import Footer from '../components/Footer';

import setMetaDetail from '../utils/setMetaDetail';
import { metaDetails } from '../utils/metaDetails';

class LoginContainer extends Component {
	
    componentDidMount() {
        window.scrollTo(0, 0);
		
		const path = this.props.match.path.replace("/","");		
		if(path === "ulogin"){
			 setMetaDetail(metaDetails.ulogin.meta_title, metaDetails.ulogin.meta_keyword, metaDetails.ulogin.meta_description);
		}
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