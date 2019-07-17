'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';

export const server = browserSync.create();

gulp.task('watch', () => {
	server.init({
		server: 'src/',
		notify: false,
		open: true,
		cors: true,
		ui: false
		// tunnel: true, tunnel: 'projectname', // Demonstration page: http://projectname.localtunnel.me
	});

	gulp.watch('src/sass/**/*.{scss,sass}', gulp.series('styles'));
	gulp.watch('src/*.html').on('change', server.reload);
	gulp.watch('src/js/*.js').on('change', server.reload);
});
