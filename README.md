# gulpTasks
Решил унифицировать *gulp* задачи которыми пользуюсь постоянно.

На данный момент это:

- less
- babel
- browser-sync

## Отлавливание ошибок для всех задач

Для удобства отлавливания и вывода ошибок переопределен метод gulp.src:

```js
//...
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

module.exports = gulp;
```