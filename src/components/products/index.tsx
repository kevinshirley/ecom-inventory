import ProductCard from '@/components/products/product-card'
import { ProductType } from '@/interfaces/product'

import data from '@/data/sample-data.json'

export default function Products() {
  return (
    <section className='grid gap-4 grid-cols-1 lg:grid-cols-4 py-8 lg:px-8 px-4'>
      {data.products.map((product: ProductType, index: number) => (
        <ProductCard
          key={index}
          product={product}
        />
      ))}
    </section>
  )
}
