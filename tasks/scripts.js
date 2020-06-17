'use strict';

import gulp from 'gulp';
import gulpif from 'gulp-if';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import browserSync from 'browser-sync';

import { dev, prod } from '../gulpfile.esm';

const scripts = () => {
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
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ],
    mode: dev ? 'development' : 'production',
    devtool: dev ? 'eval-source-map' : 'none'
  };
  
  return gulp
    .src('src/index.js')
    .pipe(webpackStream(webpackConfig))
    .pipe(gulpif(dev, gulp.dest('src/js')))
    .pipe(gulpif(prod, gulp.dest('build/js')))
    .pipe(browserSync.stream());
};

export default scripts;
