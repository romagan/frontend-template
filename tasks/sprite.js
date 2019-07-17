'use strict';

import gulp from 'gulp';
import gulpif from 'gulp-if';
import svg from 'gulp-svg-sprite';
import debug from "gulp-debug";
import browserSync from 'browser-sync';

import  {dev, prod} from '../gulpfile.esm';
import {server} from './watch';

gulp.task('sprite', () => {
	return gulp.src('src/img/svg/*.svg')
		.pipe(svg({
			mode: {
				symbol: {
					sprite: '../sprite.svg'
				}
			}
		}))
		.pipe(gulpif(prod, gulp.dest('build/img')))
        .pipe(gulpif(dev, gulp.dest('src/img')))
		.pipe(debug({
            'title': 'Sprite'
		}))
		.on('end', server.reload);
})
