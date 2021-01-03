import React, { Component }  from 'react';

import Header from '../components/Header';
import CountryPage from '../components/CountryPage';
import Footer from '../components/Footer';

import setMetaDetail from '../utils/setMetaDetail';
import { metaDetails } from '../utils/metaDetails';

class CountryContainer extends Component {
	
    componentDidMount() {
        window.scrollTo(0, 0);
		
		const path = this.props.match.path.replace("/","");		
		if(path === "countries"){
			 setMetaDetail(metaDetails.countries.meta_title, metaDetails.countries.meta_keyword, metaDetails.countries.meta_description);
		}
    }

	render() {
		//console.log(this.props);
		
		return (
			<div id="main-wrapper">
				<Header />
				<CountryPage />
				<Footer />
			</div>
		)		
	}
}

export default CountryContainer;