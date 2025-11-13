import nodemailer from "nodemailer";

export function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

export async function sendContactEmail(payload) {
  const transporter = getTransporter();
  if (!transporter) {
    console.warn("SMTP transport not configured; skipping email send.");
    return;
  }

  const {
    name,
    email,
    phone,
    interest,
    message,
    to = process.env.CONTACT_TO_EMAIL,
    from = process.env.CONTACT_FROM_EMAIL,
  } = payload;

  await transporter.sendMail({
    to: to || process.env.SMTP_USER,
    from,
    subject: `New Akarma inquiry: ${interest || "General"}`,
    replyTo: email,
    text: `Name: ${name}
Email: ${email}
Phone: ${phone || "n/a"}
Interest: ${interest}

Message:
${message}
`,
  });
}
