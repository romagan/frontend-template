'use strict';

import gulp from 'gulp';

gulp.task('copy', function() {
  return gulp
    .src([
        'src/fonts/**/*.{woff,woff2}'
    ], {
      base: 'src/'
    })
    .pipe(gulp.dest('build'));
});
