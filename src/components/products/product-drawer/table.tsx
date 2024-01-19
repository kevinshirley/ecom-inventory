import React from 'react'
import { Table } from 'antd'
import { isNil, isEmpty } from 'lodash'
import { ProductType } from '@/interfaces/product'

interface DataType {
  key: React.Key;
  title: string;
  dataIndex: string;
  sorter?: (a: any, b: any) => number;
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
  { title: 'First Sale Date', dataIndex: 'firstSaleDate', key: 'firstSaleDate' },
  // { title: 'F-Unit Sales', dataIndex: '', key: 'x' },
  // { title: 'F-UPAS', dataIndex: '', key: 'x' },
  // { title: 'F-Inventory OH', dataIndex: '', key: 'x' },
  // { title: 'F-WOS', dataIndex: '', key: 'x' },
  { title: 'Store Count', dataIndex: '', key: 'x' },
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