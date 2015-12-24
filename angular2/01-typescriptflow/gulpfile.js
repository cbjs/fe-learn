var gulp = require('gulp'),
	sourcemaps = require('gulp-sourcemaps'),
	cache = require('gulp-cache'),
	ts = require('gulp-typescript');

gulp.task('typescript', function() {
	var project = ts.createProject('tsconfig.json');

	return project.src()
				  .pipe(sourcemaps.init())
				  .pipe(ts(project))
				  .js
				  .pipe(sourcemaps.write())
				  .pipe(gulp.dest('build'));
});

gulp.task('watch', ['typescript'], function () {
	gulp.watch('src/**/*.ts', ['typescript']);
});

gulp.task('clean', function(cb) {
	del('build');
	del('dist');
	return cache.clearAll(cb);
});

gulp.task('default', ['typescript']);