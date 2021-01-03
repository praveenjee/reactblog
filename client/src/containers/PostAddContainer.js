import React, { Component }  from 'react';

import Header from '../components/Header';
import PostAddPage from '../components/PostAddPage';
import Footer from '../components/Footer';

class PostAddContainer extends Component {
	
    componentDidMount() {
        window.scrollTo(0, 0);
    }

	render() {
		return (
			<div id="main-wrapper">
				<Header />
				<PostAddPage />
				<Footer />
			</div>
		)		
	}
}

export default PostAddContainer;