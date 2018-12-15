var gulp = require('gulp');
var importCss = require("gulp-cssimport");
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var autoprefixBrowsers = ['> 1%', 'last 2 versions', 'firefox >= 4', 'safari 7', 'safari 8', 'IE 8', 'IE 9', 'IE 10', 'IE 11'];




gulp.task('default', () =>{
  gulp.src(__dirname+"/dest/dest.css")
      .pipe(importCss({skipComments:false}))
        .pipe(autoprefixer({
          cascade: false,
          flexbox : true,
          grid :true,
          browsers: autoprefixBrowsers
        })).pipe(cleanCSS())
    //   .pipe(cleanCSS({debug: true}, (details) => {
    //   console.log(`${details.name}: ${details.stats.originalSize}`);
    //   console.log(`${details.name}: ${details.stats.minifiedSize}`);
    // }))

      .pipe(gulp.dest(__dirname+"/"));
});
