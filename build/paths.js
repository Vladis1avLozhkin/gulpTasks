var source = './src/';
var dist = './dist/';

module.exports = {
	source: source,
	dist: dist,
	less: {
		src: [
			source + 'less/**/*.less',
			'!' + source + 'less/**/_*.less'
		],
		watch: source + 'less/**/*.less',
		dest: dist + 'css'
	}
};