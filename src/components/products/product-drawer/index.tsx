'use client'

import Image from 'next/image'
import { Button, Drawer, Form } from 'antd'

import Cross from '@/assets/cross.svg'
import ProductDrawerHeader from '@/components/products/product-drawer/header'
import ProductDrawerBody from '@/components/products/product-drawer/body'
import { ProductType } from '@/interfaces/product';

interface ProductDrawerType {
  open: boolean;
  onSetOpen: (bool: boolean) => void;
  product: ProductType;
}

export default function ProductDrawer({ open, onSetOpen, product }: ProductDrawerType) {
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
        <ProductDrawerHeader product={product} />
        <ProductDrawerBody product={product} />
      </Form>
    </Drawer>
  )
}
