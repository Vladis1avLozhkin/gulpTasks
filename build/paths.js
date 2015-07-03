var source = './src/';
var dist = './dist/';

module.exports = {
	source: source,
	dist: dist,
	less: {
		src: [
			source + 'less/**/*.less',
			'!' + source + 'less/**/_*.less' // игнорировать файлы начинающиеся с подчеркивания
		],
		dest: dist + 'css',
		watch: source + 'less/**/*.less',
	},
	js: {
		src: [
			source + 'js/**/*.js',
		],
		entries: {
			main: source + 'js/' + 'main.js',
		},
		dest: dist + 'js',
	},
	others: {
		notifier: {
			icon: './node_modules/gulp-notify/assets/gulp-error.png'
		}
	}
};