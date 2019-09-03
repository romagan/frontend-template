'use strict';

import gulp from 'gulp';
import gulpif from 'gulp-if';
import webpack from 'webpack-stream';

import { dev, prod } from '../gulpfile.esm';

const webpackConfig = {
  output: {
    filename: 'script.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      }
    ]
  },
  mode: dev ? 'development' : 'production',
  devtool: dev ? 'eval-source-map' : 'none'
};

gulp.task('scripts', () => {
  return gulp
    .src('src/js/index.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulpif(dev, gulp.dest('src/js')))
    .pipe(gulpif(prod, gulp.dest('build/js')));
});
