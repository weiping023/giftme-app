import { Review } from './review';
import { Product } from './product';

export class Shop
{
	location: string;
	products: Product; 
	reviews: Review; 
	shopId: number;
	shopName: string;		
		
	constructor()
	{
	}
}