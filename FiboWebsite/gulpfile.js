// ////////////////////////////////////////////
// Required
// ////////////////////////////////////////////
  var gulp = require('gulp'),
  browserSync = require('browser-sync');

  gulp.task('html-watch',browserSync.reload);


  gulp.task('watch', function() {
    gulp.watch('src/**/*.html', ['html-watch']).on('change', function(evt) {
        browserSync.reload("index.html");
    });
  });
  
  gulp.task('magic', function() {
		browserSync({
			server:{
				baseDir: "src/",
				index: "index.html"
			}
		});
	});


// ////////////////////////////////////////////
// Default Task
// ////////////////////////////////////////////
gulp.task('default', ['magic','watch']);

