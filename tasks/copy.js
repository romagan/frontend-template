'use strict';

import gulp from 'gulp';

const copy = () => {
  return gulp
    .src([
        'src/fonts/**/*',
        'src/img/**/*',
    ],{
      base: 'src'
    })
    .pipe(gulp.dest('build'));
}

export default copy;
