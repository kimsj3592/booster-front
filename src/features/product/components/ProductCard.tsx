import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Card } from '@/shared/ui/Card'

interface ProductCardProps {
  id: string
  imageSrc: string
  name: string
  flavor: string
  price: number
}

export function ProductCard({
  id,
  imageSrc,
  name,
  flavor,
  price,
}: ProductCardProps) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/product/${id}`)
  }

  return (
    <Card hoverable onClick={handleClick}>
      <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900">
        <motion.img
          src={imageSrc}
          alt={`${name} - ${flavor}`}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold tracking-wide text-white mb-1">
          {name}
        </h3>
        <p className="text-accent text-sm font-medium mb-3">{flavor}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white">
            ${price.toFixed(2)}
          </span>
          <span className="text-xs text-gray-400 font-body">
            View Details →
          </span>
        </div>
      </div>
    </Card>
  )
}

