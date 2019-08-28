const babel = require("gulp-babel");
const gulp = require("gulp");
const concat = require("gulp-concat");


gulp.task("default", () => {
  return gulp.src([
      "sources/is-private-navigation.js"
    ])
    .pipe(concat("is-private-navigation.min.js"))
    .pipe(babel({
      babelrc: false,
      plugins:["@babel/plugin-transform-arrow-functions","@babel/plugin-transform-destructuring"],
      compact: false,
      comments: false,
      minified: false
    }))
    .pipe(gulp.dest("./distrib"))
});

//gulp.task("default", ["is-private-navigation.min.js"]);
