import React, { Component }  from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import MyProfilePage from '../components/MyProfilePage';
import Footer from '../components/Footer';

import { fetchAccountInfo } from '../actions/profile';

import setMetaDetail from '../utils/setMetaDetail';
import { metaDetails } from '../utils/metaDetails';

class MyProfileContainer extends Component {
	
    componentDidMount() {
        window.scrollTo(0, 0);
		const path = this.props.match.path.replace("/","");		
		if(path === "account-info"){
			 setMetaDetail(metaDetails.accountinfo.meta_title, metaDetails.accountinfo.meta_keyword, metaDetails.accountinfo.meta_description);
		}
		
		this.props.dispatch(fetchAccountInfo());
    }

	render() {
		const { userinfo } = this.props;
		//console.log(userinfo);
		
		const spiner = {
			textAlign:'center',
			marginTop:'100px',
			marginBottom:'100px',
			marginLeft:'50%'
		}
		
		if (!userinfo.firstname) {
			return (
				<div id="main-wrapper">
					<div className="container">
						<div className="row" style={spiner}>
							<div className="spinner-border text-dark" role="status">
								<span className="sr-only">Loading...</span>
							</div>
						</div>
					</div>
				</div>
			)
		}
				
		return (
			<div id="main-wrapper">
				<Header />
				<MyProfilePage userinfo={userinfo} />
				<Footer />
			</div>
		)		
	}
}

const mapStateToProps = state => {
    return {
        userinfo: state.profile.userinfo,
    };
};

export default connect( mapStateToProps, null )(MyProfileContainer);