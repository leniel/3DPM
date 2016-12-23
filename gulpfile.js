var gulp = require('gulp'),
    webserver = require('gulp-webserver');

gulp.task('webserver', function () {
    gulp.src('.')
        .pipe(webserver({
            livereload: true,
            port:'7777',
            //directoryListing: true,
            defaultFile: 'index.html',
            open: true
        }));
});