var git = require('gulp-git'),
gulp = require('gulp'),
vfs = require('vinyl-fs'),
zip = require('gulp-zip'),
exec = require('child_process').exec;

module.exports.initialize = function(cb) {
  git.updateSubmodule({ args: '--init --remote', cwd: __dirname });
  var child = exec('npm --production install', {cwd: __dirname + '/vendor/spotinst-lambda'}, function(error, stdout, stderr) {
    if (error) return cb(error);
  });

  vfs.src(__dirname + '/vendor/spotinst-lambda/**')
  .pipe(zip('spotinst-lambda.zip'))
  .pipe(gulp.dest(__dirname + '/particles/assets'))
  .on('end', cb);
};
