import React, { Component }  from 'react';

import Header from '../components/Header';
import ContactusPage from '../components/ContactusPage';
import Footer from '../components/Footer';

import setMetaDetail from '../utils/setMetaDetail';
import { metaDetails } from '../utils/metaDetails';

class ContactusContainer extends Component {
	
    componentDidMount() {
        window.scrollTo(0, 0);
		const path = this.props.match.path.replace("/","");
		if(path === "contactus"){
			 setMetaDetail(metaDetails.contactus.meta_title, metaDetails.contactus.meta_keyword, metaDetails.contactus.meta_description);
		}
    }

	render() {
		
		return (
			<div id="main-wrapper">
				<Header />
				<ContactusPage />
				<Footer />
			</div>
		)		
	}
}

export default ContactusContainer;