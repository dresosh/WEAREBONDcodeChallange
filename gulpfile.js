var gulp = require('gulp')
   ,sass = require('gulp-sass')
   ,sync = require('browser-sync')
   ,reload = sync.reload
   ,files = ['index.html', 'app.js', './app/**/*']


// file reload
gulp.task('files', function () {
  gulp.src(files)
    .pipe(reload({ stream:true }))
})

// browser-sync
gulp.task('sync', function () {
  sync.init({
    proxy: 'localhost:8080'
  })
})

// file watch
gulp.task('watch', function () {
  gulp.watch(files, ['files'])
  gulp.watch('./app/scss/**/*.scss', ['sass'])
})

// sass compiler
gulp.task('sass', function () {
 return gulp.src('./app/scss/**/*.scss')
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest('./app/css'))
   .pipe(reload({ stream:true }))
})

// default task
gulp.task('default', ['sync', 'watch'])
