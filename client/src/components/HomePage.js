import React, { Component }  from 'react';
import { connect }  from 'react-redux';
import { Link }  from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

import Sidebar from '../components/Sidebar';
import { getAllPosts } from '../actions/home';
import { dateBuilder } from '../utils/dateFormat';

class HomePage extends Component {
	
	constructor(props){
		super(props) 		
		//console.log(this.props.posts)
		this.state = {
			page: 1,
			perpage: 3,
			total: this.props.total ? this.props.total : 0,
			nPages: Math.ceil(this.props.total / 3),
		}
	}
	
	goToNext() {
		this.setState( prevState => {
			if(prevState.page >= this.state.nPages)
				return this.state.nPages
			else 
				return {page: prevState.page + 1}
			}, 
			() => this.props.getAllPosts(this.state.page)
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
			() => this.props.getAllPosts(this.state.page)
		);
		window.scrollTo(0, 0);
	}
	
	handleClick =(event)=>{
        this.setState({
				page: Number(event.target.id)
			},
			() => this.props.getAllPosts(this.state.page)
		);
		window.scrollTo(0, 0);
	}
		
	render() {
		const { posts, total } = this.props; 
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
													
		const renderPosts = posts.map((post, index) => {
			return (
				<div className="card mb-4" key={index} data-pid={post.id}>
					<img className="card-img-top" src={ post.imagepath ? "../uploads/"+post.imagepath : "../images/750x300.png" } alt="Card 1" />
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
		
		return (
			<div className="container">

				<div className="row">				  
				  <div className="col-md-8">

					<h1 className="my-4">Home 😄
					  <small>&nbsp;</small>
					</h1>
					
					{renderPosts} 					
					
					<ul className="pagination justify-content-center mb-4">
					  <li className="page-item">
						<Link className="page-link" to="#" onClick={()=> this.goToPrevious()} disabled={this.state.page == 1}>&larr; Older</Link>
					  </li>
					  <li className="page-item">
						<Link className="page-link" to="#" onClick={()=> this.goToNext()} disabled={this.state.page == nPages}>Newer &rarr;</Link>
					  </li>
					</ul>
					
					<ul className="page-numbers">{renderPageNumbers}</ul>

				  </div>
				  
				  <Sidebar />  
				</div> 
		  </div>
		)		
	}
}

const mapStateToProps = state => {
	return {
		posts: state.home.posts,
		loading: state.home.loading
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getAllPosts: (pageno) => { dispatch(getAllPosts(pageno)); }
	}
} 
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);