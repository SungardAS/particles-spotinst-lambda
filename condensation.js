var exec = require("child_process").exec;
var targz = require("tar.gz");
var path = require("path");
var vfs = require('vinyl-fs');
var gulp = require("gulp");
var zip = require('gulp-zip');


module.exports.initialize = function(cb) {

  exec('npm pack spotinst-lambda', {cwd: path.join(__dirname,"vendor")}, function(error, stdout, stderr) {
    if (error) return cb(error);

    var filename = stdout;

    targz().extract(path.join(__dirname,"vendor",filename.trim()), path.join(__dirname,"vendor","spotinst-lambda"), function(err){
      if (error) return cb(error);

      exec("npm install --production", {cwd: path.join(__dirname,"vendor","spotinst-lambda","package")}, function(error, stdout, stderr) {
        if (error) return cb(error);
        vfs.src("./vendor/spotinst-lambda/package/**")
        .pipe(zip("spotinst-lambda.zip"))
        .pipe(gulp.dest("./particles/assets"))
        .on('end', cb);
      });
    });
  });
};

