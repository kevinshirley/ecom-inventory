'use client'

import { useState } from 'react'
import Image from 'next/image'
import ProductDrawer from './product-drawer'

export default function ProductCard({ img }: any) {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  return (
    <>
      <div
        className='flex justify-center'
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
      />
    </>
  )
}
