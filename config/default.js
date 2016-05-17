var gitrev = require('git-rev-sync');

var regions = [
  'us-east-1',
  'us-west-2',
  'eu-west-1',
  'ap-northeast-1'
];

var buckets = [];
var versionPath = gitrev.branch();

if (process.env.TRAVIS) {
  if (process.env.TRAVIS_PULL_REQUEST !== "false") {
    versionPath = ["PR",process.env.TRAVIS_PULL_REQUEST].join('/');
  }
  else if (process.env.TRAVIS_TAG) {
    versionPath = ["release",process.env.TRAVIS_TAG].join('/');
  }
  else {
    versionPath = process.env.TRAVIS_BRANCH;
  }
}

regions.forEach(function(regionName) {
  buckets.push({
    aws: {
      region: regionName,
      bucket: 'condensation-particles.'+regionName
    },
    prefix: 'particles-spotinst-lambda/'+versionPath,
    clean: true,
    validate: true,
    create: true
  });
});


var config = {
  s3: buckets,
  dist: 'dist'
};

module.exports = config;
