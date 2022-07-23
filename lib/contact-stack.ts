import { CfnOutput, Stack, StackProps } from "aws-cdk-lib";
import {
  FunctionUrl,
  FunctionUrlAuthType,
  HttpMethod,
  Runtime,
} from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import {
    ManagedPolicy,
  PolicyDocument,
  PolicyStatement,
  Role,
  ServicePrincipal,
} from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";
import * as path from "path";
import { StringParameter } from "aws-cdk-lib/aws-ssm";

export interface ContactStackProps extends StackProps {
  domainName: string;
}

export class ContactStack extends Stack {
  constructor(scope: Construct, id: string, props: ContactStackProps) {
    super(scope, id, props);

    const sendEmailPolicyDocument = new PolicyDocument({
        statements: [
          new PolicyStatement({
            resources: ["*"],
            actions: ["ses:SendEmail", "ses:SendRawEmail"],
          }),
        ],
      });

    const contactFunctionExecutionRole = new Role(
      this,
      "ContactFunctionExecutionRole",
      {
        assumedBy: new ServicePrincipal("lambda.amazonaws.com"),
        description: 'Lambda execution role for sending SES mails',
        inlinePolicies: {
          SendSESEmail: sendEmailPolicyDocument
        },
        managedPolicies: [ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaBasicExecutionRole')]
      }
    );

    const contactFunction = new NodejsFunction(this, "ContactFunction", {
      runtime: Runtime.NODEJS_16_X,
      handler: "handler",
      entry: path.join(__dirname, "functions", "contact.ts"),
      projectRoot: path.join(__dirname, "functions"),
      depsLockFilePath:  path.join(__dirname, "functions", "package-lock.json"),
      role: contactFunctionExecutionRole,
      environment: {
        RECAPTCHA_SECRET_KEY: StringParameter.valueForStringParameter(this, 'recaptcha_secret_access_key', 2)
      }
    });
    const contactFunctionUrl = new FunctionUrl(this, "FunctionUrl", {
      function: contactFunction,
      authType: FunctionUrlAuthType.NONE,
      cors: {
        allowedOrigins: [
          `https://www.${props.domainName}`,
          `https://${props.domainName}`,
        ],
        allowedMethods: [HttpMethod.POST, HttpMethod.HEAD],
        allowedHeaders: ['Content-Type']
      },
    });

    new CfnOutput(this, "ContactFunctionURL", {
      value: contactFunctionUrl.url,
    });
  }
}
