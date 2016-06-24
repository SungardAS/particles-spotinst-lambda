var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("resources", function() {
  describe("lambda", function() {
    it("creates an empty lambda function", function() {
      cTests.testParticle(
        "resource",
        "lambda",
        require("./fixtures/resource_lambda_output_1"),
        {logicalId: "DBCluster", hArgs:{s3:{prefix:''}}}
      );
    });

    it("sets Timeout", function() {
      cTests.testParticle(
        "resource",
        "lambda",
        require('./fixtures/resource_lambda_output_2'),
        {logicalId: "DBCluster", hArgs:{s3:{prefix:''}, timeout: "300"}}
      );
    });
  });
});
