import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import Alert from '../layout/Alert'; 
import { logout } from '../actions/auth';
import { connect } from 'react-redux';

class DashboardPage extends Component {
	
	render() {
		const { userinfo } = this.props;
		//console.log(this.props);
		
		return (
			<div className="container">
				<div className="row">				  
				  <div className="col-md-12">
					<h1 className="my-4">Hello, {userinfo.firstname}! 
					  <small>&nbsp;</small>
					</h1>			
					
					<div className="card mb-12">
						<h5 className="card-header">Welcome to your own space My Blog!</h5>
						<div className="card-body">
							<div className="container">
								<Alert msgdivid="logindiv" />
								
								<div className="row">
									<div className="col-md-4 dashdata">
										<Link className="tt-img-box" to="/account-info">
											<div className="col-sm-3 col-md-3 col-3"><i className="fa fa-user fa-5x"></i></div>
											<div className="col-sm-9 col-md-9 col-9">
												<div className="tt-title" style={{textAlign: 'left'}}>
													<h6 style={{letterSpacing: '0em', 'paddingBottom': '0px'}}>MY INFO</h6>
													<p >Edit your information and preference</p>
												</div>
											</div>
										</Link>
									</div>
									
									<div className="col-md-4 dashdata">
										<Link className="tt-img-box" to="/change-password">
											<div className="col-sm-3 col-md-3 col-3"><i className="fa fa-lock fa-5x"></i></div>
											<div className="col-sm-9 col-md-9 col-9">
												<div className="tt-title" style={{textAlign: 'left'}}>
													<h6 style={{letterSpacing: '0em', 'paddingBottom': '0px'}}>CHANGE PASSWORD</h6>
													<p >Change your password here</p>
												</div>
											</div>
										</Link>
									</div>
									
									<div className="col-md-4 dashdata">
										<Link className="tt-img-box" to="/#" onClick={() => this.props.logout()} >
											<div className="col-sm-3 col-md-3 col-3"><i className="fa fa-sign-out fa-5x"></i></div>
											<div className="col-sm-9 col-md-9 col-9">
												<div className="tt-title" style={{textAlign: 'left'}}>
													<h6 style={{letterSpacing: '0em', 'paddingBottom': '0px'}}>LOG OUT</h6>
													<p >Quit from dashboard</p>
												</div>
											</div>
										</Link>
									</div>
									
									<div className="col-md-4 dashdata">
										<Link className="tt-img-box" to="/posts">
											<div className="col-sm-3 col-md-3 col-3"><i className="fa fa-clipboard fa-4x"></i></div>
											<div className="col-sm-9 col-md-9 col-9">
												<div className="tt-title" style={{textAlign: 'left'}}>
													<h6 style={{letterSpacing: '0em', 'paddingBottom': '0px'}}>TOTAL POST</h6>
													<p>{this.props.totalpost}</p>
												</div>
											</div>
										</Link>
									</div> 
									
									<div className="col-md-4 dashdata">
										<Link className="tt-img-box" to="/postadd">
											<div className="col-sm-3 col-md-3 col-3"><i className="fa fa-clipboard fa-4x"></i></div>
											<div className="col-sm-9 col-md-9 col-9">
												<div className="tt-title" style={{textAlign: 'left'}}>
													<h6 style={{letterSpacing: '0em', 'paddingBottom': '0px'}}>ADD POST</h6>
													<p >Add Post</p>
												</div>
											</div>
										</Link>
									</div>
									
									<div className="col-md-4 dashdata">
										<Link className="tt-img-box" to="/countries">
											<div className="col-sm-3 col-md-3 col-3"><i className="fa fa-home fa-4x"></i></div>
											<div className="col-sm-9 col-md-9 col-9">
												<div className="tt-title" style={{textAlign: 'left'}}>
													<h6 style={{letterSpacing: '0em', 'paddingBottom': '0px'}}>TOTAL COUNTRIES</h6>
													<p >{this.props.totalcountry}</p>
												</div>
											</div>
										</Link>
									</div>
																	
								</div>
							</div>
						</div>
						<div className="card-footer"></div>
					</div>
					
					<div className="mb-4">&nbsp;</div>
				  </div>

				</div> 
			
			<div className="row">				  
				<div className="col-md-12">
					<div className="card mb-12">
						<iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FKolkata&amp;src=ZGVsaGkucHJhdmVlbmt1bWFyQGdtYWlsLmNvbQ&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZmFtaWx5MDk2ODgxMDUzNjY3MTMzMDk2NjRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23B39DDB&amp;color=%237CB342&amp;color=%23D81B60&amp;color=%237CB342&amp;showTitle=1" style={{border: 'solid 1px #777'}} width="100%" height="550" frameborder="0" scrolling="no"></iframe>
					</div>
				</div>
				<div className="mb-4">&nbsp;</div>
					<div className="mb-4">&nbsp;</div>
			</div>
			
		</div>
				
		)		
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth
	}
};


const mapDispatchToProps = dispatch => {
	return {
		logout: () => { dispatch(logout()); } 
	};
};

export default connect( mapStateToProps, mapDispatchToProps)(DashboardPage);
