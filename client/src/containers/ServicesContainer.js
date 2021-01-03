import React, { Component }  from 'react';

import Header from '../components/Header';
import ServicePage from '../components/ServicePage';
import Footer from '../components/Footer';

import setMetaDetail from '../utils/setMetaDetail';
import { metaDetails } from '../utils/metaDetails';

class ServicesContainer extends Component {
	
    componentDidMount() {
        window.scrollTo(0, 0);
		const path = this.props.match.path.replace("/","");
		if(path === "services"){
			 setMetaDetail(metaDetails.services.meta_title, metaDetails.services.meta_keyword, metaDetails.services.meta_description);
		}
    }

	render() {
		//console.log(this.props);
		
		return (
			<div id="main-wrapper">
				<Header />
				<ServicePage />
				<Footer />
			</div>
		)		
	}
}

export default ServicesContainer;