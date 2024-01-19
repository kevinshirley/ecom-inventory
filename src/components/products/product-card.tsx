'use client'

import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import ProductDrawer from './product-drawer'
import { ProductType } from '@/interfaces/product';

interface ProductCardType {
  img: StaticImageData;
  product: ProductType;
}

export default function ProductCard({ img, product }: ProductCardType) {
  console.log({ img })
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  return (
    <>
      <div
        className='flex justify-center cursor-pointer'
        onClick={showDrawer}
      >
        <div>
          <Image
            src={img}
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
        img={img}
        product={product}
      />
    </>
  )
}
