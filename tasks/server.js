'use strict';

import browserSync from 'browser-sync';

const server = () => {
	browserSync.init({
		server: 'src',
		notify: false,
		open: true,
		cors: true,
		ui: false
		// tunnel: true, tunnel: 'projectname', // Demonstration page: http://projectname.localtunnel.me
    });
}

export default server;
