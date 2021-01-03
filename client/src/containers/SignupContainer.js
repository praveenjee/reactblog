import React, { Component }  from 'react';

import Header from '../components/Header';
import SignupPage from '../components/SignupPage';
import Footer from '../components/Footer';

import setMetaDetail from '../utils/setMetaDetail';
import { metaDetails } from '../utils/metaDetails';

class SignupContainer extends Component {
	
    componentDidMount() {
        window.scrollTo(0, 0);
		
		const path = this.props.match.path.replace("/","");		
		if(path === "usignup"){
			 setMetaDetail(metaDetails.usignup.meta_title, metaDetails.usignup.meta_keyword, metaDetails.usignup.meta_description);
		}
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