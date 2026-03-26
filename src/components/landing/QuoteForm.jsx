import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const initialForm = {
  fullName: '',
  phone: '',
  email: '',
  junk: '',
  source: 'Google',
};

const contactItems = [
  { icon: Phone, label: 'Phone', value: '(705) 707-1847', href: 'tel:17057071847' },
  {
    icon: Mail,
    label: 'Email',
    value: 'junkservicesmuskoka@gmail.com',
    href: 'mailto:junkservicesmuskoka@gmail.com',
  },
  { icon: MapPin, label: 'Service Area', value: 'Muskoka Area' },
];

export default function QuoteForm() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="quote" className="bg-black py-20 sm:py-24">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-8"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-primary">
            Contact Us
          </p>
          <h2 className="section-heading">Get a Free Quote</h2>
          <p className="mt-4 text-white/70">
            Tell us what needs to go and we’ll get back to you with a fast, no-obligation quote.
          </p>

          <div className="mt-8 space-y-4">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4 rounded-2xl border border-white/10 p-4">
                <div className="rounded-2xl bg-primary/15 p-3 text-primary">
                  <Icon size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/45">
                    {label}
                  </p>
                  {href ? (
                    <a href={href} className="mt-1 block text-base text-white hover:text-primary">
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1 text-base text-white">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="rounded-[2rem] border border-white/10 bg-zinc-950/60 p-8"
        >
          {submitted ? (
            <div className="flex h-full min-h-[420px] flex-col items-start justify-center rounded-[1.5rem] border border-primary/25 bg-primary/10 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary">
                Request Sent
              </p>
              <h3 className="mt-4 font-display text-5xl uppercase tracking-wide text-white">
                Thanks! We’ll Be In Touch.
              </h3>
              <p className="mt-4 max-w-xl text-white/75">
                We received your request and will follow up soon with the next steps for your
                junk removal quote.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div>
                <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-white/80">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-primary"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white/80">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="junk" className="mb-2 block text-sm font-medium text-white/80">
                  Describe your junk
                </label>
                <textarea
                  id="junk"
                  name="junk"
                  rows="6"
                  value={formData.junk}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="source" className="mb-2 block text-sm font-medium text-white/80">
                  How did you hear about us
                </label>
                <select
                  id="source"
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-primary"
                >
                  <option>Google</option>
                  <option>Facebook</option>
                  <option>Word of Mouth</option>
                  <option>Other</option>
                </select>
              </div>

              <button type="submit" className="green-pill mt-2 w-full sm:w-fit">
                SEND MY REQUEST
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
