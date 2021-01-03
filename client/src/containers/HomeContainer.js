import React, { Component }  from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import HomePage from '../components/HomePage';
import Footer from '../components/Footer';

import setMetaDetail from '../utils/setMetaDetail';
import { metaDetails } from '../utils/metaDetails';
import { getAllPosts } from '../actions/home';

class HomeContainer extends Component {
	
    componentDidMount() {
        window.scrollTo(0, 0);
		const path = this.props.match.path.replace("/","home");
		if(path === "home"){
			 setMetaDetail(metaDetails.home.meta_title, metaDetails.home.meta_keyword, metaDetails.home.meta_description);
		}
		
		this.props.dispatch(getAllPosts())
    }

	render() {
		const {loading, posts, total} = this.props;
		
		const spiner = {
			textAlign:'center',
			marginTop:'100px',
			marginBottom:'100px',
			marginLeft:'50%'
		}
		
		if (loading && posts === null && posts.length == 0) {
			return (
				<div id="main-wrapper">
					<div className="container">
						<div className="row" style={spiner}>
							<div className="spinner-border text-dark" role="status">
								<span className="sr-only">Loading...</span>
							</div>
						</div>
					</div>
				</div>
			)
		}		
		
		return (
			<div id="main-wrapper">
				<Header />
				<HomePage posts={posts} total={total} />
				<Footer />
			</div>
		)		
	}
}

const mapStateToProps = state => {
	return {		
		loading: state.home.loading,
		total: state.home.total,
		posts: state.home.posts,
	}
}

export default connect(mapStateToProps, null)(HomeContainer);