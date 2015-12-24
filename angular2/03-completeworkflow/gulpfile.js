var gulp = require('gulp'),
	del = require('del'),
	sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync'),
	cache = require('gulp-cache'),
    gulpIf = require('gulp-if'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    minifyCSS = require('gulp-minify-css'),
    useref = require('gulp-useref'),
    sass = require('gulp-sass');
	ts = require('gulp-typescript');

gulp.task('style', function() {
  gulp.src('src/scss/*.scss')
      .pipe(sass()).on('error', sass.logError)
      .pipe(gulp.dest('build/css/'))
      .pipe(browserSync.reload({
        stream: true
      }));
});

gulp.task('typescript', function() {
	var project = ts.createProject('tsconfig.json');

	return project.src()
				  .pipe(sourcemaps.init())
				  .pipe(ts(project))
				  .js
				  .pipe(sourcemaps.write())
				  .pipe(gulp.dest('build/js'));
});

gulp.task('fonts', function() {
  return gulp.src('src/fonts/**/*').pipe(gulp.dest('build/css/fonts'))
});

gulp.task('images', function(){
  return gulp.src('src/images/**/*.+(png|jpg|gif|svg)')
  .pipe(cache(imagemin({
    interlaced: true
  })))
  .pipe(gulp.dest('build/images'))
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

/*
// optimization tasks for dist
gulp.task('useref', ['style'], function() {
  return gulp.src('public/*.html')
             .pipe(useref())
             .pipe(gulpIf('*.js', uglify()))
             .pipe(gulpIf('*.css', minifyCSS()))
             .pipe(gulp.dest('dist'))
});
*/

gulp.task('clean:dist', function(callback){
  del(['dist/**/*', '!dist/images', '!dist/images/**/*'], callback)
});

gulp.task('clean', function(cb) {
	// del('build');
	del('dist');
	return cache.clearAll(cb);
});

gulp.task('default', ['typescript', 'style']);

gulp.task('build', ['useref', 'images', 'fonts'], function() {
  console.log('build done.');
}

gulp.task('dist', ['build'], function() {
  console.log('build dist done.');
}););