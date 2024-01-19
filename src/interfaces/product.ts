
interface PurchaseOrderType {
  purchaseOrderNumber: string;
  methodOfTransport: string;
  arrivalDate: string;
  quantityOrdered: number;
}

export interface ColorCodeType {
  colorCodeId: string;
  styleCode: string;
  description: string;
  currentPrice: number;
  inventoryOnHand: number;
  imageURL: string;
  weekToDateUnitSales: number;
  firstSaleDate: string;
  storeCount: {
    active: number;
    intended: number;
  };
  purchaseOrders: PurchaseOrderType[];
}

export interface ProductType {
  styleNumber: string;
  styleCategory: string;
  styleName: string;
  colorCodes: ColorCodeType[];
}