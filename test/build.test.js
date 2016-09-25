var exec = require('child_process').exec;

describe("build", function() {
  this.timeout(45000);

  it("should build the project", function(done) {
    exec("./node_modules/.bin/gulp condensation:build",{},done);
  });
});
