import React, { Component }  from 'react';

import Header from '../components/Header';
import PostPage from '../components/PostPage';
import Footer from '../components/Footer';

class PostContainer extends Component {
	
    componentDidMount() {
        window.scrollTo(0, 0);
    }

	render() {
		//console.log(this.props);
		
		return (
			<div id="main-wrapper">
				<Header />
				<PostPage />
				<Footer />
			</div>
		)		
	}
}

export default PostContainer;