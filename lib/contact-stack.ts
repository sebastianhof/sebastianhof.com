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
        managedPolicies: [ManagedPolicy.fromAwsManagedPolicyName('AWSLambdaBasicExecutionRole')]
      }
    );

    const contactFunction = new NodejsFunction(this, "ContactFunction", {
      runtime: Runtime.NODEJS_16_X,
      handler: "handler",
      entry: path.join(__dirname, "functions", "contact.ts"),
      role: contactFunctionExecutionRole,
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
      },
    });

    new CfnOutput(this, "ContactFunctionURL", {
      value: contactFunctionUrl.url,
    });
  }
}
