import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Link,NavLink} from 'react-router-dom';

export default class NodataFound extends Component {

	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render(){
		return (
			<div id="main-wrapper">
				<Header/>
				<center className="tt-page404" style={{'background': '#ffffff'}}>
					<h1 className="tt-title" style={{'textAlign':'center', 'marginBottom': '140px','marginTop': '150px'}}>
						SORRY! PAGE NOT FOUND
					</h1>
					<p style={{'color': '#191919'}}>It looks like nothing was found at this location.</p>

					<NavLink to ={'/'} className="btn">GO TO HOME</NavLink>
					<br/>
					<br/>
					<br/>
				</center>
				<Footer/>
			</div>
		)
	}
}