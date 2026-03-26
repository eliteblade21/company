const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Get a Quote', href: '#quote' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Junk Services Muskoka logo"
              className="h-14 w-14 rounded-full border border-white/10 object-cover"
            />
            <div>
              <p className="font-display text-3xl uppercase tracking-wide text-white">
                Junk Services Muskoka
              </p>
              <p className="text-sm text-white/60">Fast, affordable, and eco-friendly service.</p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">
            Local junk removal for homes, cottages, rentals, and job sites across Muskoka.
          </p>
        </div>

        <div>
          <h3 className="font-display text-3xl uppercase tracking-wide text-white">Quick Links</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/75">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-primary">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-3xl uppercase tracking-wide text-white">Contact</h3>
          <div className="mt-4 space-y-3 text-sm text-white/75">
            <a href="tel:17057071847" className="block hover:text-primary">
              (705) 707-1847
            </a>
            <a href="mailto:junkservicesmuskoka@gmail.com" className="block hover:text-primary">
              junkservicesmuskoka@gmail.com
            </a>
            <p>Muskoka Area</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-white/50">
        © 2024 Junk Services Muskoka. All rights reserved.
      </div>
    </footer>
  );
}
