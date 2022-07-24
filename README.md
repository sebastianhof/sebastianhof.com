# sebastianhof.com

The personal homepage of @sebastianhof based on the free React.js template [UIdeck Resume](https://uideck.com/templates/resume-react/).

## Overview

The page is hosted as a static website in an Amazon S3 bucket, distributed via Amazon CloudFront, and available on the custom domain `https://sebastianhof.com`.
A Lambda function send the contact form data via SES to my email address. A Lambda function URL serves as the endpoint.

The project contains two CDK stacks:

- to setup and deploy the static website (`SebastianhofComStack`)
- to setup and deploy the contact form lambda function (`SebastianhofComContactStack`)


