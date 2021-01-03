import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { connect }  from 'react-redux';

import Alert from '../layout/Alert'; 
//import SidebarAccount from '../components/SidebarAccount';
import Sidebar from '../components/Sidebar';
import { dateFormat, dateBuilder, convertDate } from '../utils/dateFormat';

class PostDetailPage extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			title: this.props.postinfo ? this.props.postinfo.title : "",
			slug: this.props.postinfo ? this.props.postinfo.slug : "",
			short_description: this.props.postinfo ? this.props.postinfo.short_description : "",
			description: this.props.postinfo ? this.props.postinfo.description : "",
			profilename: this.props.postinfo ? this.props.postinfo.profilename : "",
			status: this.props.postinfo ? this.props.postinfo.status : "0",
			meta_title: this.props.postinfo ? this.props.postinfo.meta_title : "",
			meta_keywords: this.props.postinfo ? this.props.postinfo.meta_keywords : "",
			meta_description: this.props.postinfo ? this.props.postinfo.meta_description : "",
			validationErrors: {}
		};
	}
	
	componentDidMount(){
		window.scrollTo(0, 0);
	}
				
	createMarkup = (content) => {
		return { __html: content };
	}
		
	render() {
		const {loading, postinfo} = this.props;
		//console.log(this.props);
							
		return (
			<div className="container">
				<div className="row">				  
				  <div className="col-md-8">
					<h1 className="my-4">{postinfo.title}</h1>
					<div className="breadcrumb">
						<small>
							<Link to="/">Home</Link> &raquo;&nbsp; 
							<Link to="/posts">Posts</Link> &raquo;&nbsp; {postinfo.title}
						</small>
					</div>	
					<div className="card mb-12">
						{/*<h5 className="card-header">&nbsp;</h5>*/}
						<img className="card-img-top" src={ postinfo.imagepath ? "../uploads/"+postinfo.imagepath : "../images/750x300.png" } alt={postinfo.title} />
						<div className="card-body">	
							{ReactHtmlParser(postinfo.description)}
						</div>
						<div className="card-footer text-muted">
							Posted on {dateBuilder(new Date(postinfo.created_at))} by
							<Link to="#"> {postinfo.profilename} </Link>
						</div>
					</div>
					
					<div className="mb-4">&nbsp;</div>
				  </div>				  
				  <Sidebar />  				  

				</div> 
		  </div>
		)		
	}
}

const mapStateToProps = state => {
	return {		
		loading: state.post.loading
	}
}

export default connect(mapStateToProps, null)(PostDetailPage);