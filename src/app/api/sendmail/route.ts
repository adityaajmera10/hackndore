import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, mobileNumber, message } = await req.json();

    if (!firstName || !lastName || !email || !mobileNumber || !message) {
      return NextResponse.json({ error: 'First name, last name, email, mobile number, and message are required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'birlapranjal460@gmail.com',
        pass: 'aqkl ydaw isuc kkzj',
      },
    });

    const mailOptions = {
      from: 'birlapranjal460@gmail.com',
      to: 'birlapranjal420@gmail.com',
      subject: 'Contact Form Submission from Hack\'ndore',
      text: `
        New contact form submission received:\n\n
        First Name: ${firstName}\n
        Last Name: ${lastName}\n
        Email: ${email}\n
        Mobile Number: ${mobileNumber}\n
        Message: ${message}\n
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Contact form submitted successfully'}, { status: 201 });
  } catch (error: any) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json({ error: 'Error occurred while submitting the form' }, { status: 500 });
  }
}
