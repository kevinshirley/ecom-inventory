import ProductCard from '@/components/products/product-card'
import data from '@/data/sample-data.json'
import productImage1 from '@/assets/product-image-1.webp'
import productImage2 from '@/assets/product-image-2.jpeg'
import productImage3 from '@/assets/product-image-3.webp'
import productImage4 from '@/assets/product-image-4.jpeg'
import productImage5 from '@/assets/product-image-5.jpeg'
import productImage6 from '@/assets/product-image-6.jpeg'

export default function Products() {
  const colorCodes = data.colorCodes;
  console.log({ colorCodes });

  return (
    <section className='grid gap-4 grid-cols-4 grid-rows-3 py-8 px-8'>
      <ProductCard
        img={productImage1}
      />
      <ProductCard
        img={productImage2}
      />
      <ProductCard
        img={productImage3}
      />
      <ProductCard
        img={productImage4}
      />
      <ProductCard
        img={productImage5}
      />
      <ProductCard
        img={productImage6}
      />
    </section>
  )
}
