import React, { Component }  from 'react';
import { Link, NavLink } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

import { logout } from '../actions/auth';
import { connect } from 'react-redux';

class Header extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			myTime : new Date().toLocaleTimeString()
		}
	}
	
	componentDidMount(){
		window.scrollTo(0, 0);
		setInterval(() => {
			this.setState({
				myTime: new Date().toLocaleTimeString()
			});
		}, 1000);
	}
	
	render() {
		//console.log(this.props);
		const {isAuthenticated, loading, user} = this.props;
		
		const curdate = new Date();
		const curhour = curdate.getHours();
		
		let greetmsg = '';
		let greeticon = '';
		let greetlbl = {};
		if(curhour >= 5 && curhour < 12){
			greetmsg = 'Good Morning';
			greeticon = '<i class="fa fa-sun-o fa-1x"></i>';
			greetlbl = {color : '#fff', paddingRight: '20px'};
		}else if(curhour >= 12 && curhour < 17){
			greetmsg = 'Good Afternoon';
			greeticon = '<i class="fa fa-clock-o fa-1x"></i>';
			greetlbl = {color : 'yellow', paddingRight: '20px'};
		}else if(curhour >= 17 && curhour <= 21){
			greetmsg = 'Good Evening';
			greeticon = '<i class="fa fa-clock-o fa-1x"></i>';
			greetlbl = {color : 'blue', paddingRight: '20px'};
		}else{
			greetmsg = 'Good Night';
			greeticon = '<i class="fa fa-night-o fa-1x"></i>';
			greetlbl = {color : '#000', paddingRight: '20px'};
		}
						
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
				<div className="container">
					<Link className="navbar-brand" to="/">My Blog</Link>
		<span style={greetlbl}><small>Hi {(isAuthenticated) ? user.firstname+'':''}, {greetmsg} {ReactHtmlParser(greeticon)}</small></span>
					  
					<span style={{color: '#fff'}}>{this.state.myTime}</span>
				  
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
					</button>
				  
				  <div className="collapse navbar-collapse" id="navbarResponsive">
					<ul className="navbar-nav ml-auto">
					  <li className="nav-item">
						<NavLink exact className="nav-link" to="/">Home</NavLink>
					  </li>
					  <li className="nav-item">
						<NavLink className="nav-link" to="/about">About</NavLink>
					  </li>
					  <li className="nav-item">
						<NavLink className="nav-link" to="/services">Services</NavLink>
					  </li>
					  <li className="nav-item">
						<NavLink className="nav-link" to="/contactus">Contact Us</NavLink>
					  </li>
						
					{!loading && (isAuthenticated) ? (
						<React.Fragment>
							<li className="nav-item"><Link className="nav-link" to="/dashboard" title={user.name}>My Account</Link></li>
							{/*<li className="nav-item"><Link className="nav-link" to="/#" onClick={() => this.props.logout()}>Log Out</Link></li>*/}
						</React.Fragment>
						) : 
										
						(
						<React.Fragment>
							<li className="nav-item"><NavLink className="nav-link" to="/ulogin">Log In</NavLink></li>
							<li className="nav-item"><NavLink className="nav-link" to="/usignup">Sign Up</NavLink></li>
						</React.Fragment>
						)
					}
				</ul>
			  </div>
			</div>
		  </nav>
		)		
	}
}

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.auth.isAuthenticated,
		loading: state.auth.loading,
		user: state.auth.user
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => { dispatch(logout()) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);