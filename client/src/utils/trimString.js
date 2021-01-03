export const trimString = function trimString(string, maxlenth) {

	let trimmedString = string.substr(0, maxlenth);

	trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))

	return trimmedString + ' ...';
}

export const ucwords = function ucwords(str){
	str = str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
		return letter.toUpperCase();
	});
	
	return str;
}









