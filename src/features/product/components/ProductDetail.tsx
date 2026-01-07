import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Product } from '@/entities/product/product'
import { Button } from '@/shared/ui/Button'

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleBuyNow = () => {
    // TODO: 구매 링크 또는 장바구니 기능 구현
    console.log('Buy Now clicked for:', product.id)
  }

  const handleImageSelect = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Image Gallery */}
      <div className="space-y-4">
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={product.images[currentImageIndex]}
              alt={`${product.name} - ${product.flavor}`}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex gap-3">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleImageSelect(index)}
              className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                currentImageIndex === index
                  ? 'border-accent shadow-lg shadow-accent/25'
                  : 'border-gray-700 hover:border-gray-500'
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col"
      >
        <div className="mb-6">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-wider text-white mb-2">
            {product.name}
          </h1>
          <p className="text-xl text-accent font-semibold">{product.flavor}</p>
        </div>

        <div className="mb-6">
          <span className="text-4xl font-bold text-white">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <p className="text-gray-300 font-body leading-relaxed mb-8">
          {product.description}
        </p>

        {/* Features */}
        {product.features && product.features.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-bold tracking-wide text-white mb-4">
              KEY FEATURES
            </h3>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 text-gray-300 font-body"
                >
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-auto space-y-4">
          <Button size="lg" fullWidth onClick={handleBuyNow}>
            BUY NOW
          </Button>
          <p className="text-center text-gray-500 text-sm font-body">
            Free shipping on orders over $50
          </p>
        </div>
      </motion.div>
    </div>
  )
}

