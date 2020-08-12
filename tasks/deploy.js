'use strict';

import gulp from 'gulp';
import rsync from 'gulp-rsync';

const deploy = () => {
  return gulp
    .src('_site/**')
    .pipe(rsync({
      root: '_site/',
      hostname: 'bhx20139@oak-digital.ru',
      destination: 'public_html/',
      include: ['*.htaccess'], // Includes files to deploy
      exclude: ['**/Thumbs.db', '**/*.DS_Store'], // Excludes files from deploy
      recursive: true,
      archive: true,
      silent: false,
      compress: true
    }));
}

export default deploy;
