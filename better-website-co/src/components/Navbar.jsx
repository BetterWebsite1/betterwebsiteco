import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import Button from './Button'

const LINKS = [
  { href: '#transformations', label: 'Work' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'About' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: scrolled ? 'color-mix(in srgb, var(--bg) 88%, transparent)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div className="container-bw flex items-center justify-between h-[76px]">
        <a href="#top" className="flex items-center gap-3">
          <Logo className="h-8 w-8 rounded-md" />
          <span className="font-display text-[15px] tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Better Website Co.
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm"
              style={{ color: 'var(--text-secondary)' }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button href="#inquiry" variant="primary">
            Book a Free Strategy Call
          </Button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="h-9 w-9 flex items-center justify-center rounded-md"
            style={{ border: '1px solid var(--border)' }}
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5 w-4">
              <span
                className="h-[1.5px] w-full block transition-transform"
                style={{
                  background: 'var(--text-primary)',
                  transform: open ? 'translateY(4.5px) rotate(45deg)' : 'none',
                }}
              />
              <span
                className="h-[1.5px] w-full block transition-opacity"
                style={{ background: 'var(--text-primary)', opacity: open ? 0 : 1 }}
              />
              <span
                className="h-[1.5px] w-full block transition-transform"
                style={{
                  background: 'var(--text-primary)',
                  transform: open ? 'translateY(-4.5px) rotate(-45deg)' : 'none',
                }}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden overflow-hidden"
            style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg)' }}
          >
            <div className="container-bw py-6 flex flex-col gap-5">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {l.label}
                </a>
              ))}
              <Button href="#inquiry" variant="primary" onClick={() => setOpen(false)}>
                Book a Free Strategy Call
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
