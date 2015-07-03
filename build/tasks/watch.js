var gulp = require('../gulp.js');

gulp.task('watch', function () {
	gulp.watch('./src/less/**/*.less', ['less']);
});