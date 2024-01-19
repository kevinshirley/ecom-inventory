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
    <section className='pt-4 rounded-b-xl flex justify-center'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-x-4'>
        <div className='max-w-xs mb-6' style={{ maxHeight: '35rem' }}>
          <div className='rounded-lg shadow-xl rounded-b-lg'>
            <Image
              className='rounded-t-xl min-w-xs'
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
        <div className='max-w-xs md:max-w-lg lg:max-w-full overflow-x-auto'>
          <DrawerTable product={product} />
        </div>
      </div>
    </section>
  )
}
