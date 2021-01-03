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
		
		const path = this.props.match.path.replace("/:slug","");		
		if(path === "/search"){
			 setMetaDetail(metaDetails.home.meta_title, metaDetails.home.meta_keyword, metaDetails.home.meta_description);
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