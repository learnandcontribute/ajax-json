// inject dependecies
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename');
    
var browserSync = require('browser-sync').create();
    
// create object with all paths
var paths = {
  css: {
    src: './src/scss/*.scss',
    dest: './dist/css/'
  },
  js: {},
  html: {
    src: './*.html'
  }
};

// create function for css task
function css(){
  return (
    gulp
      .src(paths.css.src)
      .pipe(sass({
        errorLogToConsole: true,
        outputStyle: 'compressed'
      }))
      .on('error', console.error.bind(console))
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest(paths.css.dest))
      .pipe(browserSync.stream())
  );
}

// create function for watch tasks
function watch(){
  //css();
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch(paths.css.src, css);
  gulp.watch(paths.html.src, reload);
}

// create reload function for browser sync
function reload(){
  browserSync.reload();
}

// export functions to tasks
exports.css = css;
exports.watch = watch;




