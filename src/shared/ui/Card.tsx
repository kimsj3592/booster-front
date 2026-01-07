import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

interface CardProps {
  children: ReactNode
  className?: string
  hoverable?: boolean
  onClick?: () => void
}

export function Card({
  children,
  className,
  hoverable = false,
  onClick,
}: CardProps) {
  return (
    <motion.div
      whileHover={hoverable ? { scale: 1.03, y: -4 } : undefined}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      onClick={onClick}
      className={clsx(
        'bg-gradient-to-br from-gray-900 to-gray-950',
        'rounded-2xl overflow-hidden',
        'border border-gray-800/50',
        hoverable && 'cursor-pointer hover:shadow-2xl hover:shadow-accent/10',
        'transition-shadow duration-300',
        className
      )}
    >
      {children}
    </motion.div>
  )
}

