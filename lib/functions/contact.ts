import { Context, APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import axios from "axios";
import { SES } from "aws-sdk";

export async function handler(
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> {
  // check body
  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Body is missing" }),
    };
  }

  const { captcha, name, email, subject, message } = JSON.parse(event.body);
  // check missing field
  if (!captcha || !name || !email || !subject || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Field is missing" }),
    };
  }

  // verify captcha
  try {
    const response = await axios({
      url: `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
      method: "post",
    });
    if (!response?.data?.success) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Recaptcha validation failed" }),
      };
    }
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Recaptcha validation failed" }),
    };
  }

  // send SES
  try {
    const response = await new SES({ apiVersion: "2010-12-01" }).sendEmail({
      Destination: {
        ToAddresses: ["mail@sebastianhof.com"],
      },
      Source: "no-reply@sebastianhof.com",
      ReplyToAddresses: [
        email
      ],
      Message: {
        Body: {
          Text: {
            Charset: "UTF-8",
            Data: message,
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: `Contact from ${name}: ${subject}`,
        },
        
      },
    }).promise();
    console.log(`Successfully sent email with message id ${response.MessageId}`);
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Could not send email" }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true }),
  };
}
