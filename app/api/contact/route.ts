import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validation
    if (!name || !email || !message || !subject) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com", // SMTP server
      port: 465, // 465 for secure, 587 for TLS
      secure: true, // true for port 465, false for 587
      auth: {
        user: process.env.NEXT_PUBLIC_MAIL_USER,
        pass: process.env.NEXT_PUBLIC_MAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: `"Shri Padmavathi Consultancy ContactUs" <${process.env.NEXT_PUBLIC_MAIL_USER}>`,
      replyTo: email,
      to: "aravind@shripadmavathi.com",Office Hours
      subject: `New Contact Query - ${name}`,
      html: `
        <h2>New Contact Query</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Contact Us submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
