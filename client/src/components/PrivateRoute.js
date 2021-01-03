import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({
		component: Component,
		auth: { isAuthenticated },
		...rest
	}) => 
	( 
		<Route {...rest} render = {props => !isAuthenticated  ? 
			( <Redirect to={{ pathname: '/', state: { referer: props.location } }} />) : 
			( <Component {...props} /> )}
		/>
	);


PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.auth.user 
});

export default connect(mapStateToProps, null)(PrivateRoute);
