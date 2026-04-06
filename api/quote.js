const { Resend } = require("resend");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, phone, service, location, details } = req.body || {};

    const cleaned = {
      name: String(name || "").trim(),
      email: String(email || "").trim(),
      phone: String(phone || "").trim(),
      service: String(service || "").trim(),
      location: String(location || "").trim(),
      details: String(details || "").trim(),
    };

    if (
      !cleaned.name ||
      !cleaned.email ||
      !cleaned.phone ||
      !cleaned.service ||
      !cleaned.location ||
      !cleaned.details
    ) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    const { error } = await resend.emails.send({
      from: "Junk Service Muskoka <contact@junkservicemuskoka.com>",
      to: ["contact@junkservicemuskoka.com"],
      replyTo: cleaned.email,
      subject: `New Quote Request - ${cleaned.name}`,
      text: `New quote request\n\nName: ${cleaned.name}\nEmail: ${cleaned.email}\nPhone: ${cleaned.phone}\nService: ${cleaned.service}\nLocation: ${cleaned.location}\n\nDetails:\n${cleaned.details}`,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6;">
          <h2>New Quote Request</h2>
          <p><strong>Name:</strong> ${cleaned.name}</p>
          <p><strong>Email:</strong> ${cleaned.email}</p>
          <p><strong>Phone:</strong> ${cleaned.phone}</p>
          <p><strong>Service:</strong> ${cleaned.service}</p>
          <p><strong>Location:</strong> ${cleaned.location}</p>
          <p><strong>Details:</strong><br>${cleaned.details.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ error: "Failed to send quote request." });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({ error: "Something went wrong." });
  }
};
