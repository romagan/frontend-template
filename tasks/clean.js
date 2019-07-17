'use strict';

import gulp from 'gulp';
import gulpif from 'gulp-if';
import del from 'del';

import  {dev, prod} from '../gulpfile.esm';

gulp.task('clean', () => {
	return del(
		gulpif(dev, ['src/img/sprite.svg', 'src/js/script.js']),
		gulpif(prod, 'build')
		);
});
