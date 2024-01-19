'use client'

import Image from 'next/image'
import { Button, Drawer, Form, Input, Select, DatePicker } from 'antd'
import dayjs from 'dayjs'

import product from '@/data/sample-data.json'
import Cross from '@/assets/cross.svg'
import DynamiteLogo from '@/assets/dynamite.svg'

export default function ProductDrawer({ open, onSetOpen }: any) {
  const dateFormat = 'YYYY/MM/DD';

  const onClose = () => {
    onSetOpen(false);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
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
        <header className='flex justify-between border rounded-xl p-8'>
          <div className='flex flex-row items-center gap-x-3'>
            <Image
              src={DynamiteLogo}
              alt='Dynamite Logo'
              width={125}
              height={48}
              priority
            />
            <span className='text-gray-300'>|</span>
            <span>{product.styleCategory}</span>
            <span className='text-gray-300'>|</span>
            <span>{product.styleName}</span>
          </div>
          <div className='flex flex-row gap-x-3'>
            <Form.Item
              className='mb-0'
              name='owner'
            >
              <Select
                defaultValue='lucy'
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  { value: 'lucy', label: 'Active CCs' },
                  { value: 'jack', label: 'Jack' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                ]}
              />
            </Form.Item>
            <Form.Item
              className='mb-0'
              name='owner'
            >
              <Select
                defaultValue='lucy'
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  { value: 'lucy', label: 'Prj All Doors' },
                  { value: 'jack', label: 'Jack' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                ]}
              />
            </Form.Item>
            <Form.Item
              className='mb-0'
              name='url'
            >
              <Input
                placeholder='All Channels'
              />
            </Form.Item>
            <Form.Item
              className='mb-0'
              name='dateTime'
            >
              <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} />
            </Form.Item>
          </div>
        </header>
      </Form>
    </Drawer>
  )
}
