var gulp = require('../gulp.js');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths.js');
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');

var srcPath = paths.less.src;
var destPath = paths.less.dest;

gulp.task('less', function() {
	gulp.src(srcPath)
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(autoprefixer())
		.pipe(csso())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(destPath));
});