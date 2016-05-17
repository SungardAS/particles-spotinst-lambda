# particles-spotinst-lambda

[![condensation][condensation-image]][condensation-url]

[![NPM][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Gitter][gitter-image]][gitter-url]
[![Dependency Status][daviddm-image]][daviddm-url]


## Summary

[Condensation][condensation-url] particles that create AWS CloudFormation templates for [spotinst-lambda][spotinst-lambda-url]

Condensation allows templates and assets to be deployed together,
to any S3 bucket.  The template will always reference the assets and other templates that it
was deployed with.

This project packages spotinst-lambda with CloudFormation templates that
can be uploaded to any region that support AWS Lambda.


## Build

    > ./node_modules/.bin/gulp condensation:build

## Packaged Project

Using condensation the built CloudFormation Templates for lambda-formation-example-resources
have been deployed to the following S3 locations.

### spotinst-lambda (lambda only)

|region|Stack|
|------|------------|---------|
|us-east-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=lambda-formation-spotinst-lambda&templateURL=https://s3.amazonaws.com/condensation-particles.us-east-1/particles-spotinst-lambda/master/particles/cftemplates/lambda.template.json)|
|us-west-2|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-west-2#/stacks/new?stackName=lambda-formation-spotinst-lambda&templateURL=https://s3.amazonaws.com/condensation-particles.us-west-2/particles-spotinst-lambda/master/particles/cftemplates/lambda.template.json)|
|eu-central-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=eu-central-1#/stacks/new?stackName=lambda-formation-spotinst-lambda&templateURL=https://s3.amazonaws.com/condensation-particles.eu-central-1/particles-spotinst-lambda/master/particles/cftemplates/lambda.template.json)|
|eu-west-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=eu-west-1#/stacks/new?stackName=lambda-formation-spotinst-lambda&templateURL=https://s3.amazonaws.com/condensation-particles.eu-west-1/particles-spotinst-lambda/master/particles/cftemplates/lambda.template.json)|
|ap-northeast-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=ap-northeast-1#/stacks/new?stackName=lambda-formation-spotinst-lambda&templateURL=https://s3.amazonaws.com/condensation-particles.ap-northeast-1/particles-spotinst-lambda/master/particles/cftemplates/lambda.template.json)|


## [![Sungard Availability Services | Labs][labs-logo]][labs-github-url]

This project is maintained by the Labs team at [Sungard Availability
Services](http://sungardas.com)

GitHub: [https://sungardas.github.io](https://sungardas.github.io)

Blog:
[http://blog.sungardas.com/CTOLabs/](http://blog.sungardas.com/CTOLabs/)


[labs-github-url]: https://sungardas.github.io
[labs-logo]: https://raw.githubusercontent.com/SungardAS/repo-assets/master/images/logos/sungardas-labs-logo-small.png
[condensation-image]: https://raw.githubusercontent.com/SungardAS/condensation/master/docs/images/condensation_logo.png
[condensation-url]: https://github.com/SungardAS/condensation
[npm-image]: https://badge.fury.io/js/particles-spotinst-lambda.svg
[npm-url]: https://nodei.co/npm/particles-spotinst-lambda
[gitter-image]: https://badges.gitter.im/Join%20Chat.svg
[gitter-url]: https://gitter.im/SungardAS/condensation?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge
[spotinst-lambda-url]: https://github.com/SungardAS/spotinst-lambda
[travis-image]: https://travis-ci.org/SungardAS/particles-spotinst-lambda.svg?branch=develop
[travis-url]: https://travis-ci.org/SungardAS/particles-spotinst-lambda
[daviddm-image]: https://david-dm.org/SungardAS/particles-spotinst-lambda.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/SungardAS/particles-spotinst-lambda
