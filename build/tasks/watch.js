var gulp = require('../gulp.js');
var paths = require('../paths.js');

var lessPath = paths.less.watch;
var jsPath = paths.js.src;

gulp.task('watch', function () {
	gulp.watch(lessPath, ['less']);
	gulp.watch(jsPath, ['webpack']);
});