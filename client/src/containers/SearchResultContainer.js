import React, { Component }  from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import SearchResultPage from '../components/SearchResultPage';
import Footer from '../components/Footer';

import setMetaDetail from '../utils/setMetaDetail';
import { metaDetails } from '../utils/metaDetails';
import { searchPost } from '../actions/search';

class SearchResultContainer extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			searchkey: ""
		}
	}
	
    componentDidMount() {
        window.scrollTo(0, 0);
		const keyword = this.props.match.url.replace("/search/",""); 
		
		var path = window.location.pathname;
		var pathitems = path.split("/");		
		if(pathitems[1] === "search"){
			 setMetaDetail(metaDetails.search.meta_title, metaDetails.search.meta_keyword, metaDetails.search.meta_description);
		}		
		this.props.dispatch(searchPost(keyword))
    }

	render() {
		const {loading, items, total, searchkey} = this.props;
		//console.log(this.props);
		
		
		const spiner = {
			textAlign:'center',
			marginTop:'100px',
			marginBottom:'100px',
			marginLeft:'50%'
		}
		
		if (loading && items.length == 0) {
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
				<SearchResultPage posts={items} total={total} searchkey={searchkey} />
				<Footer />
			</div>
		)		
	}
}

const mapStateToProps = state => {
	return {		
		loading: state.search.loading,
		items: state.search.items,
		total: state.search.total,
		searchkey: state.search.searchkey,
	}
}

export default connect(mapStateToProps, null)(SearchResultContainer);