import { filePaths } from '../config/paths.js';
import gulp from "gulp";
import favicons from "gulp-favicons";


import { plugins } from '../config/plugins.js';

import { isBuild } from '../../gulpfile.js';


const favicon = () => {
    return gulp
    .src(filePaths.src.favicons)
    .pipe(favicons({
        icons: {
            appleIcon: true,
            favicons: true,
            online: false,
            appleStartup: false,
            android: false,
            firefox: false,
            yandex: false,
            windows: false,
            coast: false
        }
    }))
    .pipe(gulp.dest(filePaths.build.favicons))
    .pipe(gulp.dest(filePaths.build.favicons))
    .pipe(gulp.src(filePaths.src.favicons))
    .pipe(gulp.dest(filePaths.build.favicons))
    .pipe(plugins.browserSync.stream());
}

export { favicon };