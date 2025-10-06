import nodemailer from "nodemailer";

function isPrivateIp(ip) {
  if (!ip) return false;
  ip = ip.replace("::ffff:", "");
  return /^(127\.0\.0\.1|::1|10\.|192\.168\.|172\.(1[6-9]|2[0-9]|3[0-1]))/.test(ip);
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, budget, message, services, formType, pageUrl } = body;

    let userIp = body.userIp || "";

    if (!userIp) {
      const forwarded = req.headers?.get?.("x-forwarded-for") || req.headers?.get?.("x-real-ip") || "";
      if (forwarded) userIp = forwarded.split(",")[0].trim();
    }

    if (!userIp && req.socket && req.socket.remoteAddress) {
      userIp = req.socket.remoteAddress;
    }

    if (userIp?.startsWith("::ffff:")) userIp = userIp.replace("::ffff:", "");

    let city = "Unknown City";
    let country = "Unknown Country";

    try {
      const locationRes = await fetch(`https://ipapi.co/${userIp}/json/`);
      const locationData = await locationRes.json();

      if (locationData && (locationData.city || locationData.country_name)) {
        city = locationData.city || city;
        country = locationData.country_name || country;
      } else {
        const fallbackRes = await fetch(`https://ipwho.is/${userIp}`);
        const fallbackData = await fallbackRes.json();
        if (fallbackData && fallbackData.success) {
          city = fallbackData.city || city;
          country = fallbackData.country || country;
        }
      }
    } catch (e) {
      console.error("Location fetch failed:", e);
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      subject: "New Form Submission | Book Publishing Website",
      html: `
        <h2>New Form Submission Received</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Budget:</b> ${budget || "Not specified"}</p>
        <p><b>Services:</b> ${services?.length ? services.join(", ") : "Not specified"}</p>
        <p><b>Message:</b> ${message}</p>
        <hr/>
        <p><b>Form Type:</b> ${formType || "Unknown"}</p>
        <p><b>Page URL:</b> ${pageUrl || "Unknown"}</p>
        <p><b>IP Address:</b> ${userIp}</p>
        <p><b>Location:</b> ${city}, ${country}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("❌ Email sending failed:", err);
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}