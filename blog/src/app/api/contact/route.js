import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const body = await req.json()
    const { email, message } = body

    if (!email || !message) {
      return NextResponse.json({ error: 'Email and message are required' }, { status: 400 })
    }

    // Create reusable transporter using your email provider
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MY_EMAIL, // your Gmail address
        pass: process.env.APP_PASSWORD, // your Gmail app password (not your Gmail login password)
      },
    })
    console.log(email)

    // Send mail with defined transport object
    await transporter.sendMail({
      from: email,
      to: process.env.MY_EMAIL, // your receiving email address
      subject: 'New Message from Contact Form',
      text: message,
      html: `<p><strong>From:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    })

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
