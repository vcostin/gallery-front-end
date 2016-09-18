import gulp from 'gulp';
import sass from 'gulp-sass';
import prefixer from 'gulp-autoprefixer';
import concat from 'gulp-concat';
import babel from 'gulp-babel';
import sourcemaps from 'gulp-sourcemaps';
import rollup from 'gulp-rollup';
import includePaths from 'rollup-plugin-includepaths';

gulp.task('sass', () => {
  gulp.src('src/styles/**/*.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(prefixer({
      browsers: ['last 2 versions', 'ie >= 10', 'and_chr >= 2.3'],
      cascade: false
    }))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('public/styles'))
});

gulp.task('js', () => {
  gulp.src('src/javascript/application.js')
    .pipe(rollup({
      format: 'iife',
      external: ['angular'],
      plugins: [
        includePaths({
          include: {
            'angular': './node_modules/angular/angular.js'
          }
        })
      ],
      sourceMap: true,
      globals: {
        angular: 'angular'
      }
    }))
    .pipe(babel())
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest("public/javascript"))
});

gulp.task('default', ['sass', 'js'], () => console.log('test'));
