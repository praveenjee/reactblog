import React, { Component }  from 'react';
import { Link } from 'react-router-dom';


class Footer extends Component {
	
	render() {
		return (
		  <footer className="py-5 bg-dark">
			<div className="container">
			  <p className="m-0 text-center text-white">Copyright &copy; 2019 <Link to ="/">My Blog</Link>. All Rights Reserved. </p>
			</div>
		  </footer>
		)		
	}
}

export default Footer;