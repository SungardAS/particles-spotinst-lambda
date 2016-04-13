var git = require('gulp-git'),
gulp = require('gulp'),
vfs = require('vinyl-fs'),
zip = require('gulp-zip'),
exec = require('child_process').exec;

module.exports.initialize = function(cb) {
  git.updateSubmodule({ args: '--init --remote' });
  var child = exec('npm install', {cwd: './vendor/spotinst-lambda'}, function(error, stdout, stderr) {
    if (error) return cb(error);
  });

  vfs.src('./vendor/spotinst-lambda/**')
  .pipe(zip('spotinst-lambda.zip'))
  .pipe(gulp.dest('./particles/assets'))
  .on('end', cb);
};
