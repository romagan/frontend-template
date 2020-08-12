'use strict';

import gulp from 'gulp';
import gulpif from 'gulp-if';

import clean from './tasks/clean';
import styles from './tasks/styles';
import scripts from './tasks/scripts';
import watch from './tasks/watch';
import server from './tasks/server';
import sprite from './tasks/sprite';
import copy from './tasks/copy';
//import deploy from './tasks/deploy'; //npm install gulp-rsync --save-dev

const requireDir = require('require-dir');
const dir = requireDir('./tasks/');

export let dev = true;
export let prod = !dev;

const devbuild = gulp.series(clean, gulp.parallel(styles, scripts, sprite), gulp.parallel(watch, server));
exports.devbuild = devbuild;

const build = gulp.series(clean, styles, scripts, sprite, 'images', copy);
exports.build = build;

//exports.deploy = gulp.series(deploy);

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
