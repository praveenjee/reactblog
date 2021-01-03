//https://codeforgeek.com/refresh-token-jwt-nodejs-authentication/
const jwt = require('jsonwebtoken');
const jwtSecret = 'MYBLOG_JWT'

module.exports = async function(req, res, next) {
	// Get token from header
	const token = req.header('x-auth-token');

	// Check if not token
	if (!token) {
		return res.status(401).json({error: true, message: 'No token provided, authorization denied' });
	}

	// Verify token
	try {
		await jwt.verify(token, jwtSecret, (error, decoded) => {
			if(error){
				res.status(401).json({error: true, message: 'Unauthorized access.' });
			}
			else{
				req.user = decoded.data;
				next();
			}
		});
	} 
	catch (err) {
		console.error('something wrong with auth middleware!');
		res.status(500).json({ error: true, message: err });
	}
};
