/* eslint-disable @next/next/no-img-element */
import moment from 'moment'
import { ColorCodeType } from '@/interfaces/product'
import { useAppContext } from '@/context/app-context'

interface DataType {
  key: React.Key;
  title: string;
  dataIndex: string;
  sorter?: (a: any, b: any) => number;
  render?: any;
}

const DrawerProductImage = ({
  colorCodeId,
  record,
}: { colorCodeId: string, record: ColorCodeType }) => {
  const { setSelectedColorCode } = useAppContext();

  return (
    <span
      className='text-blue-400 cursor-pointer'
      onClick={() => setSelectedColorCode(record)}
    >
      {colorCodeId}
    </span>
  )
}

export const columns: DataType[] = [
  {
    title: 'Color Code',
    dataIndex: 'colorCodeId',
    key: 'colorCodeId',
    render: (colorCodeId: string, record: ColorCodeType) => {
      return (
        <span className='flex flex-row items-center'>
          <img
            src={record.imageURL}
            alt='Cross icon'
            width={18}
            height={18}
            style={{ borderRadius: '50%' }}
          />
          <span className='pl-1'>{colorCodeId}</span>
        </span>
      )
    }
  },
  {
    title: 'Style Code',
    dataIndex: 'styleCode',
    key: 'styleCode',
    render: (colorCodeId: string, record: ColorCodeType) => {
      return (
        <DrawerProductImage
          colorCodeId={colorCodeId}
          record={record}
        />
      )
    }
  },
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
