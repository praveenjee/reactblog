import React, { Component }  from 'react';

import Header from '../components/Header';
import CountryPage from '../components/CountryPage';
import Footer from '../components/Footer';

class CountryContainer extends Component {
	
    componentDidMount() {
        window.scrollTo(0, 0);
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