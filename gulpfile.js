const babel = require("gulp-babel");
const gulp = require("gulp");
const concat = require("gulp-concat");


gulp.task("is-private-navigation.min.js", () => {
  return gulp.src([
      "sources/is-private-navigation.js"
    ])
    .pipe(concat("is-private-navigation.min.js"))
    .pipe(babel({
      compact: true,
      comments: false,
      minified: true
    }))
    .pipe(gulp.dest("./distrib"))
});

//gulp.task("default", ["is-private-navigation.min.js"]);
