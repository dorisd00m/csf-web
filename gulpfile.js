// gulpfile.js
const gulp  = require('gulp'),
    browserSync = require('browser-sync').create(),
    htmlmin = require('gulp-htmlmin'),
    nunjucksRender = require('gulp-nunjucks-render'),
    data = require('gulp-data');
    

const PATHS = {
    output: 'dist',
    templates: 'src/templates',
    pages: 'src/pages',
}
const 
    download_data = require("./" + PATHS.pages + "/data_download.json"),
    slider_data = require("./" + PATHS.pages + "/data_slide.json");
// writing up the gulp nunjucks task
gulp.task('nunjucks', function() {
    console.log('Rendering nunjucks files..');
    return gulp.src(PATHS.pages + '/**/*.+(html|js|css|less)')
        .pipe(data(download_data))
        .pipe(data(slider_data))
        .pipe(nunjucksRender({
          path: [PATHS.templates],
          watch: true,
        }))
        .pipe(gulp.dest(PATHS.output));
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: PATHS.output
        },
    });
});

gulp.task('watch', function() {
    // trigger Nunjucks render when pages or templates changes
    gulp.watch([PATHS.pages + '/**/*.+(html|js|css|less)', PATHS.templates + '/**/*.+(html|js|css|less)'], ['nunjucks'])
    
    // reload browsersync when `dist` changes
    gulp.watch(PATHS.output + '/*').on('change', browserSync.reload);
});

gulp.task('minify', function() {
  return gulp.src(PATHS.output + '/*.html')
    .pipe(htmlmin({
        collapseWhitespace: true,
        cssmin: true,
        jsmin: true,
        removeOptionalTags: true,
        removeComments: false
    }))
    .pipe(gulp.dest(PATHS.output));
});

// run browserSync auto-reload together with nunjucks auto-render
gulp.task('auto', ['browserSync', 'watch']);

//default task to be run with gulp
gulp.task('default', ['nunjucks']);