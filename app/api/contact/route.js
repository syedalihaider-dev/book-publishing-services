import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, budget, message, services } = body;

    // transport setup
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // multiple emails (comma separated in .env)
    const recipients = process.env.SMTP_TO.split(",").map(email => email.trim());

    // send email
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: recipients,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Budget:</b> ${budget || "N/A"}</p>
        <p><b>Services:</b> ${services?.length ? services.join(", ") : "N/A"}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Email sending failed:", err);
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}
