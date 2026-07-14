import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects, portfolioExample } from '../data/projects'
import CaseStudy from './CaseStudy'
import Bee from './Bee/Bee'

function TransformationCard({ project, index, onOpen }) {
  const flagship = index === 0

  return (
    <motion.button
      onClick={() => onOpen(project)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -3 }}
      className={`group w-full text-left rounded-2xl border overflow-hidden transition-colors ${
        flagship ? 'md:p-12 p-8' : 'p-8 md:p-10'
      }`}
      style={{ borderColor: 'var(--border)', background: 'var(--card)' }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--border-strong)')}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <p className="eyebrow">{project.industry}</p>
            {flagship && (
              <span
                className="text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-full"
                style={{ background: 'var(--accent)', color: 'var(--accent-text)' }}
              >
                Flagship
              </span>
            )}
          </div>
          <h3
            className={`font-display font-medium ${flagship ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'}`}
            style={{ color: 'var(--text-primary)' }}
          >
            {project.name}
          </h3>
          <p className={`mt-3 max-w-xl ${flagship ? 'text-base' : 'text-sm'}`} style={{ color: 'var(--text-secondary)' }}>
            {project.problem}
          </p>
        </div>
        <span
          className="shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-sm transition-transform group-hover:translate-x-1"
          style={{ borderColor: 'var(--border-strong)', color: 'var(--text-primary)' }}
        >
          ↗
        </span>
      </div>

      {project.caseStudy && (
        <p
          className="mt-6 text-sm font-medium underline underline-offset-4 inline-block"
          style={{ color: 'var(--accent)' }}
        >
          Read the case study
        </p>
      )}
    </motion.button>
  )
}

export default function Transformations() {
  const [activeStudy, setActiveStudy] = useState(null)

  return (
    <section id="transformations" className="py-24 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="container-bw">
        <div className="max-w-xl mb-14 flex items-start gap-5">
          <Bee size="sm" className="rotate-90 shrink-0 mt-1 hidden sm:block" />
          <div>
            <p className="eyebrow mb-4">Not portfolio. Transformations.</p>
            <h2 className="font-display text-3xl md:text-4xl" style={{ color: 'var(--text-primary)' }}>
              Website Transformations
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {projects.map((p, i) => (
            <TransformationCard
              key={p.id}
              project={p}
              index={i}
              onOpen={(project) => project.caseStudy && setActiveStudy(project.caseStudy)}
            />
          ))}
        </div>

        <motion.a
          href={`https://${portfolioExample.url}`}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
          className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 rounded-2xl border p-8"
          style={{ borderColor: 'var(--border)', background: 'transparent' }}
        >
          <div className="flex items-center gap-6">
            <img
              src={portfolioExample.heroImageDark}
              alt={`${portfolioExample.name} live site`}
              className="hidden sm:block h-24 w-16 object-cover object-top rounded-lg border shrink-0"
              style={{ borderColor: 'var(--border)' }}
            />
            <div>
              <p className="eyebrow mb-2">Also built — a personal brand example</p>
              <p className="font-display text-xl mb-1" style={{ color: 'var(--text-primary)' }}>
                {portfolioExample.name}
              </p>
              <p className="text-sm max-w-lg" style={{ color: 'var(--text-secondary)' }}>
                {portfolioExample.description}
              </p>
            </div>
          </div>
          <span
            className="shrink-0 text-sm font-medium underline underline-offset-4"
            style={{ color: 'var(--accent)' }}
          >
            View site ↗
          </span>
        </motion.a>
      </div>

      <CaseStudy study={activeStudy} onClose={() => setActiveStudy(null)} />
    </section>
  )
}
