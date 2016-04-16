var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var minify = require('gulp-minify');

function lesscompile ()
{
    gulp.src('./source/**/*.less')
        .pipe(concat())
        .pipe(cleanCSS())
        .pipe(gulp.dest('./build/'));
}

gulp.task('l');