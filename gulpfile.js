import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import { src, dest } from "gulp";

const sass = gulpSass(dartSass);

export function css(done) {
  src("src/scss/app.scss")
    //pipe permite ejecutar la funcion
    .pipe(sass())
    .pipe(dest("build/css"));
  done();
}
