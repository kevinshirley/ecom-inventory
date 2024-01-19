'use client'

import Image from 'next/image'
import { Button, Drawer, Form } from 'antd'
import { StaticImageData } from 'next/image'

import product from '@/data/sample-data.json'
import Cross from '@/assets/cross.svg'
import ProductDrawerHeader from '@/components/products/product-drawer/header'
import ProductDrawerBody from '@/components/products/product-drawer/body'
import { ProductType } from '@/interfaces/product';

interface ProductDrawerType {
  open: boolean;
  onSetOpen: (bool: boolean) => void;
  img: StaticImageData;
  product: ProductType;
}

export default function ProductDrawer({ open, onSetOpen, img }: ProductDrawerType) {
  const onClose = () => {
    onSetOpen(false);
  };

  return (
    <Drawer
      title={product.styleNumber}
      placement={'bottom'}
      closable={false}
      onClose={onClose}
      open={open}
      key={'bottom'}
      extra={
        <>
          <Button className='shadow-none' type='primary' onClick={onClose}>
            <Image
              src={Cross}
              alt='Cross icon'
              width={18}
              height={18}
              priority
            />
          </Button>
        </>
      }
      className='text-gray-900'
    >
      <Form layout='vertical'>
        <ProductDrawerHeader />
        <ProductDrawerBody
          img={img}
          product={product}
        />
      </Form>
    </Drawer>
  )
}
