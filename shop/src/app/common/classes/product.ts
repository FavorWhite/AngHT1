import { Iproduct } from '../interfaces/iproduct';
import { ProdCategory } from '../prodCategory';

export class Product implements Iproduct {
    id: string;
    name: string;
    description: string;
    price: number;
    category: ProdCategory;
    isAvaliable: boolean;

}
