import React, { Component }  from 'react';
import { connect }  from 'react-redux';
import {withRouter} from 'react-router-dom';

import Header from '../components/Header';
import PostEditPage from '../components/PostEditPage';
import Footer from '../components/Footer';

import { getPostDetail } from '../actions/post';

class PostEditContainer extends Component {
	
    componentDidMount() {
        window.scrollTo(0, 0);
		var path = window.location.pathname;
		var pathitems = path.split("/");
		var postid = parseInt(pathitems[2]);
		
		this.props.dispatch(getPostDetail(postid));
    }

	render() {	
		const {postinfo, loading} = this.props;
		
		const spiner = {
			textAlign:'center',
			marginTop:'100px',
			marginBottom:'100px',
			marginLeft:'50%'
		}
		
		if (!postinfo.title && loading) {
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
				<PostEditPage postinfo={postinfo} />
				<Footer />
			</div>
		)		
	}
}

const mapStateToProps = state => {
	return {
		postinfo: state.post.postinfo,
		loading: state.post.loading
	}
}

/* const mapDispatchToProps = dispatch => {
	return {
		getPostDetail: (postid) => { dispatch(getPostDetail(postid)); }
	}
} */

export default connect(mapStateToProps, null)(PostEditContainer);