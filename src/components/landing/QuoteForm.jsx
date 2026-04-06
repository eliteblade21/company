import { useState } from "react";

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    details: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Quote request sent!");
        setForm({
          name: "",
          email: "",
          phone: "",
          service: "",
          location: "",
          details: "",
        });
      } else {
        alert(data.error || "Failed to send.");
      }
    } catch (err) {
      alert("Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
      <input name="service" placeholder="Service Needed" value={form.service} onChange={handleChange} required />
      <input name="location" placeholder="Location" value={form.location} onChange={handleChange} required />
      <textarea name="details" placeholder="Details" value={form.details} onChange={handleChange} required />
      <button type="submit">{loading ? "Sending..." : "Send Request"}</button>
    </form>
  );
}
