var gulp = require('../gulp.js');
var less = require('gulp-less');
var paths = require('../paths.js');

var srcPath = paths.less.src;
var destPath = paths.less.dest;

gulp.task('less', function() {
	gulp.src(srcPath)
		.pipe(less())
		.pipe(gulp.dest(destPath));
});