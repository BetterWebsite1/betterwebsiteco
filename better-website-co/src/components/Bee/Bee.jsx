import { motion } from 'framer-motion'
import waveImg from '../../assets/bee/bee-wave.webp'
import pointImg from '../../assets/bee/bee-point.webp'
import idleImg from '../../assets/bee/bee-idle.webp'
import lookAroundImg from '../../assets/bee/bee-look-around.webp'
import ideaImg from '../../assets/bee/bee-idea.webp'
import hopImg from '../../assets/bee/bee-hop.webp'
import bowImg from '../../assets/bee/bee-bow.webp'
import exitImg from '../../assets/bee/bee-exit.webp'

// Every pose Bee actually has a real source asset for. Nothing here is faked —
// if a section needs an emotion we don't have an asset for, it doesn't get a pose.
export const BEE_POSES = {
  wave: { src: waveImg, alt: 'Bee waving' },
  point: { src: pointImg, alt: 'Bee pointing' },
  idle: { src: idleImg, alt: 'Bee standing' },
  'look-around': { src: lookAroundImg, alt: 'Bee looking around' },
  idea: { src: ideaImg, alt: 'Bee having an idea' },
  hop: { src: hopImg, alt: 'Bee celebrating' },
  bow: { src: bowImg, alt: 'Bee bowing' },
  exit: { src: exitImg, alt: 'Bee walking off' },
}

const SIZES = {
  sm: 'h-12 w-auto',
  md: 'h-20 w-auto',
  lg: 'h-32 w-auto',
  xl: 'h-48 w-auto',
}

/**
 * Bee — the Better Website Co. brand character.
 * Purposeful, not decorative: only render where Bee's presence adds meaning.
 * Motion is always 150–300ms — nothing loud, nothing that competes with the CTA.
 */
export default function Bee({
  pose = 'idle',
  size = 'md',
  className = '',
  animateIn = true,
  delay = 0,
  once = true,
}) {
  const asset = BEE_POSES[pose] || BEE_POSES.idle

  return (
    <motion.img
      src={asset.src}
      alt={asset.alt}
      initial={animateIn ? { opacity: 0, y: 10, scale: 0.96 } : false}
      whileInView={animateIn ? { opacity: 1, y: 0, scale: 1 } : undefined}
      viewport={animateIn ? { once, margin: '-40px' } : undefined}
      transition={{ duration: 0.25, ease: 'easeOut', delay }}
      className={`${SIZES[size] || SIZES.md} select-none pointer-events-none ${className}`}
      draggable={false}
    />
  )
}
