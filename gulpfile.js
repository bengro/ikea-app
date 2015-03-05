/* GULP DEPENDENCIES */
var gulp = require('gulp');
var karma = require('gulp-karma');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var path = require('path');
var minifyCSS = require('gulp-minify-css');
var htmlmin = require('gulp-html-minifier');
var webserver = require('gulp-webserver');
var rev = require('gulp-rev');
var usemin = require('gulp-usemin');
var clean = require('gulp-clean');


/* WATCHES */
gulp.task('watch', function () {
    // Watch .js files
    gulp.watch([
        'app/**/*.js',
        '!**/*.test.js'
    ], ['scripts']);

    // Watch .less files
    gulp.watch('app/*.less', ['less']);

    // Watch .less files
    gulp.watch('app/**/*.html', ['html', 'usemin']);

    // Watch artifacts dir
    gulp.watch('app/artifacts', ['artifacts']);
});


/* RUN */
gulp.task('webserver', function () {
    gulp.src('dist')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: 'index.html'
        }));
});


/* TEST */
gulp.task('test', function () {
    return gulp.src('app/**/*.test.js')
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'watch'
        }));
});
gulp.task('test-once', function () {
    return gulp.src('app/**/*.test.js')
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }));
});


/* DIST */
gulp.task('clean-dist', function() {
    return gulp.src('dist/', {read: false})
        .pipe(clean());
});

gulp.task('deploy', ['clean-dist', 'html', 'usemin', 'scripts', 'less', 'artifacts']);

gulp.task('scripts', function () {
    return gulp.src([
        'app/**/*.js',
        '!**/*.test.js'])
        .pipe(concat('app.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('dist/'));
});

gulp.task('usemin', function () {
    return gulp.src('app/index.html')
        .pipe(usemin({
            js: [uglify(), rev()],
            //html: [htmlmin({collapseWhitespace: true})]
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('html', function () {
    return gulp.src(['app/**/*.html', '!app/index.html'])
        //.pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/'));
});

gulp.task('less', function () {
    return gulp.src('app/**/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(concat('style.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/'));
});

gulp.task('artifacts', function () {
    return gulp.src(['bower_components/bootstrap/dist/fonts/*', 'app/artifacts/*'])
        .pipe(gulp.dest('dist/artifacts'));
});

gulp.task('default', ['deploy', 'watch', 'webserver']);
