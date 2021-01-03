import React, { Component }  from 'react';

class Search extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			search: "",
			validationErrors: {}
		}
	}
	
	validators = {
		search: (str) => str === '' ? 'Please enter search keyword' : '',
	}
	
	validate = (name) => {
		const value = this.state[name];
		let error = this.validators.hasOwnProperty(name) ? this.validators[name](value) : '';
		this.setState(({validationErrors}) => ({validationErrors: {...validationErrors, [name]: error}}));
		return error;
	}
	
	handleChange = (e) => {
		let fieldName = e.target.name;
		let fieldValue = e.target.value;
		
		this.setState(
			{ [fieldName]: fieldValue },
			() => this.validate(fieldName)
		)
	}
	
	handleSubmit = (e) => {
		e.preventDefault();
		const isValid = Object.keys(this.validators).map(this.validate).every((err) => !err);
		if(isValid) {
			window.location.href = '/search/'+this.state.search;
		}
	}
	
	render() {
		return (
			<div className="card my-4">
				<h5 className="card-header">Search</h5>
				<div className="card-body">
					<form onSubmit={this.handleSubmit}>
						<div className="input-group">
							<input type="text" className="form-control" placeholder="Search post here..." name="search" onChange={this.handleChange} value={this.state.search}  />
							
							<span className="input-group-btn">
								<button className="btn btn-secondary" type="submit">Go!</button>
							</span>
							
							<br /><div className="errCls" style={{width:'100%'}}>{this.state.validationErrors.search}</div>
						</div>
					</form>
				</div>
			</div>
		)		
	}
}

export default Search;