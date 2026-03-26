import { motion } from 'framer-motion';

const serviceImages = [
  {
    label: 'Furniture',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  },
  {
    label: 'Junk / Garbage',
    image:
      'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=900&q=80',
  },
  {
    label: 'Appliances',
    image:
      'https://images.unsplash.com/photo-1586208958839-06c17cacdf08?auto=format&fit=crop&w=900&q=80',
  },
  {
    label: 'Pianos',
    image:
      'https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=900&q=80',
  },
  {
    label: 'Hot Tubs',
    image:
      'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=900&q=80',
  },
  {
    label: 'Pallets',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
  },
  {
    label: 'Exercise Equipment',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
  },
  {
    label: 'Construction Debris',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
  },
];

const serviceColumns = [
  {
    title: 'Furniture',
    items: ['Sofas', 'Chairs', 'Tables', 'Dressers', 'Mattresses', 'Bed Frames'],
  },
  {
    title: 'Appliances',
    items: ['Fridges', 'Stoves', 'Washers', 'Dryers', 'Microwaves', 'Dishwashers'],
  },
  {
    title: 'Debris',
    items: ['Wood', 'Drywall', 'Concrete', 'Tiles', 'Roofing', 'Insulation'],
  },
  {
    title: 'Demolition',
    items: ['Sheds', 'Decks', 'Fences', 'Garages', 'Hot Tubs', 'Above Ground Pools'],
  },
  {
    title: 'Miscellaneous',
    items: ['Electronics', 'Exercise Equipment', 'Pianos', 'Tires', 'Pallets', 'Scrap Metal'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesSection() {
  return (
    <section id="services" className="bg-zinc-950 py-20 sm:py-24">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.4em] text-primary">
            What We Take
          </p>
          <h2 className="section-heading">Junk Removal Services</h2>
          <p className="mt-4 text-white/70">
            From single-item pickups to full property cleanouts, we handle the heavy lifting.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceImages.map((item, index) => (
            <motion.div
              key={item.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10"
            >
              <img src={item.image} alt={item.label} className="h-64 w-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-display text-3xl uppercase tracking-wide text-white">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-[2rem] border border-white/10 bg-black/50 p-6 shadow-soft sm:p-8"
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {serviceColumns.map((column) => (
              <div key={column.title}>
                <h3 className="font-display text-3xl uppercase tracking-wide text-primary">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-white/75">
                  {column.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
