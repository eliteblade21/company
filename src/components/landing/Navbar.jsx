import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#quote' },
];

function NavItems({ onClick }) {
  return navLinks.map((link) => (
    <a
      key={link.href}
      href={link.href}
      onClick={onClick}
      className="text-sm font-medium uppercase tracking-wide text-white/85 transition hover:text-primary"
    >
      {link.label}
    </a>
  ));
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 bg-primary px-4 py-2 text-center text-xs font-semibold text-white sm:text-sm">
        We take everything from household goods to above ground pools. Fast, affordable,
        and eco-friendly junk removal services. | Call (705) 707-1847
      </div>

      <header className="fixed inset-x-0 top-[40px] z-40 border-b border-white/10 bg-black/95 backdrop-blur md:top-[36px]">
        <div className="section-shell flex h-20 items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Junk Services Muskoka logo"
              className="h-12 w-12 rounded-full border border-white/10 object-cover"
            />
            <div>
              <p className="font-display text-2xl uppercase tracking-wider text-white">
                Junk Services Muskoka
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-white/55">Fast. Local. Clean.</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            <NavItems />
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:17057071847"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-primary hover:text-primary"
            >
              <Phone size={16} />
              705 707-1847
            </a>
            <a href="#quote" className="green-pill">
              FREE QUOTE!
            </a>
          </div>

          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setIsOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation overlay"
              className="fixed inset-0 z-50 bg-black/60 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-[60] flex h-full w-[85%] max-w-sm flex-col bg-zinc-950 p-6 shadow-2xl lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="font-display text-3xl tracking-wider text-white">Menu</span>
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                <NavItems onClick={() => setIsOpen(false)} />
              </div>

              <div className="mt-auto space-y-4 pt-8">
                <a
                  href="tel:17057071847"
                  className="flex items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-3 text-sm font-semibold text-white"
                >
                  <Phone size={16} />
                  705 707-1847
                </a>
                <a href="#quote" onClick={() => setIsOpen(false)} className="green-pill flex w-full">
                  FREE QUOTE!
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
