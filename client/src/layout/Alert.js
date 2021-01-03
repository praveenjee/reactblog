import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { removeAlert } from '../actions/alert';

const Alert = (props) => {
	const { msgdivid} = props;
	const dispatch = useDispatch();
	const alerts = useSelector((state) => {
		return state.alert;
	}); 
			
	if (alerts !== null && typeof alerts !== undefined && alerts.length > 0 ) {   
		return (
			alerts.map(alert => {
				if(alert.divid === msgdivid){
					return ( 
						<div key={alert.id} className={`alert ${alert.id} alert-${alert.alertType}`} style={{padding:'5px'}}> {alert.msg} 
							<button type="button" className="close" aria-label="Close" onClick={() => {dispatch(removeAlert(alert.id))}}><span aria-hidden="true">×</span></button>
						</div> 
					)
				} 
				else {
					return '';
				}
			})
		); 
	} 

	return <div></div>; 
}


Alert.propTypes = {
	//alerts: PropTypes.array.isRequired
	alerts: PropTypes.array
}; 

export default Alert;
