export default function setMetaDetail(meta_title, meta_keyword, meta_description) {
   
	if (typeof meta_title === undefined) {
		document.title = 'MyBlog - About Us, Contact Us and Services';
	}
	
	if (typeof meta_description === undefined) {
		document.getElementsByName("description")[0].content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
	}
	
	if (typeof meta_keyword === undefined) {
		document.getElementsByName("Keywords")[0].content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
	}
	
	document.title = meta_title;
	document.getElementsByName("title")[0].content = meta_title; 
	document.getElementsByName("keywords")[0].content = meta_keyword; 
	document.getElementsByName("description")[0].content = meta_description; 
}