var gulp = require('../gulp.js')
var notifier = require('node-notifier');
var paths = require('../paths.js');;
var webpack = require('webpack-stream');
var sourcemaps = require('gulp-sourcemaps');

var config = {
	devtool: 'source-map',
	// watch: true,
	entry: paths.js.entries,
	output: {
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
			}
		]
	}
};

gulp.task('webpack', function () {
	gulp.src(paths.js.src)
		.pipe(sourcemaps.init())
		.pipe(webpack(config, null, function (error, stats) {
			// console.log(stats.compilation.errors);
			stats.compilation.errors.forEach(function(item, i, arr) {
				notifier.notify({
					title: item.name,
					message: item.message,
					icon: paths.others.notifier.icon
				});
				console.log(item);
			});
		}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(paths.js.dest))
});