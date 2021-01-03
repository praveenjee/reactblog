import React, { Component }  from 'react';

import Header from '../components/Header';
import ChangePasswordPage from '../components/ChangePasswordPage';
import Footer from '../components/Footer';

import setMetaDetail from '../utils/setMetaDetail';
import { metaDetails } from '../utils/metaDetails';

class ChangePasswordContainer extends Component {
	
    componentDidMount() {
        window.scrollTo(0, 0);
		
		const path = this.props.match.path.replace("/","");		
		if(path === "change-password"){
			 setMetaDetail(metaDetails.changepassword.meta_title, metaDetails.changepassword.meta_keyword, metaDetails.changepassword.meta_description);
		}
    }

	render() {
		//console.log(this.props);
		
		return (
			<div id="main-wrapper">
				<Header />
				<ChangePasswordPage />
				<Footer />
			</div>
		)		
	}
}

export default ChangePasswordContainer;