import React from 'react'
import { Table } from 'antd'
import { isNil, isEmpty } from 'lodash'
import { ProductType } from '@/interfaces/product'
import moment from 'moment'

interface DataType {
  key: React.Key;
  title: string;
  dataIndex: string;
  sorter?: (a: any, b: any) => number;
  render?: any;
}

const columns: DataType[] = [
  {
    title: 'Color Code',
    dataIndex: 'colorCodeId',
    key: 'colorCodeId',
  },
  { title: 'Style Code', dataIndex: 'styleCode', key: 'styleCode' },
  { title: 'Color Code Description', dataIndex: 'description', key: 'description' },
  {
    title: 'Current Price',
    dataIndex: 'currentPrice',
    key: 'currentPrice',
    sorter: (a: any, b: any) => a.currentPrice - b.currentPrice,
  },
  { title: 'Inventory OH', dataIndex: 'inventoryOnHand', key: 'inventoryOnHand' },
  { title: 'WTD Unit Sales', dataIndex: 'weekToDateUnitSales', key: 'weekToDateUnitSales' },
  {
    title: 'First Sale Date',
    dataIndex: 'firstSaleDate',
    key: 'firstSaleDate',
    render: (date: any) => {
      console.log({ date });
      return (
        <span>{moment(date).format('ll')}</span>
      )
    }
  },
  {
    title: 'Store Count',
    dataIndex: 'storeCount',
    key: 'storeCount',
    render: (storeCount: { active: number, intended: number }) => (
      <>
        <span className='text-blue-500'>{storeCount.active}</span>
        <span> / </span>
        <span className='text-pink-500'>{storeCount.intended}</span>
      </>
    )
  },
];

const ProductDrawerTable: React.FC<{ product: ProductType }> = ({ product }) => (
  <Table
    className='product-inventory-table'
    columns={columns}
    expandable={{
      expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.description}</p>,
      rowExpandable: (record) => !isNil(record.purchaseOrders) && !isEmpty(record.purchaseOrders),
    }}
    dataSource={product.colorCodes}
  />
);

export default ProductDrawerTable;