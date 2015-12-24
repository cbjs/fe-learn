var gulp = require('gulp'),
    del = require('del'),
    browserSync = require('browser-sync'),
    gulpIf = require('gulp-if'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    minifyCSS = require('gulp-minify-css'),
    useref = require('gulp-useref'),
    sass = require('gulp-sass');

// development tasks
gulp.task('style', function() {
  gulp.src('public/scss/main.scss')
      .pipe(sass()).on('error', sass.logError)
      .pipe(gulp.dest('./public/css/'))
      .pipe(browserSync.reload({
        stream: true
      }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    proxy: "localhost:3000"
  })
});

gulp.task('watch', ['browserSync', 'style'], function() {
  gulp.watch('public/scss/**/*.scss', ['style']);
  gulp.watch('public/*.html', browserSync.reload);
  gulp.watch('public/js/*.js', browserSync.reload);
});

// optimization tasks for dist
gulp.task('useref', ['style'], function() {
  return gulp.src('public/*.html')
             .pipe(useref())
             .pipe(gulpIf('*.js', uglify()))
             .pipe(gulpIf('*.css', minifyCSS()))
             .pipe(gulp.dest('dist'))
});

gulp.task('fonts', function() {
  return gulp.src('public/css/fonts/**/*')
  .pipe(gulp.dest('dist/css/fonts'))
});

gulp.task('images', function(){
  return gulp.src('public/images/**/*.+(png|jpg|gif|svg)')
  .pipe(cache(imagemin({
    interlaced: true
  })))
  .pipe(gulp.dest('dist/images'))
});

gulp.task('clean:dist', function(callback){
  del(['dist/**/*', '!dist/images', '!dist/images/**/*'], callback)
});

gulp.task('clean', function(callback) {
  del('dist');
  return cache.clearAll(callback);
});

gulp.task('default', ['style']);
gulp.task('build', ['useref', 'images', 'fonts'], function() {
  console.log('build done.');
});
