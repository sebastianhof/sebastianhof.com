import { Context, APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import axios from 'axios';

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
    try {
        const response = await axios({
            url: `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`, 
            method: 'post'
        });
        if (!response?.data?.success) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Recaptcha validation failed' })
            }
        }
    } catch (err) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Recaptcha validation failed' })
        }
    }
     

    // send SES


    return {
        statusCode: 200,
        body: JSON.stringify({ success: true })
    }
}