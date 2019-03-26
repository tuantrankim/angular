import { Name } from './name.model';

export interface Customer {
    id: number;
    accountBillToID: number;
    barcodeID: string;
    name: Name;
    categoryID: number;
    sourceID: number;
}
