import React, { Component }  from 'react';


class SignupThanksPage extends Component {
	
	componentDidMount(){}
	
	render() {
		//console.log(this.props);
				
		return (
			<div className="container">
				<div className="row">				  
				  <div className="col-md-12">

					<h1 className="my-4">Thank you.  
					  <small>&nbsp;</small>
					</h1>					
					<div className="card mb-12">					  
					  <div className="card-body">
						<h2>Your account has been created successfully. !!</h2>
						<br /><br />
						<p className="card-text">
							A verification email has been sent to your registered email address, please click on the link to activate your account, if you don't receive the email with in 5 min, Please check your junk folder too. <br />
						</p>
					  </div>
					</div>
					
					<div className="mb-4">&nbsp;</div>
					<div className="mb-4">&nbsp;</div>
					<div className="mb-4">&nbsp;</div>
					<div className="mb-4">&nbsp;</div>
				  </div>				  
				  
				</div> 
		  </div>
		)		
	}
}

export default SignupThanksPage;