import React from 'react'
import { Table } from 'antd'
import { ColorCodeType } from '@/interfaces/product'
import { expandedTableColumns } from '@/components/products/product-drawer/columns'

const ExpandedTable: React.FC<{ record: ColorCodeType }> = ({ record }) => (
  <Table
    className='product-inventory-table'
    columns={expandedTableColumns}
    dataSource={record.purchaseOrders}
  />
);

export default ExpandedTable;