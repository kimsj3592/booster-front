import { motion } from 'framer-motion'
import { ProductList } from '@/features/product/components/ProductList'
import { products } from '@/features/product/model/product'
import heroImage from '@/assets/images/booster01b.png'

function HeroSection() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-10" />
        <motion.img
          src={heroImage}
          alt="Core Booster Hero"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-wider mb-4">
            <span className="text-white">UNLEASH</span>
            <br />
            <span className="text-gradient">YOUR BEAST</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl text-gray-300 font-body max-w-2xl mx-auto mb-8"
        >
          Extreme Energy & Focus Formula. Scientifically formulated to push your
          limits and dominate every workout.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProducts}
            className="px-8 py-4 bg-accent text-black font-bold text-lg rounded-lg shadow-lg shadow-accent/30 hover:bg-accent-600 transition-colors"
          >
            SHOP NOW
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProducts}
            className="px-8 py-4 border-2 border-white/30 text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-colors"
          >
            VIEW PRODUCTS
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

function ProductsSection() {
  return (
    <section id="products" className="py-20 sm:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-wider text-white mb-4">
            OUR <span className="text-accent">PRODUCTS</span>
          </h2>
          <p className="text-gray-400 font-body max-w-xl mx-auto">
            Premium pre-workout formulas designed for athletes who demand the best.
          </p>
        </motion.div>

        <ProductList products={products} />
      </div>
    </section>
  )
}

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
    </>
  )
}

