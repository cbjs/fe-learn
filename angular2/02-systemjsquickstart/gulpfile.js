var gulp = require('gulp'),
	del = require('del'),
	sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync'),
	cache = require('gulp-cache'),
	ts = require('gulp-typescript');

gulp.task('typescript', function() {
	var project = ts.createProject('tsconfig.json');

	return project.src()
				  .pipe(sourcemaps.init())
				  .pipe(ts(project))
				  .js
				  .pipe(sourcemaps.write())
				  .pipe(gulp.dest('build/js'));
});

gulp.task('browserSync', function() {
  browserSync.init({
    // proxy: "localhost:3000"
    server: {
    	baseDir: "./build"
    }
  })
});

gulp.task('watch', ['typescript', 'browserSync'], function () {
	gulp.watch('src/**/*.ts', ['typescript']);
  	gulp.watch('build/*.html', browserSync.reload);
	gulp.watch('build/js/**/*.js', browserSync.reload);
});

gulp.task('clean', function(cb) {
	del('build');
	del('dist');
	return cache.clearAll(cb);
});

gulp.task('default', ['typescript']);
