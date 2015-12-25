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
    sass = require('gulp-sass'),
    jspm = require('gulp-jspm-build'),
    watch = require('gulp-watch'),
  	ts = require('gulp-typescript');

gulp.task('style', function() {
  gulp.src('src/scss/*.scss')
      .pipe(sass()).on('error', sass.logError)
      .pipe(gulp.dest('css'))
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
				  .pipe(gulp.dest('js'));
});

gulp.task('html', function () {
  gulp.src('src/**/*.html')
  .pipe(watch('src/**/*.html', {base: 'src'}))
  .pipe(gulp.dest('.'));
});

gulp.task('fonts', function() {
  return gulp.src('src/fonts/**/*').pipe(gulp.dest('css/fonts'))
});

gulp.task('images', function(){
  return gulp.src('src/images/**/*.+(png|jpg|gif|svg)')
  .pipe(cache(imagemin({
    interlaced: true
  })))
  .pipe(gulp.dest('images'))
});

gulp.task('browserSync', function() {
  browserSync.init({
    // proxy: "localhost:3000"
    server: {
    	baseDir: "."
    }
  })
});

gulp.task('watch', ['typescript', 'browserSync'], function () {
	gulp.watch('src/**/*.ts', ['typescript']);
	gulp.watch('*.html', browserSync.reload);
	gulp.watch('js/**/*.js', browserSync.reload);
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
	del('dist');
  del('js');
  del('css');
  del('images');
	return cache.clearAll(cb);
});

gulp.task('jspm', function(){
    jspm({        
        bundleOptions: {
            minify: true,
            mangle: true
        },
        bundles: [
            { src: 'app', dst: 'app.min.js' }
            /*
            {
                src: 'react + react-router',
                dst: 'lib.js',
                options: { mangle: false }
            }
            */
        ],
        /*
        configOverride: {
            baseURL: '/foo'
        }
        */
    })
    .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['clean', 'build']);

gulp.task('build', ['html', 'style','typescript', 'images', 'fonts'], function() {
  console.log('build done.');
});

gulp.task('dist', ['build'], function() {
  console.log('build dist done.');
});