'use strict';

import gulp from 'gulp';
import styles from './styles';
import scripts from './scripts';
import browserSync from 'browser-sync';

const watch = () => {
	gulp.watch('src/sass/**/*.{scss,sass}', gulp.series(styles));
	gulp.watch('src/*.html').on('change', browserSync.reload);
	gulp.watch('src/index.js').on('change', gulp.series(scripts));
	gulp.watch([
        'src/fonts/**/*',
        'src/img/**/*'
    ], browserSync.reload);
}

export default watch;
