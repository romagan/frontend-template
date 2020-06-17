'use strict';

import gulp from 'gulp';
import gulpif from 'gulp-if';
import sass from 'gulp-sass';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import groupcss from 'gulp-group-css-media-queries';
import minify from 'gulp-csso';
import browserSync from 'browser-sync';

import  {dev, prod} from '../gulpfile.esm';

const styles = () => {
	return gulp.src('src/sass/style.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(groupcss())
		.pipe(postcss([
			autoprefixer({
				grid: true,
				overrideBrowserslist: ['last 10 versions']
			})
		]))
		.pipe(gulpif(prod, minify({
			sourceMap: true
		})))
		.pipe(gulpif(dev, gulp.dest('src/css')))
		.pipe(gulpif(prod, gulp.dest('build/css')))
		.pipe(browserSync.stream());
};

export default styles;
