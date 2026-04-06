import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, service, location, details } = req.body;

  if (!name || !email || !phone || !service || !location || !details) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    await resend.emails.send({
      from: "Junk Service Muskoka <contact@junkservicemuskoka.com>",
      to: ["contact@junkservicemuskoka.com"],
      reply_to: email,
      subject: `New Quote - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nLocation: ${location}\nDetails: ${details}`
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: "Email failed" });
  }
}
