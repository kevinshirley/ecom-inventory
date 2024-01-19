import moment from 'moment'

interface DataType {
  key: React.Key;
  title: string;
  dataIndex: string;
  sorter?: (a: any, b: any) => number;
  render?: any;
}

export const columns: DataType[] = [
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
    render: (date: string) => (
      <span>{moment(date).format('ll')}</span>
    )
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

export const expandedTableColumns = [
  {
    title: 'PO #',
    dataIndex: 'purchaseOrderNumber',
    key: 'purchaseOrderNumber',
  },
  {
    title: 'MOT',
    dataIndex: 'methodOfTransport',
    key: 'methodOfTransport',
  },
  {
    title: 'PO Arrival Date to DC',
    dataIndex: 'arrivalDate',
    key: 'arrivalDate',
    render: (date: string) => (
      <span>{moment(date).format('ll')}</span>
    )
  },
  {
    title: 'Quantity Ordered',
    dataIndex: 'quantityOrdered',
    key: 'quantityOrdered',
  },
];