import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ProductDetail } from '@/features/product/components/ProductDetail'
import { getProductById } from '@/features/product/model/product'

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const product = id ? getProductById(id) : undefined

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-400 font-body mb-8">
            The product you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-accent text-black font-semibold rounded-lg hover:bg-accent-600 transition-colors"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-black pt-24 sm:pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 font-body"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Products
        </motion.button>

        <ProductDetail product={product} />
      </div>
    </main>
  )
}

