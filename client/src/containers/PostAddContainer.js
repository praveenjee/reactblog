import React, { Component }  from 'react';

import Header from '../components/Header';
import PostAddPage from '../components/PostAddPage';
import Footer from '../components/Footer';

import setMetaDetail from '../utils/setMetaDetail';
import { metaDetails } from '../utils/metaDetails';

class PostAddContainer extends Component {
	
    componentDidMount() {
        window.scrollTo(0, 0);
		
		const path = this.props.match.path.replace("/","");		
		if(path === "postadd"){
			 setMetaDetail(metaDetails.postadd.meta_title, metaDetails.postadd.meta_keyword, metaDetails.postadd.meta_description);
		}
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