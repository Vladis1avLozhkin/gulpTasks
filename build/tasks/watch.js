var gulp = require('../gulp.js');
var paths = require('../paths.js');

var lessPath = paths.less.watch;

gulp.task('watch', function () {
	gulp.watch(lessPath, ['less']);
});