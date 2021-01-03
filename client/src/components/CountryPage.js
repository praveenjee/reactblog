import React, { Component }  from 'react';
import { connect }  from 'react-redux';

import SidebarAccount from '../components/SidebarAccount';
import {fetchCountries} from '../actions/country';

import Pagination from '../components/Pagination';
import SearchControl from '../components/SearchControl';

class CountryPage extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			totalRecords: "",
			totalPages: "",
			pageLimit: "",
			currentPage: "",
			startIndex: "",
			endIndex: ""
		};
	}
	
	componentDidMount(){
		window.scrollTo(0, 0);
		this.props.fetchCountries(""); 		
		this.setState({
			totalRecords: this.props.items.length
		});
	}
	
	onChangePage = data => {
		this.setState({
			pageLimit: data.pageLimit,
			totalPages: data.totalPages,
			currentPage: data.page,
			startIndex: data.startIndex,
			endIndex: data.endIndex
		});
	};
	
	onSearch = keyword => {
		this.props.fetchCountries(keyword);
	};
	
	showCountries = countries => { 		
		if (countries.length > 0) {
			return countries.map((country, index) => (
				<tr key={index}>
					<td>{country.id}.</td>
					<td>
						<img src={"../images/flags/" + country.code.toLowerCase() + ".png"} width="30" style={{border:'1px solid #ddd',padding:'1px'}} /></td>
					<td>
						{country.country_name}<br />
						<small>{country.code}</small>
					</td>
					<td>{country.country_code}</td>
				</tr>
			))
		} 
		else {
			const loadingstr = (<tr><td colSpan="4" style={{textAlign:'center'}}>Please wait...</td></tr>);			
			const noresult = (<tr><td colSpan="4" style={{textAlign:'center'}}>No Result Found.</td></tr>);
			return (this.props.loading) ? loadingstr: noresult
		} 
	};
	
	render() {
		var {loading, items, error, keyword} = this.props;
		//console.log(this.props);
		
		var { totalPages, currentPage, pageLimit, startIndex, endIndex } = this.state; 
		
		var rowsPerPage = [];
		if (keyword) {
			items = items.filter(item => {
			return ((item.country_name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) || (item.code.toLowerCase().indexOf(keyword.toLowerCase()) !== -1));
			}); 
		}
		
		if(items){
			rowsPerPage = items.slice(startIndex, endIndex + 1);
		}
					
		return (
			<div className="container">
				<div className="row">				  
				  <div className="col-md-8">

					<h1 className="my-4">Country List  
					  <small>&nbsp;</small>
					</h1>					
					<div className="card mb-12">
						<h5 className="card-header">List of countries
							<small style={{float:'right'}}>{items.length} Countries</small>
						</h5>
					  <div className="card-body">
						<div className="row">
							
							<SearchControl onSearch={this.onSearch} keyword={keyword} searchBy="Search By Country Name, Code" page="Country Page" />  
			  
							<div className="table-responsive" >
								<table className="table table-striped">
									<tbody>
									{this.showCountries(rowsPerPage)}
									</tbody>
								</table>
							</div>
							
							<Pagination 
								totalRecords={items.length} 
								pageLimit={pageLimit || 10} 
								initialPage={1} 
								pagesToShow={5} 
								onChangePage={this.onChangePage}
							/>	
							
						</div>
					  </div>
					</div>
					
					<div className="mb-4">&nbsp;</div>
				  </div>				  
				  <SidebarAccount />  				  

				</div> 
		  </div>
		)		
	}
}

const mapStateToProps = state => {
	return {
		items: state.country.items,
		loading: state.country.loading,
		error: state.country.error,
		keyword: state.country.searchkey
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchCountries: (keyword) => { dispatch(fetchCountries(keyword)); }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryPage);