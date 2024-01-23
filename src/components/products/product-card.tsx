'use client'

import { useState } from 'react'
import Image from 'next/image'
import ProductDrawer from './product-drawer'
import { ProductType } from '@/interfaces/product'
import { useAppContext } from '@/context/app-context'

interface ProductCardType {
  product: ProductType;
}

export default function ProductCard({ product }: ProductCardType) {
  const [open, setOpen] = useState(false);
  const { setSelectedColorCode } = useAppContext();

  const showDrawer = () => {
    setOpen(true);
    setSelectedColorCode(product.colorCodes[0])
  };

  return (
    <div className='relative'>
      <div
        className='flex justify-center cursor-pointer product-card-container'
        onClick={showDrawer}
      >
        <div>
          <Image
            src={product.styleImageUrl}
            alt='Product image'
            width={400}
            height={48}
            priority
          />
        </div>
      </div>
      <ProductDrawer
        open={open}
        onSetOpen={setOpen}
        product={product}
      />
    </div>
  )
}
