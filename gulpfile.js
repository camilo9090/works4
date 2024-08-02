import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import { src, dest,watch } from "gulp";

const sass = gulpSass(dartSass);

export function css(done) {
  src("src/scss/app.scss")
    //pipe permite ejecutar la funcion
    //.on('error',sass.logError)muestra errores en consola
    .pipe(sass().on('error',sass.logError))
    .pipe(dest("build/css"));
  done();
}

export function dev() {
watch('src/scss/**/*.scss', css)
  
}