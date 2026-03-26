import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-black"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/truck.png')" }}
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="section-shell relative z-10 flex min-h-screen flex-col items-start justify-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.5em] text-white/60">
            Local Muskoka Junk Removal
          </p>
          <h1 className="font-display text-6xl uppercase leading-[0.9] tracking-wide text-white sm:text-7xl md:text-8xl lg:text-[9rem]">
            JUNK SERVICES
            <br />
            <span className="text-primary">MUSKOKA</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            We take everything from household goods to above ground pools. Fast,
            affordable, and eco-friendly junk removal services.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a href="#quote" className="green-pill text-base sm:px-8 sm:py-4">
              GET A FREE QUOTE!
            </a>
            <a href="tel:17057071847" className="text-sm font-semibold text-white underline-offset-4 hover:underline">
              or call (705) 707-1847
            </a>
          </div>
        </motion.div>

        <motion.a
          href="#services"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          aria-label="Scroll down to services"
        >
          <ChevronDown size={36} />
        </motion.a>
      </div>
    </section>
  );
}
