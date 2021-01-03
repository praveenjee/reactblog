import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';
import { connect }  from 'react-redux';

import Alert from '../layout/Alert'; 
import SidebarAccount from '../components/SidebarAccount';
import {savePost} from '../actions/post';

class PostAddPage extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			slug: "",
			category: "",
			featureimage: "",
			short_description: "",
			description: "",
			profilename: "",
			status: "0",
			meta_title: "",
			meta_keywords: "",
			meta_description: "",
			validationErrors: {}
		};
	}
		
	arrayOfList = [
		{ value: 'web-design', name: 'Web Design' },
		{ value: 'html', name: 'HTML' },
		{ value: 'javascript', name: 'JavaScript' },
		{ value: 'freebies', name: 'Freebies' },
		{ value: 'css', name: 'CSS' },
		{ value: 'tutorials', name: 'Tutorials' },
		{ value: 'news', name: 'News' },
	];
				
	convertDate = (dateStr) => {
		var d = new Date(dateStr);
		var n = d.toLocaleDateString();
		return n;
	}
	
	validators = {
		title: (str) => str === '' ? 'Title is blank' : '',
		slug: (str) => str === '' ? 'Post url (slug) is blank' : '',
		category: (str) => str === '' ? 'Category is blank' : '',
		short_description: (str) => str === '' ? 'Short description is blank' : '',
		description: (str) => str === '' ? 'Description is blank' : '',
		profilename: (str) => str === '' ? 'Profile name is blank' : '',
		meta_title: (str) => str === '' ? 'Meta title is blank' : '',
		meta_keywords: (str) => str === '' ? 'Meta keywords is blank' : '',
		meta_description: (str) => str === '' ? 'Meta description is blank' : '',
	} 
	
	validate = (name) => {
		const value = this.state[name];
		let error = this.validators.hasOwnProperty(name) ? this.validators[name](value) : '';
		this.setState(({validationErrors}) => ({validationErrors: {...validationErrors, [name]: error}}));
		return error;
	}
			
	handleInputChange = (e) => {		
		const fieldName = e.currentTarget.name;
		const fieldValue = e.currentTarget.value;
		//console.log(this.state);
		
		this.setState(
		  { [fieldName]: fieldValue },
		  () => this.validate(fieldName)
		);
	} 
	
	handleShortDescriptionChange = (content, editor) => {
		//console.log('Short Description:', content);
		this.setState({
			short_description: content
		}, () => this.validate('short_description'));
	}
	
	handleDescriptionChange = (content, editor) => {
		//console.log('Description:', content);
		this.setState({
			description: content
		}, () => this.validate('description'));
	} 
	
	handleFile = (e) => {
		var fileObj = e.target.files[0];
		//console.log(fileObj);
		
		var fname = fileObj.name; //IndiaMap.png
		var fsize = fileObj.size; //45606
		var ftype = fileObj.type; //image/png
		var fmodified = fileObj.lastModified; //1585811807173
		var fmodifiedDate = fileObj.lastModifiedDate; //Thu Apr 02 2020 12:46:47 GMT+0530 (India Standard Time)
		
		this.setState({
			featureimage: fileObj
		});
	}
	
	handleReset = (e) => {
		this.setState({
			title: "",
			slug: "",
			category: "",
			featureimage: "",
			short_description: "",
			description: "",
			profilename: "",
			status: "",
			meta_title: "",
			meta_keywords: "",
			meta_description: "",
			validationErrors: {}
		});
	}
			
	handleSubmit = (e) => {
		e.preventDefault();
		
		const isValid = Object.keys(this.validators).map(this.validate).every((err) => !err);
		if(isValid) {
			//console.log(this.state);
			this.props.savePost(this.state);
			this.handleReset();	
		}
		window.scrollTo(0, 0);
	} 
	
	render() {
		const { loading } = this.props;
		//console.log(this.props);
							
		return (
			<div className="container">
				<div className="row">				  
				  <div className="col-md-8">
					<h1 className="my-4">Add Post </h1>	
					<div className="breadcrumb">
						<small>
							<Link to="/">Home</Link> &raquo;&nbsp; 
							<Link to="/posts">Posts</Link> &raquo;&nbsp; Add Post
						</small>
					</div>		
					<div className="card mb-12">
						<h5 className="card-header">Add new post</h5>
						<div className="card-body">
							<Alert msgdivid="postadd" />
							
							<form name="frmPostAdd" onSubmit={this.handleSubmit} encType="mutipart/form-data">
								 <div className="row">
									<div className="col-md-12">
										<div className="form-group">
											<label htmlFor="title"><strong>Title</strong></label><br />
											<input type="text" className="form-control" name="title" placeholder="Title" tabIndex="1" value={this.state.title} onChange={(e) => this.handleInputChange(e)} />
											
											<div className="errCls">{this.state.validationErrors.title}</div>
										</div>	
										
										<div className="form-group">
											<label htmlFor="slug"><strong>Post Url (slug)</strong></label><br />
											<input type="text" className="form-control" name="slug" placeholder="Post Url (slug)" tabIndex="2" value={this.state.slug} onChange={(e) => this.handleInputChange(e)} />
											
											<div className="errCls">{this.state.validationErrors.slug}</div>
										</div>
										
										<div className="form-group">
											<label htmlFor="slug"><strong>Category</strong></label><br />
											<select className="form-control" name="category" onChange={(e) => this.handleInputChange(e)}>
												{
													this.arrayOfList.map((option, index) => {
														return <option value={option.value} key={index}>{option.name}</option>
													})
												}
											</select>
											
											<div className="errCls">{this.state.validationErrors.category}</div>
										</div>
										
										<div className="form-group">
											<label htmlFor="imagepath"><strong>Feature Image</strong></label><br />
											<input type="file" name="featureimage" tabIndex="2" onChange={(e) => this.handleFile(e)} /><br /><small><i>(File format should be png,jpg,jpeg,gif)</i></small>
										</div>
										
										<div className="form-group">			
											<label htmlFor="status"><strong>Status</strong></label>&nbsp;&nbsp;
											<label className="radio-inline"><input type="radio" name="status" tabIndex="9" value="1" onChange={ this.handleInputChange } /> Active</label>&nbsp;
											
											<label className="radio-inline"><input type="radio" name="status" tabIndex="9" value="0" onChange={ this.handleInputChange } checked={true} /> Inactive</label>&nbsp; 
											
											<div className="errCls">{this.state.validationErrors.status}</div>
										</div> 
										
										<div className="form-group">
											<label htmlFor="profilename"><strong>Profile Name</strong></label><br />
											<input type="text" className="form-control" name="profilename" placeholder="Profile Name" tabIndex="2" value={this.state.profilename} onChange={(e) => this.handleInputChange(e)} />
											
											<div className="errCls">{this.state.validationErrors.profilename}</div>
										</div>
																												
										<div className="form-group">
											<label htmlFor="meta_title"><strong>Meta Title</strong></label><br />
											<input type="text" className="form-control" name="meta_title" placeholder="Meta Title" tabIndex="2" value={this.state.meta_title} onChange={(e) => this.handleInputChange(e)} />
											
											<div className="errCls">{this.state.validationErrors.meta_title}</div>
										</div>
										
										<div className="form-group">
											<label htmlFor="meta_keywords"><strong>Meta Keywords</strong></label><br />
											<input type="text" className="form-control" name="meta_keywords" placeholder="Meta Keywords" tabIndex="2" value={this.state.meta_keywords} onChange={(e) => this.handleInputChange(e)} />
											
											<div className="errCls">{this.state.validationErrors.meta_keywords}</div>
										</div>
										
										<div className="form-group">
											<label htmlFor="meta_description"><strong>Meta Description</strong></label><br />
											<textarea name="meta_description" className="form-control" placeholder="Meta Description" rows="4" tabIndex="10" value={this.state.meta_description} onChange={ this.handleInputChange }></textarea>
											
											<div className="errCls">{this.state.validationErrors.meta_description}</div>
										</div> 
										
										<div className="form-group">		
											{/*<textarea name="short_description" id="short_description" className="form-control" placeholder="Short Description" rows="2" tabIndex="10" value={this.state.short_description} onChange={ this.handleInputChange }></textarea>*/}
											<label htmlFor="short_description"><strong>Short Description</strong></label>&nbsp;&nbsp;
											<Editor id="short_description" apiKey="ofzzyuovoe4iofxp4tpafqd17pxuutbt5x8r4go1lxhsllxo"
												value={this.state.short_description}
												textareaName='short_description' 
												init={{
													height: 150,
													menubar: false,
													plugins: ['advlist autolink lists link image charmap print preview anchor', 'searchreplace visualblocks code fullscreen',
													'insertdatetime media table paste code help wordcount' ],
													toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
													toolbar_mode: 'floating',
													tinycomments_mode: 'embedded',
												}} 
												onEditorChange={this.handleShortDescriptionChange} 
											/>
											
											<div className="errCls">{this.state.validationErrors.short_description}</div>
										</div>
										
										<div className="form-group">		
											{/*<textarea name="description" className="form-control" placeholder="Description" rows="4" tabIndex="10" value={this.state.description} onChange={ this.handleInputChange }></textarea>*/} 
											
											<label htmlFor="description"><strong>Description</strong></label>&nbsp;&nbsp;
											<Editor id="description" apiKey="ofzzyuovoe4iofxp4tpafqd17pxuutbt5x8r4go1lxhsllxo"
												value={this.state.description} 
												textareaName='description' 
												init={{
													height: 250,
													menubar: false,
													plugins: ['advlist autolink lists link image charmap print preview anchor', 'searchreplace visualblocks code fullscreen',
													'insertdatetime media table paste code help wordcount' ],
													toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
													toolbar_mode: 'floating',
													tinycomments_mode: 'embedded',
												}} 
												onEditorChange={this.handleDescriptionChange}
											/>											
											<div className="errCls">{this.state.validationErrors.description}</div>
										</div>
										
									</div>
									<div className="col-md-6">
										<button className="btn btn-primary" type="submit" tabIndex="4" style={{marginRight : '10px'}}>{loading ? 'Please wait...': 'Submit'}</button>
										
										<Link className="btn btn-danger" to="/posts" >Cancel</Link>
									</div>
								</div>
							</form>
						
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
		items: state.post.items,
		loading: state.post.loading,
		error: state.post.error
	}
}

const mapDispatchToProps = dispatch => {
	return {
		savePost: (postdata) => { dispatch(savePost(postdata)); }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostAddPage);