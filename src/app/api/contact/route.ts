import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    console.log('Creating transporter...');

    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.me.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER, // your full iCloud email
        pass: process.env.EMAIL_PASSWORD // your app-specific password
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "pramod.bhat@modofy.ai",
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    console.log('Attempting to send email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info);

    return NextResponse.json({ 
      message: "Email sent successfully" 
    }, { status: 200 });

  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ 
      error: "Failed to send email",
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
