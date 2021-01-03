import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';
import { connect }  from 'react-redux';

import Alert from '../layout/Alert'; 
import SidebarAccount from '../components/SidebarAccount';
import {updatePost} from '../actions/post';

class PostEditPage extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			//title: this.titleInput ? this.titleInput.value : null,
			title: this.props.postinfo ? this.props.postinfo.title : "",
			slug: this.props.postinfo ? this.props.postinfo.slug : "",
			category: this.props.postinfo ? this.props.postinfo.category : "",
			featureimage: this.props.postinfo ? this.props.postinfo.imagepath : "",
			short_description: this.props.postinfo ? this.props.postinfo.short_description : "",
			description: this.props.postinfo ? this.props.postinfo.description : "",
			profilename: this.props.postinfo ? this.props.postinfo.profilename : "",
			status: this.props.postinfo ? this.props.postinfo.status : "0",
			meta_title: this.props.postinfo ? this.props.postinfo.meta_title : "",
			meta_keywords: this.props.postinfo ? this.props.postinfo.meta_keywords : "",
			meta_description: this.props.postinfo ? this.props.postinfo.meta_description : "",
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
			const title = this.state.title ? this.state.title : this.props.postinfo.title;
			const slug = this.state.slug ? this.state.slug : this.props.postinfo.slug;
			const category = this.state.category ? this.state.category : this.props.postinfo.category;
			
			const featureimage = this.state.featureimage ? this.state.featureimage : this.props.postinfo.imagepath;
			
			const short_description = this.state.short_description ? this.state.short_description : this.props.postinfo.short_description;
			const description = this.state.description ? this.state.description : this.props.postinfo.description;
			const profilename = this.state.profilename ? this.state.profilename : this.props.postinfo.profilename;
			const status = this.state.status ? this.state.status : this.props.postinfo.status;
			const meta_title = this.state.meta_title ? this.state.meta_title : this.props.postinfo.meta_title;
			const meta_keywords = this.state.meta_keywords ? this.state.meta_keywords : this.props.postinfo.meta_keywords;
			const meta_description = this.state.meta_description ? this.state.meta_description : this.props.postinfo.meta_description;

			const updatedPost = {title: title, slug: slug, category: category, featureimage: featureimage, short_description: short_description, description: description, profilename: profilename, status: status, meta_title: meta_title, meta_keywords: meta_keywords, meta_description: meta_description, id:this.props.postinfo.id.toString() };
			//console.log(updatedPost);
			
			this.props.updatePost(updatedPost);
			//this.handleReset();
		}
		window.scrollTo(0, 0);	
	}
	
	render() {
		const {loading, postinfo} = this.props;
		//console.log(this.props);
							
		return (
			<div className="container">
				<div className="row">				  
				  <div className="col-md-8">

					<h1 className="my-4">Edit Post</h1>	
					<div className="breadcrumb">
						<small>
							<Link to="/">Home</Link> &raquo;&nbsp; 
							<Link to="/posts">Posts</Link> &raquo;&nbsp; Edit Post
						</small>
					</div>	
					<div className="card mb-12">
						<h5 className="card-header">Edit post here </h5>
						<div className="card-body">
							<Alert msgdivid="postedit" />
							
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
											<select className="form-control" name="category" value={this.state.category}  onChange={(e) => this.handleInputChange(e)} >
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
												{
													(postinfo.imagepath) ? <div style={{float:'right'}}><img src = {"../uploads/"+postinfo.imagepath} width="75" /></div> : null	
												}
											
										</div>
										
										<div className="form-group">			
											<label htmlFor="status"><strong>Status</strong></label>&nbsp;&nbsp;
											<label className="radio-inline"><input type="radio" name="status" tabIndex="9" defaultValue="1" onChange={ this.handleInputChange } defaultChecked={postinfo.status === '1'} /> Active</label>&nbsp;
											
											<label className="radio-inline"><input type="radio" name="status" tabIndex="9" defaultValue="0" onChange={ this.handleInputChange } defaultChecked={postinfo.status === '0'} /> Inactive</label>&nbsp; 
											
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
											<textarea name="meta_description" className="form-control" placeholder="Meta Description" rows="4" tabIndex="10" defaultValue={this.state.meta_description} onChange={ this.handleInputChange }></textarea>
											
											<div className="errCls">{this.state.validationErrors.meta_description}</div>
										</div> 
										
										<div className="form-group">		
											{/*<textarea name="short_description" id="short_description" className="form-control" placeholder="Short Description" rows="2" tabIndex="10" value={this.state.short_description} onChange={ this.handleInputChange }></textarea>*/}
											<label htmlFor="status"><strong>Short Description</strong></label>&nbsp;&nbsp;
											<Editor apiKey="ofzzyuovoe4iofxp4tpafqd17pxuutbt5x8r4go1lxhsllxo"
												initialValue={this.state.short_description} 
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
											
											<label htmlFor="status"><strong>Description</strong></label>&nbsp;&nbsp;
											<Editor apiKey="ofzzyuovoe4iofxp4tpafqd17pxuutbt5x8r4go1lxhsllxo"
												initialValue={this.state.description} 
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
										<button className="btn btn-primary" type="submit" tabIndex="4" style={{marginRight : '10px'}}>{loading ? 'Please wait...': 'Update'}</button>
										
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
		loading: state.post.loading
	}
}

const mapDispatchToProps = dispatch => {
	return {
		updatePost: (postdata) => { dispatch(updatePost(postdata)); }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEditPage);