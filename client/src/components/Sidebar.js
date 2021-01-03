import React, { Component }  from 'react';

import SearchBox from '../components/SearchBox';
import CategoryBox from '../components/CategoryBox';

import Carousel from 'react-bootstrap/Carousel'

class Sidebar extends Component {
	render() {
				
		return (
		<div className="col-md-4">
					
			<SearchBox /> 			
			<CategoryBox /> 
			
			<div className="card my-4">
			  <h5 className="card-header">Important Info</h5>
			  <div className="card-body">
				
				<Carousel>
				  <Carousel.Item>
					<img className="d-block w-100" src="../images/carousel/image1.jpg" alt="First slide" style={{height:'200px'}} />
					{/*<Carousel.Caption>
					  <h3>First slide label</h3>
					  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>*/}
				  </Carousel.Item>
				  <Carousel.Item>
					<img className="d-block w-100" src="../images/carousel/image2.jpg" alt="Second slide" style={{height:'200px'}} />

					{/*<Carousel.Caption>
					  <h3>Second slide label</h3>
					  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>*/}
				  </Carousel.Item>
				  <Carousel.Item>
					<img className="d-block w-100" src="../images/carousel/image3.jpg" alt="Third slide" style={{height:'200px'}} />

					{/*<Carousel.Caption>
					  <h3>Third slide label</h3>
					  {/*<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>*/} 
				  </Carousel.Item>
				  <Carousel.Item>
					<img className="d-block w-100" src="../images/carousel/image4.jpg" alt="Fourth slide" style={{height:'200px'}} />

					{/*<Carousel.Caption>
					  <h3>Third slide label</h3>
					  {/*<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>*/} 
				  </Carousel.Item>
				</Carousel>
			  
			  </div>			  
			</div>
				
			<div className="card my-4">
			  <h5 className="card-header">Youtube Video</h5>
			  <div className="card-body">				
				<iframe style={{border:0,width:'100%'}} height="315" src="https://www.youtube.com/embed/pY0ZWFzXfW0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			  </div>
			</div>
			
		</div>
		)
	}
} 

export default Sidebar;