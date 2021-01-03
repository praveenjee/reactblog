import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const Alert = (props) => {
	const { alerts, msgdivid} = props;
	
	if (alerts !== null && alerts.length > 0 ) {   
		return (
			alerts.map(alert => {
				if(alert.divid === msgdivid)
					return ( 
						<div key={alert.id} className={`alert ${alert.id} alert-${alert.alertType}`} style={{padding:'5px'}}> {alert.msg} </div>
					)
			})
		); 
	}

	return <div></div>; 
}


Alert.propTypes = {
	alerts: PropTypes.array.isRequired
}; 

const mapStateToProps = state => {
	return {
		alerts: state.alert.slice(-1)
	}
}

export default connect(mapStateToProps)(Alert);
