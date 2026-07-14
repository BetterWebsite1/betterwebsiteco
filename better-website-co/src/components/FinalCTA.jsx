import { motion } from 'framer-motion'
import Button from './Button'

export default function FinalCTA() {
  return (
    <section className="py-32 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="container-bw text-center max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl md:text-5xl leading-tight mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          Your next customer is already online.
        </motion.h2>
        <p className="mb-10" style={{ color: 'var(--text-secondary)' }}>
          Let's build the website they'll remember.
        </p>
        <Button href="#inquiry" variant="primary">
          Book a Free Strategy Call
        </Button>
      </div>
    </section>
  )
}
