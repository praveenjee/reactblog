import React, { Component }  from 'react';
import { Link } from 'react-router-dom';

import WeatherWidget from '../components/WeatherWidget';

class SidebarAccount extends Component {
	render() {
		//console.log(window.location.pathname);		
		return (
		<div className="col-md-4">
		
			{(localStorage.token) ? (<div className="card my-4">
				<h5 className="card-header">Important Links</h5>
				<div className="card-body">
					<div className="row">
						<div className="col-lg-12"> 
							<ul className="list-unstyled mb-0">
								<li>
									<Link to="/dashboard">Dashboard</Link>
								</li>
								<li>
									<Link to="/change-password">Change Password</Link>
								</li>
								<li>
									<Link to="/account-info">My Information</Link>
								</li>
								<li>
									<Link to="/countries">Countries</Link>
								</li>
								<li>
									<Link to="/posts">Posts</Link>
								</li>
								<li>
									<Link to="/postadd">Add Post</Link>
								</li>
							</ul>
						</div>	
					</div>
				</div>
			</div>) : ''}
									
			{(localStorage.token) ? <WeatherWidget /> : null}

		</div>
		)
	}
} 

export default SidebarAccount;