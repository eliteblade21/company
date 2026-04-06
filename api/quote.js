import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, phone, email, address, junk } = req.body;

  if (!name || !phone || !email || !junk) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    await resend.emails.send({
      from: "<jaccob.w@junkservicemuskoka.com>",
      to: ["contact@junkservicemuskoka.com"],
      reply_to: email,
      subject: `Quote Request - Junk Removal Muskoka - ${name}`,
      text: `Name: ${name}
Phone: ${phone}
Email: ${email}
Address: ${address || ""}

What needs to go:
${junk}`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Email failed" });
  }
}
