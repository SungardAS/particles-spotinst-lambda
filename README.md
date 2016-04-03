# particles-spotinst-lambda

[![logo](https://raw.githubusercontent.com/SungardAS/condensation/master/docs/images/condensation_logo.png)](https://github.com/SungardAS/condensation)

[![NPM](https://nodei.co/npm/particles-spotinst-lambda.png)](https://nodei.co/npm/particles-spotinst-lambda/)

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/SungardAS/condensation?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)


## Summary

[Condensation](https://github.com/SungardAS/condensation) particles that create AWS CloudFormation templates.

Condensation allows templates and assets to be deployed together,
to any S3 bucket.  The template will always reference the assets and other templates that it
was deployed with.


## Build

    > ./node_modules/.bin/gulp condensation:build

## Packaged Project

Using condensation the built CloudFormation Templates for lambda-formation-example-resources
have been deployed to the following S3 locations.

### spotinst-lambda (lambda only)

|region|Stack|
|------|------------|---------|
|us-east-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=lambda-formation-fakeOnPremFwIngressRule&templateURL=https://s3.amazonaws.com/condensation-particles.us-east-1/particles-spotinst-lambda/master/particles/cftemplates/fakeOnPremFwIngressRule.template.json)|
|us-west-2|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-west-2#/stacks/new?stackName=lambda-formation-fakeOnPremFwIngressRule&templateURL=https://s3.amazonaws.com/condensation-particles.us-west-2/particles-spotinst-lambda/master/particles/cftemplates/fakeOnPremFwIngressRule.template.json)|
|eu-central-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=eu-central-1#/stacks/new?stackName=lambda-formation-fakeOnPremFwIngressRule&templateURL=https://s3.amazonaws.com/condensation-particles.eu-central-1/particles-spotinst-lambda/master/particles/cftemplates/fakeOnPremFwIngressRule.template.json)|
|eu-west-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=eu-west-1#/stacks/new?stackName=lambda-formation-fakeOnPremFwIngressRule&templateURL=https://s3.amazonaws.com/condensation-particles.eu-west-1/particles-spotinst-lambda/master/particles/cftemplates/fakeOnPremFwIngressRule.template.json)|
|ap-northeast-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=ap-northeast-1#/stacks/new?stackName=lambda-formation-fakeOnPremFwIngressRule&templateURL=https://s3.amazonaws.com/condensation-particles.ap-northeast-1/particles-spotinst-lambda/master/particles/cftemplates/fakeOnPremFwIngressRule.template.json)|
