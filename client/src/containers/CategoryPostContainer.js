import React, { Component }  from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import CategoryPage from '../components/CategoryPage';
import Footer from '../components/Footer';

import setMetaDetail from '../utils/setMetaDetail';
import { metaDetails } from '../utils/metaDetails';
import { getAllCategoryPosts } from '../actions/category';

class CategoryPostContainer extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			catname: ""
		}
	}
	
    componentDidMount() {
        window.scrollTo(0, 0);
		const category = this.props.match.url.replace("/category/",""); 
				
		const path = this.props.match.path.replace("/:slug","");		
		if(path === "/category"){
			 setMetaDetail(metaDetails.home.meta_title, metaDetails.home.meta_keyword, metaDetails.home.meta_description);
		}
		
		this.props.dispatch(getAllCategoryPosts(category))
    }

	render() {
		const {loading, posts, total, catname} = this.props;
		
		const spiner = {
			textAlign:'center',
			marginTop:'100px',
			marginBottom:'100px',
			marginLeft:'50%'
		}
		
		if (loading && posts.length == 0) {
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
				<CategoryPage catname={catname} posts={posts} total={total} />
				<Footer />
			</div>
		)		
	}
}

const mapStateToProps = state => {
	return {		
		loading: state.category.loading,
		total: state.category.total,
		posts: state.category.posts,
		catname: state.category.catname,
	}
}

export default connect(mapStateToProps, null)(CategoryPostContainer);