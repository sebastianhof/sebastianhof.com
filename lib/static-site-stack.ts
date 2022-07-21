import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as certificateManager from 'aws-cdk-lib/aws-certificatemanager';
import * as cloudFront from 'aws-cdk-lib/aws-cloudfront';
import * as cloudFrontOrigins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as route53Targets from 'aws-cdk-lib/aws-route53-targets';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3Deployment from 'aws-cdk-lib/aws-s3-deployment';

export interface StaticSiteProps extends StackProps {
  domainName: string; 
  bucketName: string;
}

export class StaticSiteStack extends Stack {

  constructor(scope: Construct, id: string, props: StaticSiteProps) {
    super(scope, id, props);

    /*
     * Route53 Hosted Zone
     */
    const hostedZone = route53.HostedZone.fromLookup(this, 'Zone', { domainName: props.domainName });

    /*
     *  CloudFront Origin Access Identity (OAI)
     */
    const originAccessIdentity = new cloudFront.OriginAccessIdentity(this, 'OAI', {
      comment: `CloudFront Origin Access Identity for ${props.domainName}`
    });

    /*
     * S3 Bucket
     */

    const s3Bucket = new s3.Bucket(this, 'Bucket', {
      bucketName: props.bucketName,
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL
    });

    s3Bucket.addToResourcePolicy(new iam.PolicyStatement({
      actions: ['s3:GetObject'],
      resources: [s3Bucket.arnForObjects('*')],
      principals: [new iam.CanonicalUserPrincipal(originAccessIdentity.cloudFrontOriginAccessIdentityS3CanonicalUserId)]
    }))

    /*
     * Certificate
     */
    const certificate = new certificateManager.DnsValidatedCertificate(this, 'Certificate', {
      domainName: props.domainName,
      hostedZone,
      region: 'us-east-1', // CloudFront only supports certificates from us-east-1  
      subjectAlternativeNames: [`www.${props.domainName}`]
    });

    /*
     * CloudFront Distribution
     */

    const cloudFrontDistribution = new cloudFront.Distribution(this, 'Distribution', {
      certificate,
      defaultBehavior: {
        origin: new cloudFrontOrigins.S3Origin(s3Bucket, {
          originAccessIdentity
        }),
        compress: true,
        allowedMethods: cloudFront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        viewerProtocolPolicy: cloudFront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS
      },
      defaultRootObject: 'index.html',
      domainNames: [props.domainName, `www.${props.domainName}`],
      minimumProtocolVersion: cloudFront.SecurityPolicyProtocol.TLS_V1_2_2021,
      priceClass: cloudFront.PriceClass.PRICE_CLASS_100
    });

    /*
     * Route53 Alias Records
     */

    const alias = new route53.ARecord(this, 'AliasRecord', {
      recordName: props.domainName,
      target: route53.RecordTarget.fromAlias(new route53Targets.CloudFrontTarget(cloudFrontDistribution)),
      zone: hostedZone
    });

    new route53.ARecord(this, 'wwwAliasRecord', {
      recordName: `www.${props.domainName}`,
      target: route53.RecordTarget.fromAlias(new route53Targets.Route53RecordTarget(alias)),
      zone: hostedZone
    });

    /*
     * Deploy site content
     */
    new s3Deployment.BucketDeployment(this, 'Deployment', {
      sources: [s3Deployment.Source.asset('./build')],
      destinationBucket: s3Bucket,
      distribution: cloudFrontDistribution,
      distributionPaths: ['/*']
    })


  }
}
