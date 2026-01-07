import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-red-500 flex items-center justify-center">
              <span className="text-black font-bold text-xl">C</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold tracking-wider">
              CORE <span className="text-accent">BOOSTER</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-accent transition-colors"
            >
              Home
            </Link>
            <Link
              to="/#products"
              className="text-gray-300 hover:text-accent transition-colors"
            >
              Products
            </Link>
          </nav>

          <Link
            to="/#products"
            className="px-4 py-2 bg-accent text-black font-semibold rounded-lg hover:bg-accent-600 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </motion.header>
  )
}

