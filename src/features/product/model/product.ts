import type { Product } from '@/entities/product/product'

import booster01a from '@/assets/images/booster01a.png'
import booster01b from '@/assets/images/booster01b.png'

export const products: Product[] = [
  {
    id: 'volcanic-fruit-punch',
    name: 'Core Booster',
    flavor: 'Volcanic Fruit Punch',
    price: 49.99,
    description:
      'Unleash your inner beast with our Extreme Energy & Focus Formula. Scientifically formulated with premium ingredients to maximize your workout performance, enhance mental clarity, and push beyond your limits.',
    images: [booster01a, booster01b],
    features: [
      '350mg Caffeine Complex',
      'Beta-Alanine for Endurance',
      'L-Citrulline for Pump',
      'Focus & Clarity Blend',
    ],
  },
  {
    id: 'arctic-blue-razz',
    name: 'Core Booster',
    flavor: 'Arctic Blue Razz',
    price: 54.99,
    description:
      'Experience the chill of extreme performance. Arctic Blue Razz delivers the same powerful formula with a refreshing twist that will fuel your most intense training sessions.',
    images: [booster01a, booster01b],
    features: [
      '350mg Caffeine Complex',
      'Beta-Alanine for Endurance',
      'L-Citrulline for Pump',
      'Zero Sugar Formula',
    ],
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

