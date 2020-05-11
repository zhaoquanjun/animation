var gulp = require('gulp')
var sass = require('gulp-sass')
var auto = require('gulp-autoprefixer')
var rename = require('gulp-rename')
var uglify = require('gulp-uglify')
var babel = require('gulp-babel')
// const concat = require('gulp-concat') // 合并多个css .concat('index.css')

gulp.task('css', function (done) {
  gulp
    .src('./src/animations/*/index.scss')
    .pipe(
      sass({
        outputStyle: 'compressed'
      })
    )
    // .pipe(concat('all.min.css'))
    .on('error', sass.logError)
    .pipe(
      auto({
        cascade: false
      })
    )
    .pipe(
      rename({
        suffix: '.min'
      })
    )
    .pipe(gulp.dest('./dist/css/'))
  done()
})

gulp.task('js', function (done) {
  gulp
    .src('./src/animations/*/index.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(
      rename({
        suffix: '.min'
      })
    )
    .pipe(gulp.dest('./dist/js/'))
  done()
})

gulp.task('mincss', function(done) {
  gulp
    .src('./src/animations/index.scss')
    .pipe(
      sass({
        outputStyle: 'compressed'
      })
    )
    .on('error', sass.logError)
    .pipe(
      auto({
        cascade: false
      })
    )
    .pipe(
      rename({
        suffix: '.min'
      })
    )
    .pipe(gulp.dest('./dist/animatecss/'))
  done()
})

gulp.task('minjs', function(done) {
  gulp.src('./src/animations/animate.js')
  .pipe(babel())
  .pipe(uglify())
  .pipe(
    rename({
      suffix: '.min'
    })
  )
  .pipe(gulp.dest('./dist/animatejs/'))
  done()
})
