import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    // Get data from frontend
    const body = await request.json();

    const { name, email, message ,subject} = body;

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify SMTP connection
    await transporter.verify();

    // Send email
    const info = await transporter.sendMail({
      from: email,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Form Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log("Message sent:", info.messageId);

    return Response.json(
      {
        success: true,
        message: "Email sent successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to send email",
        error: error.message,
      },
      { status: 500 }
    );
  }
}