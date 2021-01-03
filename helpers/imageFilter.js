const imageFilter = function(req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error("File format should be PNG,JPG,JPEG,GIF"), false);
    }
    cb(null, true);
};
//exports.imageFilter = imageFilter;
module.exports = imageFilter;