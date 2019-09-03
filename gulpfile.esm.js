'use strict';

import gulp from 'gulp';
import gulpif from 'gulp-if';

const requireDir = require('require-dir');
const dir = requireDir('./tasks/');

export let dev = true;
export let prod = !dev;

gulp.task(
  'dev',
  gulp.series('clean', gulp.parallel('styles', 'scripts', 'watch', 'sprite'))
);

const build = gulp.series('clean', 'styles', 'scripts', 'sprite', 'images', 'copy');
gulp.task('build', build);


gulp.task('html', function() {
  return gulp
    .src('src/*.html')
    .pipe(posthtml([include()]))
    .pipe(gulp.dest('build'));
});

// gulp.task('compress', function(cb) {
//   pump([gulp.src('src/js/*.js'), uglify(), gulp.dest('build/js')], cb);
// });

// gulp.task('babel', () =>
//   gulp
//     .src(['source/js/*.js'])
//     .pipe(babel())
//     .pipe(gulp.dest('build/js'))
// );
