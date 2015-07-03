var gulp = require('gulp');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

var gulp_src = gulp.src;
gulp.src = function() {
	return gulp_src.apply(gulp, arguments)
		.pipe(plumber(function(error) {
			// Output an error message
			gutil.log(gutil.colors.red('Error (' + error.plugin + '): ' + error.message));

			// gutil.log(error);
			notify.onError("<%= error.name %>: <%= error.plugin %>")(error);

			// emit the end event, to properly end the task
			this.emit('end');
		}))
};
