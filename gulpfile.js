'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var prefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function(){
    return gulp.src('src/styles/**/*.sass')
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(prefixer({
          browsers: ['last 2 versions', 'ie >= 10', 'and_chr >= 2.3'],
          cascade: false
      }))
      .pipe(concat('app.css'))
      .pipe(gulp.dest('public/styles'));
});

gulp.task("js", function () {
  return gulp.src("src/javascript/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("app.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("public/javascript"));
});

gulp.task('default', ['sass', 'js'], function(){
    console.log('test');
});
