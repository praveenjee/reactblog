export const dateFormat = function dateFormat(date) {
	const DATE_OPTIONS = {year: 'numeric', month: 'long', day: 'numeric' };
	var today = (new Date(date)).toLocaleDateString('en-US', DATE_OPTIONS);
	return today;  
};

export const dateBuilder = (d) => {
	let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

	let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	
	let day = days[d.getDay()];
	let date = d.getDate();
	let month = months[d.getMonth()];
	let year = d.getFullYear();
	
	return `${day}, ${date} ${month} ${year}`;
}

export const formatAMPM = (date) => {
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var ampm = hours >= 12 ? 'pm' : 'am';
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	minutes = minutes < 10 ? '0'+minutes : minutes;
	
	var strTime = hours + ':' + minutes + ' ' + ampm;
	return strTime;
}

export const convertDate = (dateStr) => {
	var d = new Date(dateStr);
	var n = d.toLocaleDateString();
	return n;
}








