import React, { Component }  from 'react';

import Header from '../components/Header';
import AboutPage from '../components/AboutPage';
import Footer from '../components/Footer';

import setMetaDetail from '../utils/setMetaDetail';
import { metaDetails } from '../utils/metaDetails';

class AboutContainer extends Component {
	
    componentDidMount() {
        window.scrollTo(0, 0);
		const path = this.props.match.path.replace("/","");
		if(path === "about"){
			 setMetaDetail(metaDetails.about.meta_title, metaDetails.about.meta_keyword, metaDetails.about.meta_description);
		}
    }

	render() {
		//console.log(this.props);
		
		return (
			<div id="main-wrapper">
				<Header />
				<AboutPage />
				<Footer />
			</div>
		)		
	}
}

export default AboutContainer;