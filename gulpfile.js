/**
 * Created by XLON on 2018/1/24.
 */
var gulp = require('gulp')
var sass = require('gulp-sass')
gulp.task('sass', function () {
  setSass()
})

gulp.task('watch', function () {
  setWatch()
})

gulp.task('default', function () {
  setSass()
  setWatch()
})

function setSass () {
  return gulp.src('./sass/index.sass').pipe(sass()).pipe(gulp.dest('./dist'))
}

function setWatch () {
  gulp.watch('./sass/**/*.sass', ['sass'])
}