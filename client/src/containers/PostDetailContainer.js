import React, { Component }  from 'react';
import { connect }  from 'react-redux';
import {withRouter} from 'react-router-dom';

import Header from '../components/Header';
import PostDetailPage from '../components/PostDetailPage';
import Footer from '../components/Footer';

import { postDetailBySlug } from '../actions/post';

import setMetaDetail from '../utils/setMetaDetail';
import { metaDetails } from '../utils/metaDetails';

class PostDetailContainer extends Component {
	
    componentDidMount() {
        window.scrollTo(0, 0);
		var path = window.location.pathname;
		var pathitems = path.split("/");
		var postslug = pathitems[2];
		
		setMetaDetail("MyBlog | " + postslug, "MyBlog | " + postslug, "MyBlog | " + postslug);
		
		this.props.dispatch(postDetailBySlug(postslug));
    }

	render() {	
		const {postdetail, loading} = this.props;
		//console.log(this.props);
		
		const spiner = {
			textAlign:'center',
			marginTop:'100px',
			marginBottom:'100px',
			marginLeft:'50%'
		}
		
		if (!postdetail.title && loading) {
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
				<PostDetailPage postinfo={postdetail} />
				<Footer />
			</div>
		)		
	}
}

const mapStateToProps = state => {
	return {
		postdetail: state.post.postdetail,
		loading: state.post.loading
	}
}

export default connect(mapStateToProps, null)(PostDetailContainer);