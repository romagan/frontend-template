'use strict';

import gulp from 'gulp';
import gulpif from 'gulp-if';

const requireDir = require('require-dir');
const dir = requireDir('./tasks/');

export let dev = true;
export let prod = !dev;

gulp.task('dev', gulp.series(
  'clean',
  gulp.parallel(
    'styles',
    'scripts',
    'watch',
    'sprite'
  )
));

const build = gulp.series('clean', 'styles', 'scripts', 'sprite');
gulp.task('build', build);

gulp.task('images', function () {
  return gulp.src('source/images/**/*.{png,jpg,svg}')
    .pipe(imagemin([
      imagemin.optipng({
        optimizationLevel: 3
      }),
      imagemin.jpegtran({
        progressive: true
      }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest('build/images/'));
});

gulp.task('webp', function () {
  return gulp.src('source/img/**/*.{png,jpg}')
    .pipe(webp({
      quality: 98
    }))
    .pipe(gulp.dest('source/img/'));
});

gulp.task('html', function() {
  return gulp.src('source/*.html')
    .pipe(posthtml([
      include()
      ]))
    .pipe(gulp.dest('build'));
});

gulp.task('copy', function () {
  return gulp.src([
      'source/fonts/**/*.{woff,woff2}',
      'source/img/**',
    ], {
      base: 'source/'
    })
    .pipe(gulp.dest('build'));
});

gulp.task('compress', function (cb) {
  pump([
      gulp.src('source/js/*.js'),
      uglify(),
      gulp.dest('build/js')
    ],
    cb
  );
});


gulp.task('babel', () =>
  gulp.src([
    'source/js/*.js'
  ])
  .pipe(babel())
  .pipe(gulp.dest('build/js'))
);

