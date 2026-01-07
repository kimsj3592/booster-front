import { motion } from 'framer-motion'
import type { Product } from '@/entities/product/product'
import { ProductCard } from './ProductCard'

interface ProductListProps {
  products: Product[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export function ProductList({ products }: ProductListProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
    >
      {products.map((product) => (
        <motion.div key={product.id} variants={itemVariants}>
          <ProductCard
            id={product.id}
            imageSrc={product.images[0]}
            name={product.name}
            flavor={product.flavor}
            price={product.price}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}

