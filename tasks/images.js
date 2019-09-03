'use strict';

import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';

gulp.task('imagemin', () => {
  return gulp
    .src('src/img/**/*.{png, jpg, jpeg, svg}')
    .pipe(
      imagemin([
        imagemin.optipng({
          optimizationLevel: 3
        }),
        imagemin.jpegtran({
          progressive: true
        }),
        imagemin.svgo()
      ])
    )
    .pipe(gulp.dest('build/img/'));
});

gulp.task('webp', () => {
  return gulp
    .src('build/img/**/*.{png, jpg, jpeg}')
    .pipe(
      webp({
        quality: 98
      })
    )
    .pipe(gulp.dest('build/img/'));
});

gulp.task('images', gulp.series('imagemin', 'webp'));
