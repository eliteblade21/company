import { motion } from 'framer-motion';
import { Clock3, Heart, Recycle, Shield } from 'lucide-react';

const features = [
  {
    icon: Clock3,
    title: 'Fast Response',
    description: 'Quick replies, clear scheduling, and dependable arrival times.',
  },
  {
    icon: Recycle,
    title: 'Eco-Friendly',
    description: 'We sort, donate, recycle, and dispose responsibly whenever possible.',
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'Professional service with the protection and care your property deserves.',
  },
  {
    icon: Heart,
    title: 'Community First',
    description: 'Built local, focused local, and proud to help keep Muskoka clean.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-black py-20 sm:py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[2rem] border border-white/10 shadow-soft"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
            alt="Team working together"
            className="h-full min-h-[420px] w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="green-pill mb-5">About Us</span>
          <h2 className="section-heading">WHY CHOOSE JSM?</h2>
          <p className="mt-5 text-lg leading-8 text-white/75">
            Junk Services Muskoka is a brand new local startup with a simple mission — make
            Muskoka a cleaner, better place to live.
          </p>
          <p className="mt-4 text-lg leading-8 text-white/75">
            As a young company, we're not just here to haul junk — we're here to build
            relationships, support our neighbours, and give back to the community we call home.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-zinc-950/70 p-5"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-primary/15 p-3 text-primary">
                  <Icon size={24} />
                </div>
                <h3 className="font-display text-3xl uppercase tracking-wide text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/70">{description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
