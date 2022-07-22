import { Context, APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";

export async function handler(event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> {
    // check body
    if (!event.body) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Body is missing' })
        }
    }
        
    const { captcha, name, email, subject, message } = JSON.parse(event.body);
    // check missing field
    if (!captcha || !name || !email || !subject || !message) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Field is missing' })
        }
    }

    // verify captcha

    


    // send SES


    return {
        statusCode: 200,
        body: JSON.stringify({ success: true })
    }
}