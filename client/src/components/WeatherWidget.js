import React, { Component }  from 'react';
import { connect }  from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchWeatherData } from '../actions/weather';
import { dateFormat, dateBuilder, formatAMPM } from '../utils/dateFormat';
import TempMinMax from '../components/TempMinMax';

class WeatherWidget extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			location: "",
			validationErrors:{}
		}
	}
	
	componentDidMount(){
		let _loc = "New Delhi";
		this.props.fetchWeatherData(_loc);
	}
	
	validators = {
		location: (str) => str === '' ? 'Location is blank. ' : '',
	} 
	
	validate = (name) => {
		const value = this.state[name];
		let error = this.validators.hasOwnProperty(name) ? this.validators[name](value) : '';
		this.setState(({validationErrors}) => ({validationErrors: {...validationErrors, [name]: error}}));
		return error;
	}
	
	handleChange = (e) => {
		const fieldName = e.currentTarget.name;
		const fieldValue = e.currentTarget.value;	
		
		this.setState(
		  { [fieldName]: fieldValue },
		  () => this.validate(fieldName)
		);
	}
	
	handleReset = (e) => {
		this.setState({
			location: '',
			validationErrors: {}
		});
	}
	
	handleSubmit = (e) => {
		e.preventDefault();
				
		const isValid = Object.keys(this.validators).map(this.validate).every((err) => !err);
		if(isValid) {
			//console.log(this.state);
			this.props.fetchWeatherData(this.state.location);
			this.handleReset();
		}		
	}
		
	render() {
		const {loading, weatherinfo} = this.props;
		///console.log(weatherinfo.cod);
		var sys = weatherinfo.sys;
		var main = weatherinfo.main;
		var wther = weatherinfo.weather;
		var wind = weatherinfo.wind;		
		var coord = weatherinfo.coord;		
		var clouds = weatherinfo.clouds;

		const spiner = {
			textAlign:'center',
			margin:'70px 45%',
			width:'100%'
		}
			
				
		return (
		<div className="card my-4">
			<h5 className="card-header">Weather Update</h5>
			<div className="card-body weather-bg">
				<div className="row">
					<div className="col-lg-12"> 
						<div className="input-group">
							<input type="text" className="form-control loc" name="location" value={this.state.location} onChange={this.handleChange} placeholder="Search for location" />							
							<span className="input-group-btn">
								<button className="btn btn-secondary" type="button" onClick={this.handleSubmit}>Go!</button>
							</span>
							<br />
							<div className="errCls" style={{width:'100%'}}>{this.state.validationErrors.location}</div>
						</div>
					</div>	
				</div>
				
				<div className="row">
				{!loading ? 
					(<div className="col-lg-12" style={{textAlign:'center',color:'#fff'}}>

						<div className="wlocation">
							{(weatherinfo.cod === "404") ? weatherinfo.message : weatherinfo.name +", "+ (sys ? sys.country : '')} 							
							<br /><div className="date" >{dateBuilder(new Date())}</div>
						</div>						
						<div className="temp">
							{/**Convert Calvin into Celsius
							C = K - 273.15**/}
							{(main) ? Math.round(main.temp - 273.15) + '°c' : ''}
						</div>
						<div className="weather">
							{(main) ? <TempMinMax main={main} wind={wind} sys={sys} coord={coord} clouds={clouds} /> : ''}
						</div>
						<div className="weather">
							{(wther) ? wther[0].main + ', ('+ wther[0].icon+ ')' + '\n' + wther[0].description : ''}
						</div>
					</div>) : 
					(<div className="col-lg-12" style={{textAlign:'center',color:'#fff'}}>
						<div className="container">
							<div className="row" style={spiner}>
								<div className="spinner-border text-white" role="status">
									<span className="sr-only">Loading...</span>
								</div>
							</div>
						</div>
					</div>)
				}
									
				</div>
				
			</div>
		</div>	
		)			
	}
}

const mapStateToProps = (state) => {
	return {
		loading: state.weather.loading,
		weatherinfo: state.weather.weatherinfo
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchWeatherData: userdata => { dispatch(fetchWeatherData(userdata)); }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherWidget);