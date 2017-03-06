var exec = require('child_process').exec;
var gulp = require('gulp');

gulp.task('default', function(cb){
  exec("node app.js", function(e, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(e);
  });
});

gulp.task('json2csv', function(cb){
  exec("node playground/jsontocsv.js", function(e, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(e);
  });
});
