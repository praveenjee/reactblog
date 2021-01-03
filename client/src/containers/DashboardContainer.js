import React, { Component }  from 'react';
import { Redirect } from 'react-router-dom';

import Header from '../components/Header';
import DashboardPage from '../components/DashboardPage';
import Footer from '../components/Footer';

import { connect } from 'react-redux';
import { fetchAccountInfo } from '../actions/profile';
import { fetchOtherInfo } from '../actions/dashboard';

class DashboardContainer extends Component {
	
    componentDidMount() {
        window.scrollTo(0, 0);
		this.props.dispatch(fetchAccountInfo());
		this.props.dispatch(fetchOtherInfo());
    }

	render() {
		const { userinfo, error, items, otherinfo } = this.props;
		//console.log(this.props);
		
		if(error && items.message === "Unauthorized access."){
			return <Redirect to="/ulogin" />;
		}
		
		return (
			<div id="main-wrapper">
				<Header />
				<DashboardPage userinfo={userinfo} totalpost={otherinfo.npost} totalcountry={otherinfo.ncountry} />
				<Footer />
			</div>
		)		
	}
}

const mapStateToProps = state => {
    return {
        userinfo: state.profile.userinfo,
        error: state.profile.error,
        items: state.profile.items,
        otherinfo: state.dashboard.items
    };
};

export default connect( mapStateToProps, null )(DashboardContainer);
