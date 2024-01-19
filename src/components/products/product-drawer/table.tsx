import React from 'react'
import { Table } from 'antd'
import { isNil, isEmpty } from 'lodash'
import { ProductType, ColorCodeType } from '@/interfaces/product'
import { columns } from '@/components/products/product-drawer/columns'
import ExpandedTable from '@/components/products/product-drawer/expanded-table'

const ProductDrawerTable: React.FC<{ product: ProductType }> = ({ product }) => (
  <Table
    className='product-inventory-table'
    columns={columns}
    expandable={{
      expandedRowRender: (record: ColorCodeType) => <ExpandedTable record={record} />,
      rowExpandable: (record: ColorCodeType) => !isNil(record.purchaseOrders) && !isEmpty(record.purchaseOrders),
    }}
    dataSource={product.colorCodes}
  />
);

export default ProductDrawerTable;