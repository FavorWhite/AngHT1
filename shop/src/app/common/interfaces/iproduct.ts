import { ProdCategory } from '../prodCategory';

export interface Iproduct {
    id: string;
    name: string;
    description: string;
    price: number;
    category: ProdCategory;
    isAvaliable: boolean;
}
