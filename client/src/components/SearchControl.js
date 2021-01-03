import React, { Component } from "react";
import {withRouter} from 'react-router-dom';

class SearchControl extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			keyword: "",
			showSearchInfo: false
		};
	}
  
	componentDidMount() {
		this.onClearSearch();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps && nextProps.keyword) {
			this.setState({
				keyword: nextProps.keyword,
				showSearchInfo: true
			});
		}
	}

	onHandleChange = event => {
		var target = event.target;
		var name = target.name;
		var value = target.value;
		this.setState({
			[name]: value
		});
	};

	onSearch = e => {
		e.preventDefault();
		//console.log(this.state);
		this.props.onSearch(this.state.keyword);
	};

	onClearSearch = () => {
		this.props.onSearch("");
		this.setState({
			keyword: "",
			showSearchInfo: false
		});
	};

  render() {

	var searchterm = this.props.searchBy ? this.props.searchBy:'Search';

    return (
      <div className="col-lg-12 box_search">
        <form onSubmit={this.onSearch}>
          <div className="search_wrp mb-15">            
			<div className="input-group">
				<input type="text" name="keyword" className="form-control" placeholder={searchterm} value={this.state.keywrod} onChange={this.onHandleChange}
				/>

				<span className="input-group-btn">
				<button className="btn btn-primary" type="button" onClick={this.onSearch} > <i className="fa fa-search mr-5" /> Search </button>
				</span>
            </div>           
          </div><br />         
        </form>
      </div>
    );
  }
}

export default withRouter(SearchControl);
