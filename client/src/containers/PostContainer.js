import React, { Component }  from 'react';

import Header from '../components/Header';
import PostPage from '../components/PostPage';
import Footer from '../components/Footer';

import setMetaDetail from '../utils/setMetaDetail';
import { metaDetails } from '../utils/metaDetails';

class PostContainer extends Component {
	
    componentDidMount() {
        window.scrollTo(0, 0);
		
		const path = this.props.match.path.replace("/","");		
		if(path === "posts"){
			 setMetaDetail(metaDetails.posts.meta_title, metaDetails.posts.meta_keyword, metaDetails.posts.meta_description);
		}
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