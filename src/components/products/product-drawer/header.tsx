import Image from 'next/image'
import { Form, Input, Select, DatePicker } from 'antd'
import dayjs from 'dayjs'
import moment from 'moment'

import product from '@/data/sample-data.json'
import DynamiteLogo from '@/assets/dynamite.svg'

export default function DrawerHeader() {
  const dateFormat = 'MMM D';

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <header className='flex flex-col lg:flex-row justify-start lg:justify-between border rounded-xl p-8'>
      <div className='flex flex-col lg:flex-row lg:items-center gap-x-3'>
        <Image
          src={DynamiteLogo}
          alt='Dynamite Logo'
          width={125}
          height={48}
          priority
        />
        <span className='text-gray-300 hidden lg:block'>|</span>
        <span className='text-gray-500 lg:text-black pt-1 lg:pt-0'>{product.styleCategory}</span>
        <span className='text-gray-300 hidden lg:block'>|</span>
        <span className='text-gray-500 lg:text-black pt-1 lg:pt-0'>{product.styleName}</span>
      </div>
      <div className='flex flex-col lg:flex-row gap-x-3 pt-3 lg:pt-0'>
        <Form.Item
          className='lg:mb-0'
          name='owner'
        >
          <Select
            className='w-full'
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
          className='lg:mb-0'
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
          className='lg:mb-0'
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
          <DatePicker defaultValue={dayjs(moment().format('ll'), dateFormat)} format={dateFormat} />
        </Form.Item>
      </div>
    </header>
  )
}
