import React, { Component }  from 'react';
import { connect }  from 'react-redux';
import { Link } from 'react-router-dom';

import Alert from '../layout/Alert'; 
import SidebarAccount from '../components/SidebarAccount';
import {fetchPosts, deletePost} from '../actions/post';

import Pagination from '../components/Pagination';
import SearchControl from '../components/SearchControl';

class PostPage extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			totalRecords: "",
			totalPages: "",
			pageLimit: "",
			currentPage: "",
			startIndex: "",
			endIndex: ""
		};
	}
	
	componentDidMount(){
		window.scrollTo(0, 0);
		this.props.fetchPosts(""); 		
		this.setState({
			totalRecords: (this.props.items) ? this.props.items.length : 0
		});
	}
	
	onChangePage = data => {
		this.setState({
			pageLimit: data.pageLimit,
			totalPages: data.totalPages,
			currentPage: data.page,
			startIndex: data.startIndex,
			endIndex: data.endIndex
		});
	};
	
	onSearch = keyword => {
		this.props.fetchPosts(keyword);
	};
	
	convertDate = (dateStr) => {
		var d = new Date(dateStr);
		var n = d.toLocaleDateString();
		return dateStr.toString().slice(0,10);
	}
	
	removePost = (postid) => {
		if(postid){
			if(window.confirm("Are you sure want to remove this post?")){
				//console.log(postid);
				this.props.deletePost(postid);
			}
		}
	}

	showPosts = posts => { 		
		if (posts.length > 0) {
			return posts.map((post, index) => (
				<tr key={index}>
					<td>{post.id}.</td>
					<td>
						{post.title}<br />
						<small>Posted By: {post.profilename ? post.profilename : 'Admin'}</small>
					</td>
					<td>{post.category}</td>
					<td>
						{(post.status === '1') ? <p className="text-success">Active</p> : <p className="text-danger">Inactive</p>} 
					</td>
					<td>{this.convertDate(post.created_at)}</td>
					<td>
						<Link to={"/post/" + post.slug} title="View Post">
							<i className="fa fa-eye" aria-hidden="true"></i></Link>&nbsp;
						<Link to={"/postedit/" + post.id} title="Edit Post">
							<i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link>&nbsp; 						
						<Link to="#" title="Remove Post" onClick={() => this.removePost(post.id)}>
							<i className="fa fa-times" aria-hidden="true"></i></Link>
					</td>
				</tr>
			))
		} 
		else {
			const loadingstr = (<tr><td colSpan="5" style={{textAlign:'center'}}>Please wait...</td></tr>);			
			const noresult = (<tr><td colSpan="5" style={{textAlign:'center'}}>No Result Found.</td></tr>);
			return (this.props.loading) ? loadingstr: noresult
		} 
	};
	
	render() {
		var {loading, items, error, keyword} = this.props;
		//console.log(this.props);
		
		var { totalPages, currentPage, pageLimit, startIndex, endIndex } = this.state; 
		
		var rowsPerPage = [];
		if (keyword) {
			items = items.filter(item => {
				return (item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) ;
			}); 
		}
		
		if(items.length > 0){
			rowsPerPage = items.slice(startIndex, endIndex + 1);
		}
					
		return (
			<div className="container">
				<div className="row">				  
				  <div className="col-md-8">

					<h1 className="my-4">Posts  
					  <small>&nbsp;</small>
					</h1>					
					<div className="card mb-12">
						<h5 className="card-header">Post List 
							{
								(items && items.length > 0) ? (<small style={{float:'right'}}>{items.length} Posts</small>) : ''
							}
							
						</h5>
					  <div className="card-body">
						<Alert msgdivid="postlist" />
						
						<div className="row">
							<SearchControl onSearch={this.onSearch} keyword={keyword} searchBy="Search By Post Title, Code" page="Post Page" />  
			  
							<div className="table-responsive" >
								<table className="table table-striped">
									<thead>
										<tr>
											<th>ID</th>
											<th style={{width:'300px'}}>Title</th>
											<th>Category</th>
											<th>Status</th>
											<th>Added On</th>
											<th style={{width:'85px'}}>Action</th>
										</tr>
									</thead>
									<tbody>
									{this.showPosts(rowsPerPage)}
									</tbody>
								</table>
							</div>
							
							{							
								(items && items.length > 0) ? 
									<Pagination 
										totalRecords={items.length} 
										pageLimit={pageLimit || 10} 
										initialPage={1} 
										pagesToShow={5} 
										onChangePage={this.onChangePage}
									/>	
								: ''
							}
							
						</div>
					  </div>
					</div>
					
					<div className="mb-4">&nbsp;</div>
				  </div>				  
				  <SidebarAccount />  				  

				</div> 
		  </div>
		)		
	}
}

const mapStateToProps = state => {
	return {
		items: state.post.items,
		loading: state.post.loading,
		error: state.post.error,
		keyword: state.post.searchkey
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchPosts: (keyword) => { dispatch(fetchPosts(keyword)); },
		deletePost: (postid) => { dispatch(deletePost(postid)); }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);