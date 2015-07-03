var gulp = require('../gulp.js');
var less = require('gulp-less');

gulp.task('less', function() {
	gulp.src('./src/less/**.less')
		.pipe(less())
		.pipe(gulp.dest('./dest/css'));
});