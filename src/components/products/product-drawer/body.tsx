'use clint'

import Image, { StaticImageData } from 'next/image'
import { ProductType } from '@/interfaces/product'
import DrawerTable from '@/components/products/product-drawer/table';

interface DrawerBodyType {
  img: StaticImageData;
  product: ProductType;
}

export default function DrawerBody({ img, product }: DrawerBodyType) {
  return (
    <section className='flex justify-between pt-4 rounded-b-xl gap-x-4'>
      <div className='shadow-xl rounded-b-lg' style={{ maxHeight: '35rem' }}>
        <div className='rounded-lg'>
          <Image
            className='rounded-t-xl'
            src={img}
            alt='Product image'
            width={300}
            height={48}
            priority
          />
          <div className='flex flex-col py-4 px-4'>
            <span className='bold font-bold text-lg'>{product.colorCodes[0].description}</span>
            <span className='text-lg'>{product.colorCodes[0].currentPrice}</span>
          </div>
        </div>
      </div>
      <div className=''>
        <DrawerTable product={product} />
      </div>
    </section>
  )
}
