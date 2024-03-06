import 'dotenv/config';
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';

export const dynamic = 'force-dynamic'; // static by default, unless reading the request
export const runtime = 'nodejs';

export async function POST(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
      }
    
      try {
        const { name, email, message } = req.body;
    
        const mailerSend = new MailerSend({
          apiKey: process.env.API_KEY,
        });
    
        const sentFrom = new Sender('hello@pitahayalabs.com', 'New Lead - Pitahaya Labs Site');
    
        const recipients = [
          new Recipient('angus@pitahayalabs.com', 'Angus Gaukroger'),
        ];
    
        const emailParams = new EmailParams()
          .setFrom(sentFrom)
          .setTo(recipients)
          .setReplyTo(sentFrom)
          .setSubject('New Enquiry - Pitahaya Labs Contact Form')
          .setHtml(`
            <h1><strong>YOU GOT MAIL</strong></h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
          `);
    
        await mailerSend.email.send(emailParams);
    
        return res.status(200).json({ success: true });
      } catch (error) {
        console.error('Error sending email:', error.message);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
}