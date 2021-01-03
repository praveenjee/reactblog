import React, { Component }  from 'react';
import { connect }  from 'react-redux';
import { Link }  from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

import Sidebar from '../components/Sidebar';
import { getAllCategoryPosts } from '../actions/category';
import { dateBuilder } from '../utils/dateFormat';
import { ucwords } from '../utils/trimString';

class SearchResultPage extends Component {
	
	constructor(props){
		super(props) 		
		//console.log(this.props.posts)
		this.state = {
			page: 1,
			perpage: 3,
			total: this.props.total ? this.props.total : 0,
			nPages: Math.ceil(this.props.total / 3),
			search: this.props.searchkey ? this.props.searchkey : "",
		}
		
		this.categoryList = [
			{ 'web-design':'Web Design', 'html':'HTML', 'javascript':'JavaScript', 'freebies':'Freebies', 'css':'CSS', 'tutorials':'Tutorials', 'news':'News' },
		];
	}
		
	goToNext() {
		this.setState( prevState => {
			if(prevState.page >= this.state.nPages)
				return this.state.nPages
			else 
				return {page: prevState.page + 1}
			}, 
			() => this.props.searchPost(this.state.search, this.state.page)
		);
		window.scrollTo(0, 0);
	}
	
	goToPrevious(){
		this.setState( prevState => {
			if((prevState.page -1) <= 0) 
				return 1
			else 
				return {page: prevState.page - 1}
			}, 
			() => this.props.searchPost(this.state.search, this.state.page)
		);
		window.scrollTo(0, 0);
	}
	
	handleClick =(event)=>{
        this.setState({
				page: Number(event.target.id)
			},
			() => this.props.searchPost(this.state.search, this.state.page)
		);
		window.scrollTo(0, 0);
	}
		
	render() {
		const { posts, total, searchkey } = this.props; 
		
		
		const { perpage, nPages } = this.state;
		
		const pageNumbers = [];
		for (let i = 1; i <= nPages; i++) {
		  pageNumbers.push(i);
		}

		const renderPageNumbers = pageNumbers.map(number => {
			return (
				<li key={number} id={number} onClick={this.handleClick} style={{fontWeight: (number == this.state.page) ? "bold": ''}}> {number} </li>
			);
		});	
		
		var renderPosts = '';
		if(total > 0){		
			renderPosts = posts.map((post, index) => {
				return (
					<div className="card mb-4" key={index} data-pid={post.id}>
						{/*<img className="card-img-top" src={ post.imagepath ? "../uploads/"+post.imagepath : "../images/750x300.png" } alt="Card 1" />*/}
						<div className="card-body">
							<h2 className="card-title">{post.title}</h2>
							<div className="card-text">{ReactHtmlParser(post.short_description)}</div><br />
							<Link to={"/post/" + post.slug} className="btn btn-primary">Read More &rarr;</Link>
						</div>
						<div className="card-footer text-muted">
							Posted on {dateBuilder(new Date(post.created_at))} by <Link to="#"> {post.profilename}</Link>
						</div>
					</div>				
				)
			});	
		}
		else {
			renderPosts = <div className="card mb-4" ><div className="card-body"><h2 className="card-title" style={{textAlign:'center'}}>No results for your search</h2></div></div>
		}
						
		return (
			<div className="container">

				<div className="row">				  
				  <div className="col-md-8">

					<h2 className="my-4">Search result for: <i>{this.props.searchkey}</i></h2> 
						{(this.state.total > 0) ? <div style={{marginBottom:'10px'}}><small style={{color:'red'}}>{this.state.total} results found.</small><br /></div> : null}
					<div className="breadcrumb">
						<small>
							<Link to="/">Home</Link> &raquo;&nbsp; 
							<Link to="/category">Search</Link> &raquo;&nbsp; {searchkey}
						</small>
					</div>
					
					{renderPosts} 					
					
					{(total > this.state.perpage) ? 					
						<>
						<ul className="pagination justify-content-center mb-4">
						  <li className="page-item">
							<Link className="page-link" to="#" onClick={()=> this.goToPrevious()} disabled={this.state.page == 1}>&larr; Older</Link>
						  </li>
						  <li className="page-item">
							<Link className="page-link" to="#" onClick={()=> this.goToNext()} disabled={this.state.page == nPages}>Newer &rarr;</Link>
						  </li>
						</ul>					
						<ul className="page-numbers">{renderPageNumbers}</ul>
						</>
					: null
					}
				  </div>
				  
				  <Sidebar />  
				</div> 
		  </div>
		)		
	}
}

const mapStateToProps = state => {
	return {
		loading: state.search.loading,
		posts: state.search.items,
		searchkey: state.search.searchkey,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getAllCategoryPosts: (searchkey, pageno) => { dispatch(getAllCategoryPosts(searchkey, pageno)); }
	}
} 
export default connect(mapStateToProps, mapDispatchToProps)(SearchResultPage);