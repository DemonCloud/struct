const src = "./src/";
const dest = "./dist/";

const colors = require("colors");
const gulp = require("gulp");
const gfilter = require("gulp-filter");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");

const build = function(){
  return gulp.src(src+"struct.js")
    .pipe(gfilter(['**'],{restore:true}))
    .pipe(uglify({
      compress:{
        unsafe: true,
        hoist_vars: true
      }
    }))
    .pipe(rename('struct.min.js'))
    .pipe(gulp.dest(dest));
};

module.exports = {
  build: build,
  default: build
};
