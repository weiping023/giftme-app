import { Shop } from './shop';

export class Product
{
	category: string;
	description: string;
	imgPath: string;
	price: number;
	productId: number;
	productName: string;
	quantityOnHand: number;
	shop: Shop[];
	skuCode: string;                
		
	constructor()
	{
	}
}