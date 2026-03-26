import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah M.',
    quote:
      'Fast, professional and affordable. They cleared out my entire garage in under 2 hours!',
  },
  {
    name: 'Mike T.',
    quote: 'Best junk removal in Muskoka. Friendly team, great price. Will use again!',
  },
  {
    name: 'Linda K.',
    quote:
      'Super responsive and eco-friendly. Love that they donate usable items. Highly recommend.',
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1 text-primary">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={18} fill="currentColor" />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section id="reviews" className="bg-zinc-950 py-20 sm:py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <div className="mb-4 flex justify-center">
            <Stars />
          </div>
          <h2 className="section-heading">5-Star Reviews</h2>
          <p className="mt-4 text-white/70">
            Homeowners and businesses across Muskoka trust us for fast, friendly cleanup.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="rounded-[2rem] border border-white/10 bg-black/50 p-7 shadow-soft"
            >
              <Stars />
              <p className="mt-5 text-lg leading-8 text-white/85">“{review.quote}”</p>
              <p className="mt-6 font-semibold uppercase tracking-[0.25em] text-white/55">
                {review.name}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
